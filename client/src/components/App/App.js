import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { THEME } from '../../constants';

import GlobalStyles from '../GlobalStyles';
import Sidebar from '../Sidebar';
import HomeFeed from '../HomeFeed';
import ProfileFeed from '../ProfileFeed';
import MaxWidthWrapper from '../MaxWidthWrapper';
import CenteredSpinner from '../CenteredSpinner';
import SadScreen from '../SadScreen';

const App = () => {
  const [profile, setProfile] = React.useState(null);
  const [status, setStatus] = React.useState('loading');

  React.useEffect(() => {
    fetch('/me/profile')
      .then(res => res.json())
      .then(data => {
        setProfile(data);
        setStatus('idle');
      })
      .catch(err => {
        setStatus('error');
      });
  }, []);

  return (
    <ThemeProvider theme={THEME}>
      <Router>
        <>
          <Wrapper>
            <Sidebar />
            <Main>
              {status === 'idle' ? (
                <Switch>
                  <Route exact path="/">
                    <HomeFeed />
                  </Route>
                  <Route path="/:handle">
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
