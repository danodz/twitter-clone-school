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
          console.log('click');
        }}
      />
      <IconButton
        icon={retweetIcon}
        color={COLORS.retweet}
        onClick={ev => {
          ev.stopPropagation();
          console.log('click');
        }}
      />
      <IconButton
        icon={likeIcon}
        color={COLORS.error}
        onClick={ev => {
          ev.stopPropagation();
          console.log('click');
        }}
      />
      <IconButton
        icon={shareIcon}
        color={COLORS.primary}
        onClick={ev => {
          ev.stopPropagation();
          console.log('click');
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default TweetActions;
