import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import useApiEndpoint from '../../hooks/use-api-endpoint.hook';

import CenteredSpinner from '../CenteredSpinner';
import SadScreen from '../SadScreen';
import Tweet from '../Tweet';
import { TweetsProvider } from '../TweetsContext';

const TweetDetails = () => {
  const { tweetId } = useParams();
  const [data, status] = useApiEndpoint(`/tweet/${tweetId}`);

  if (status === 'loading') {
    return <CenteredSpinner />;
  } else if (status === 'error' || !data) {
    return <SadScreen />;
  }

  return (
    <TweetsProvider tweetsById={{ [data.tweet.id]: data.tweet }}>
      <Tweet size="big" tweetId={data.tweet.id} />
    </TweetsProvider>
  );
};

export default TweetDetails;
