import React from 'react';
import styled from 'styled-components';
import { messageCircle as replyIcon } from 'react-icons-kit/feather/messageCircle';
import { repeat as retweetIcon } from 'react-icons-kit/feather/repeat';
import { heart as likeIcon } from 'react-icons-kit/feather/heart';
import { share as shareIcon } from 'react-icons-kit/feather/share';

import { COLORS } from '../../constants';

import IconButton from '../IconButton';

const TweetActions = ({ numLikes, numRetweets, ...delegated }) => {
  return (
    <Wrapper {...delegated}>
      <IconButton
        icon={replyIcon}
        color={COLORS.primary}
        onClick={ev => {
          ev.stopPropagation();
          ev.preventDefault();
          console.log('click');
        }}
      />
      <IconButton
        icon={retweetIcon}
        color={COLORS.retweet}
        onClick={ev => {
          ev.stopPropagation();
          ev.preventDefault();
          console.log('click');
        }}
      />
      <IconButton
        icon={likeIcon}
        color={COLORS.error}
        onClick={async ev => {
          ev.stopPropagation();
          ev.preventDefault();

          const response = await fetch(
            `/api/tweets/${'1212689921057665024'}/like`,
            {
              method: 'PUT',
              body: JSON.stringify({
                like: true,
              }),
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );

          const json = await response.json();

          console.log(json);
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
