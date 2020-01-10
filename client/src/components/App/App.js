import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { THEME } from '../../constants';
import useApiEndpoint from '../../hooks/use-api-endpoint.hook';

import GlobalStyles from '../GlobalStyles';
import Sidebar from '../Sidebar';
import MaxWidthWrapper from '../MaxWidthWrapper';
import CenteredSpinner from '../CenteredSpinner';
import SadScreen from '../SadScreen';
import HomeFeed from '../HomeFeed';
import ProfileFeed from '../ProfileFeed';
import TweetDetails from '../TweetDetails';

const App = () => {
  const [data, status] = useApiEndpoint('/me/profile');

  return (
    <ThemeProvider theme={THEME}>
      <Router>
        <>
          <Wrapper>
            <Sidebar />
            <Main>
              {status === 'idle' && data ? (
                <Switch>
                  <Route exact path="/">
                    <HomeFeed currentUser={data.profile} />
                  </Route>
                  <Route path="/tweet/:tweetId">
                    <TweetDetails />
                  </Route>
                  <Route exact path="/:handle">
                    <ProfileFeed />
                  </Route>
                </Switch>
              ) : status === 'loading' ? (
                <CenteredSpinner />
              ) : (
                <SadScreen />
              )}
            </Main>
          </Wrapper>
          <GlobalStyles />
        </>
      </Router>
    </ThemeProvider>
  );
};

const Wrapper = styled(MaxWidthWrapper)`
  display: flex;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  border-left: 1px solid ${p => p.theme.colors.gray[200]};
  border-right: 1px solid ${p => p.theme.colors.gray[200]};
`;

export default App;
