import React from 'react';
import styled from 'styled-components';
import { messageCircle as replyIcon } from 'react-icons-kit/feather/messageCircle';
import { repeat as retweetIcon } from 'react-icons-kit/feather/repeat';
import { heartOutline as likeOutlineIcon } from 'react-icons-kit/typicons/heartOutline';
import { heart as likeFilledIcon } from 'react-icons-kit/typicons/heart';
import { share as shareIcon } from 'react-icons-kit/feather/share';

import { COLORS } from '../../constants';

import IconButton from '../IconButton';
import TweetsContext from '../TweetsContext';

const TweetActions = ({ tweet, showCounts, ...delegated }) => {
  const [, actions] = React.useContext(TweetsContext);

  return (
    <Wrapper {...delegated}>
      <IconButton
        icon={replyIcon}
        color={COLORS.primary}
        onClick={ev => {
          ev.stopPropagation();
          ev.preventDefault();
        }}
      />
      <IconButton
        icon={retweetIcon}
        color={COLORS.retweet}
        status={tweet.isRetweeted ? 'on' : 'off'}
        num={showCounts && tweet.numRetweets}
        onClick={ev => {
          ev.stopPropagation();
          ev.preventDefault();

          actions.toggleTweetRetweet(tweet.id);

          fetch(`/api/tweet/${tweet.id}/retweet`, {
            method: 'PUT',
            body: JSON.stringify({
              retweet: !tweet.isRetweeted,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          });
        }}
        onKeyPress={ev => {
          if (ev.key === 'Enter') {
            ev.click();
          }
        }}
      />
      <IconButton
        icon={tweet.isLiked ? likeFilledIcon : likeOutlineIcon}
        color={COLORS.error}
        size={18}
        status={tweet.isLiked ? 'on' : 'off'}
        num={showCounts && tweet.numLikes}
        onClick={ev => {
          ev.stopPropagation();
          ev.preventDefault();

          actions.toggleTweetLike(tweet.id);

          fetch(`/api/tweet/${tweet.id}/like`, {
            method: 'PUT',
            body: JSON.stringify({
              like: !tweet.isLiked,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          });

          // TODO: Should .catch the promise and undo the action, if it
          // wasn't registered on the server
        }}
      />
      <IconButton
        icon={shareIcon}
        color={COLORS.primary}
        onClick={ev => {
          ev.stopPropagation();
          ev.preventDefault();
          console.log('click');
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${p => p.theme.colors.gray[700]};
`;

export default TweetActions;
