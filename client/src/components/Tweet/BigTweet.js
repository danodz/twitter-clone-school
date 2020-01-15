import React from 'react';
import styled from 'styled-components';

import Avatar from '../Avatar';
import TweetsContext from '../TweetsContext';
import TweetActions from './TweetActions';
import TweetMedia from './TweetMedia';
import { getDetailedDate } from './Tweet.helpers';

const pluralizeLike = num => (num === 1 ? 'Like' : 'Likes');
const pluralizeRetweet = num => (num === 1 ? 'Retweet' : 'Retweets');

const BigTweet = ({ tweetId }) => {
  const [state] = React.useContext(TweetsContext);
  const tweet = state.tweetsById[tweetId];

  return (
    <Wrapper role="article" tabIndex="0">
      <Header>
        <Avatar
          handle={tweet.author.handle}
          src={tweet.author.avatarSrc}
          size={48}
        />
        <UserDetails>
          <Name>{tweet.author.displayName}</Name>{' '}
          <Handle>@{tweet.author.handle}</Handle>
        </UserDetails>
      </Header>
      <Body>{tweet.status}</Body>
      <TweetMedia media={tweet.media} />
      <TweetDeets>
        {getDetailedDate(tweet.timestamp)} · Critter web app
      </TweetDeets>
      {(tweet.numLikes > 0 || tweet.numRetweets > 0) && (
        <TweetDeets>
          {tweet.numLikes > 0 && (
            <Stat>
              <strong>{tweet.numLikes}</strong> {pluralizeLike(tweet.numLikes)}
            </Stat>
          )}
          {tweet.numRetweets > 0 && (
            <Stat>
              <strong>{tweet.numRetweets}</strong>{' '}
              {pluralizeRetweet(tweet.numRetweets)}
            </Stat>
          )}
        </TweetDeets>
      )}
      <Actions tweet={tweet} />
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
  color: ${p => p.theme.colors.gray[600]};
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
  margin-top: 12px;
`;

const TweetDeets = styled.div`
  color: ${p => p.theme.colors.gray[600]};
  padding-top: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${p => p.theme.colors.gray[200]};
`;

const Stat = styled.span`
  display: inline-block;
  margin-right: 16px;
  color: ${p => p.theme.colors.gray[600]};

  strong {
    font-weight: bold;
    color: ${p => p.theme.colors.gray[800]};
  }
`;

export default BigTweet;
