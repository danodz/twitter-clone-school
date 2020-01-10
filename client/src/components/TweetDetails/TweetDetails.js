import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import useApiEndpoint from '../../hooks/use-api-endpoint.hook';

import CenteredSpinner from '../CenteredSpinner';
import SadScreen from '../SadScreen';
import Tweet from '../Tweet';

const TweetDetails = () => {
  const { tweetId } = useParams();
  const [data, status] = useApiEndpoint(`/tweet/${tweetId}`);

  if (status === 'loading') {
    return <CenteredSpinner />;
  } else if (status === 'error' || !data) {
    return <SadScreen />;
  }

  return <Tweet size="big" data={data.tweet} />;
};

export default TweetDetails;
