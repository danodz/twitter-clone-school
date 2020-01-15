import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import Avatar from '../Avatar';
import TweetActions from './TweetActions';
import TweetMedia from './TweetMedia';
import { getHumanizedDate } from './Tweet.helpers';
import TwitterUsername from './TwitterUsername';

const SmallTweet = ({ tweet }) => {
  const history = useHistory();

  return (
    <Wrapper
      tabIndex="0"
      onClick={ev => {
        history.push(`/tweet/${tweet.id}`);
      }}
      onKeyPress={ev => {
        ev.preventDefault();
        ev.stopPropagation();
        if (ev.key === 'Enter' && ev.target === ev.currentTarget) {
          history.push(`/tweet/${tweet.id}`);
        }
      }}
    >
      <Article>
        <Avatar
          handle={tweet.author.handle}
          src={tweet.author.avatarSrc}
          size={48}
        />
        <MainContent>
          <TopRow>
            <TwitterUsername user={tweet.author} />{' '}
            <SecondaryIdentifiers>
              @{tweet.author.handle} · {getHumanizedDate(tweet.timestamp)}
            </SecondaryIdentifiers>
          </TopRow>
          <Body>{tweet.status}</Body>
          <TweetMedia media={tweet.media} />
          <Actions tweet={tweet} showCounts={true} />
        </MainContent>
      </Article>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: block;
  padding: 12px;
  padding-bottom: 4px;
  border-bottom: 1px solid ${p => p.theme.colors.gray[200]};
  text-decoration: none;
  color: ${p => p.theme.colors.gray[900]};
  cursor: pointer;

  &:hover {
    background-color: ${p => p.theme.colors.gray[100]};
  }
`;

const Article = styled.article`
  display: flex;
`;

const Actions = styled(TweetActions)`
  width: 80%;
  margin-left: -8px;
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

const SecondaryIdentifiers = styled.span`
  font-size: 14px;
  color: ${p => p.theme.colors.gray[500]};
`;
const Body = styled.p`
  margin: 0;
  margin-top: 8px;
  margin-bottom: 8px;
  line-height: 1.3;
  font-size: 15px;
`;

export default SmallTweet;
