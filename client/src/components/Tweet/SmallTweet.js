import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Avatar from '../Avatar';
import TweetActions from '../TweetActions';
import { getHumanizedDate } from './Tweet.helpers';

const SmallTweet = ({ data }) => {
  return (
    <WrapperLink to={`/tweet/${data.id}`}>
      <Article>
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
    </WrapperLink>
  );
};

const WrapperLink = styled(Link)`
  display: block;
  padding: 12px;
  border-bottom: 1px solid ${p => p.theme.colors.gray[200]};
  text-decoration: none;
  color: ${p => p.theme.colors.gray[900]};
`;

const Article = styled.article`
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
  line-height: 1.3;
`;

export default SmallTweet;
