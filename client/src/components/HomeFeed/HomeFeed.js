import React from "react";
import styled from "styled-components";

import Header from "../Header";

const HomeFeed = () => {
  return (
    <Wrapper>
      <Header>Home</Header>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 1;
`;

export default HomeFeed;
