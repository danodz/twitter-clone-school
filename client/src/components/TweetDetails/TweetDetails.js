import React from 'react';
import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';
import { arrowLeft } from 'react-icons-kit/feather/arrowLeft';

import { COLORS } from '../../constants';
import useApiEndpoint from '../../hooks/use-api-endpoint.hook';

import { TweetsProvider } from '../TweetsContext';
import CenteredSpinner from '../CenteredSpinner';
import SadScreen from '../SadScreen';
import Tweet from '../Tweet';
import IconButton from '../IconButton';
import Header from '../Header';

const TweetDetails = () => {
  const { tweetId } = useParams();
  const history = useHistory();
  const [data, status] = useApiEndpoint(`/tweet/${tweetId}`);

  if (status === 'loading') {
    return <CenteredSpinner />;
  } else if (status === 'error' || !data) {
    return <SadScreen />;
  }

  return (
    <TweetsProvider tweetsById={{ [data.tweet.id]: data.tweet }}>
      <>
        <Header
          action={
            <IconButton
              icon={arrowLeft}
              color={COLORS.primary}
              size={16}
              onClick={() => history.push('/')}
            />
          }
        >
          Meow
        </Header>
        <Tweet size="big" tweetId={data.tweet.id} />
      </>
    </TweetsProvider>
  );
};

export default TweetDetails;
