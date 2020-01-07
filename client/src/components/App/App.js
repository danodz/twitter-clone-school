import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { THEME } from '../../constants';

import GlobalStyles from '../GlobalStyles';
import Header from '../Header';
import HomeFeed from '../HomeFeed';
import MaxWidthWrapper from '../MaxWidthWrapper';

const App = () => {
  return (
    <ThemeProvider theme={THEME}>
      <Router>
        <>
          <Wrapper>
            <Header />
            <main>
              <Route path="/">
                <HomeFeed />
              </Route>
            </main>
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

export default App;
