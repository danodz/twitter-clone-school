import React from 'react';
import styled from 'styled-components';

import Header from '../Header';
import ComposeTweet from '../ComposeTweet';

const HomeFeed = ({ currentUser }) => {
  console.log({ currentUser });
  return (
    <Wrapper>
      <Header>Home</Header>
      <ComposeTweet currentUser={currentUser} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 1;
`;

export default HomeFeed;
