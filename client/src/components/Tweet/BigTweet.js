import React from 'react';
import styled from 'styled-components';

import Avatar from '../Avatar';
import TweetActions from './TweetActions';
import TweetMedia from './TweetMedia';

const BigTweet = ({ data }) => {
  return (
    <Wrapper role="article" tabIndex="0">
      <Header>
        <Avatar
          handle={data.author.handle}
          src={data.author.avatarSrc}
          size={48}
        />
        <UserDetails>
          <Name>{data.author.displayName}</Name>{' '}
          <Handle>@{data.author.handle}</Handle>
        </UserDetails>
      </Header>
      <Body>{data.body}</Body>
      <TweetMedia media={data.media} />
      <Actions />
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding: 12px;
  border-bottom: 1px solid ${p => p.theme.colors.gray[200]};
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const UserDetails = styled.div`
  margin-left: 15px;
`;

const MainContent = styled.div`
  flex: 1;
  margin-left: 12px;
  display: flex;
  flex-direction: column;
`;

const TopRow = styled.div`
  font-size: 15px;
`;

const Name = styled.span`
  display: block;
  font-weight: bold;
  color: ${p => p.theme.colors.gray[900]};
`;
const Handle = styled.span`
  font-size: 14px;
  color: ${p => p.theme.colors.gray[500]};
`;
const Body = styled.p`
  margin: 0;
  margin-top: 12px;
  margin-bottom: 12px;
  line-height: 1.3;
  font-size: 23px;
`;
const Actions = styled(TweetActions)`
  justify-content: space-around;
`;

export default BigTweet;
