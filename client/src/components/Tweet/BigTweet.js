import React from 'react';
import styled from 'styled-components';

import Avatar from '../Avatar';

const Tweet = ({ data }) => {
  console.log({ data });
  return (
    <Wrapper role="article" tabIndex="0">
      <Header>
        <Avatar
          handle={data.author.handle}
          src={data.author.avatarSrc}
          size={48}
        />
        <div>
          <Name>{data.author.displayName}</Name>{' '}
          <Handle>@{data.author.handle}</Handle>
        </div>
      </Header>
      <Body>{data.body}</Body>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  padding: 12px;
  border-bottom: 1px solid ${p => p.theme.colors.gray[200]};
`;

const Header = styled.div`
  display: flex;
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
  font-weight: bold;
  color: ${p => p.theme.colors.gray[900]};
`;
const Handle = styled.span`
  font-size: 14px;
  color: ${p => p.theme.colors.gray[500]};
`;
const Body = styled.p`
  margin: 0;
  margin-top: 8px;
  line-height: 1.3;
  font-size: 23px;
`;

export default Tweet;
