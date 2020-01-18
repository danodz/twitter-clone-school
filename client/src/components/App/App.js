import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { THEME } from '../../constants';

import GlobalStyles from '../GlobalStyles';
import Sidebar from '../Sidebar';
import MaxWidthWrapper from '../MaxWidthWrapper';
import CenteredSpinner from '../CenteredSpinner';
import SadScreen from '../SadScreen';
import HomeFeed from '../HomeFeed';
import Profile from '../Profile';
import TweetDetails from '../TweetDetails';
import CurrentUserContext, { CurrentUserProvider } from '../CurrentUserContext';
import TweetsContext, { TweetsProvider } from '../TweetsContext';

const App = () => {
  const [currentUser, authStatus] = React.useContext(CurrentUserContext);

  return (
    <>
      <Wrapper>
        <Sidebar />
        <Main>
          {authStatus === 'idle' && currentUser ? (
            <Switch>
              <Route exact path="/">
                <HomeFeed currentUser={currentUser} />
              </Route>
              <Route path="/tweet/:tweetId">
                <TweetDetails />
              </Route>
              <Route path="/:handleId">
                <Profile />
              </Route>
            </Switch>
          ) : authStatus === 'loading' ? (
            <CenteredSpinner />
          ) : (
            <SadScreen />
          )}
        </Main>
      </Wrapper>
      <GlobalStyles />
    </>
  );
};

const WrappedApp = () => {
  return (
    <ThemeProvider theme={THEME}>
      <CurrentUserProvider>
        <TweetsProvider>
          <Router>
            <App />
          </Router>
        </TweetsProvider>
      </CurrentUserProvider>
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

export default WrappedApp;
