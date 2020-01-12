import React from 'react';
import styled from 'styled-components';

import useApiEndpoint from '../../hooks/use-api-endpoint.hook';

import Header from '../Header';
import ComposeTweet from '../ComposeTweet';
import Divider from '../Divider';
import Feed from '../Feed';
import CenteredSpinner from '../CenteredSpinner';
import SadScreen from '../SadScreen';
import CurrentUserContext from '../CurrentUserContext';
import { TweetsProvider } from '../TweetsContext';

const HomeFeed = () => {
  const [currentUser] = React.useContext(CurrentUserContext);

  const [data, status, retrigger] = useApiEndpoint('/me/home-feed');

  let mainContent;
  if (status === 'loading') {
    mainContent = <CenteredSpinner />;
  } else if (status === 'error' || !data) {
    mainContent = <SadScreen />;
  } else {
    mainContent = <Feed />;
  }

  return (
    <Wrapper>
      <Header>Home</Header>
      <ComposeTweet
        currentUser={currentUser}
        handleSubmit={status => {
          return fetch('/api/tweet', {
            method: 'POST',
            body: JSON.stringify({
              status,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          }).then(retrigger);
        }}
      />
      <Divider size={10} />
      <TweetsProvider
        tweetsById={data ? data.tweetsById : undefined}
        tweetIds={data ? data.tweetIds : undefined}
      >
        {mainContent}
      </TweetsProvider>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 1;
`;

export default HomeFeed;
