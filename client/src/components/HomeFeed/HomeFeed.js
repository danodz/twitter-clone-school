import React from 'react';
import styled from 'styled-components';

import Header from '../Header';
import ComposeTweet from '../ComposeTweet';
import Divider from '../Divider';
import Feed from '../Feed';
import CurrentUserContext from '../CurrentUserContext';

const HomeFeed = () => {
  const [currentUser] = React.useContext(CurrentUserContext);

  return (
    <Wrapper>
      <Header>Home</Header>
      <ComposeTweet currentUser={currentUser} />
      <Divider size={10} />
      <Feed handle={currentUser.handle} mode="following" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 1;
`;

export default HomeFeed;
