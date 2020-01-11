import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';

import Avatar from '../Avatar';
import TweetActions from '../TweetActions';
import { getHumanizedDate } from './Tweet.helpers';

const SmallTweet = ({ data }) => {
  let history = useHistory();

  return (
    <Article
      role="article"
      onClick={ev => {
        console.log('ev', ev.target);
        history.push(`/tweet/${data.id}`);
      }}
      tabIndex={0}
    >
      <Avatar
        handle={data.author.handle}
        src={data.author.avatarSrc}
        size={48}
      />
      <MainContent>
        <TopRow>
          <PrimaryIdentifier>{data.author.displayName}</PrimaryIdentifier>{' '}
          <SecondaryIdentifiers>
            @{data.author.handle} · {getHumanizedDate(data.timestamp)}
          </SecondaryIdentifiers>
        </TopRow>
        <Body>{data.body}</Body>
        <TweetActions />
      </MainContent>
    </Article>
  );
};

const WrapperLink = styled(Link)`
  text-decoration: none;
`;

const Article = styled.article`
  display: flex;
  padding: 12px;
  padding-bottom: 4px;
  border-bottom: 1px solid ${p => p.theme.colors.gray[200]};
  color: ${p => p.theme.colors.gray[900]};
  cursor: pointer;

  &:hover {
    background: ${p => p.theme.colors.gray[100]};
  }
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

const PrimaryIdentifier = styled.span`
  font-weight: bold;
  color: ${p => p.theme.colors.gray[900]};
`;
const SecondaryIdentifiers = styled.span`
  font-size: 14px;
  color: ${p => p.theme.colors.gray[500]};
`;
const Body = styled.p`
  margin: 0;
  margin-top: 8px;
  margin-bottom: 8px;
  line-height: 1.3;
`;

export default SmallTweet;
