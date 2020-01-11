import React from 'react';
import styled from 'styled-components';
import { messageCircle as replyIcon } from 'react-icons-kit/feather/messageCircle';
import { repeat as retweetIcon } from 'react-icons-kit/feather/repeat';
import { heart as likeIcon } from 'react-icons-kit/feather/heart';
import { share as shareIcon } from 'react-icons-kit/feather/share';

import { COLORS } from '../../constants';

import IconButton from '../IconButton';

const TweetActions = ({ numLikes, numRetweets }) => {
  return (
    <Wrapper>
      <IconButton icon={replyIcon} color={COLORS.primary} />
      <IconButton icon={retweetIcon} color={COLORS.success} />
      <IconButton icon={likeIcon} color={COLORS.error} />
      <IconButton icon={shareIcon} color={COLORS.primary} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default TweetActions;
