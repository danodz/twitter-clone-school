import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { THEME } from "../../constants";

import GlobalStyles from "../GlobalStyles";
import Sidebar from "../Sidebar";
import HomeFeed from "../HomeFeed";
import MaxWidthWrapper from "../MaxWidthWrapper";

const App = () => {
  return (
    <ThemeProvider theme={THEME}>
      <Router>
        <>
          <Wrapper>
            <Sidebar />
            <Main>
              <Route path="/">
                <HomeFeed />
              </Route>
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
