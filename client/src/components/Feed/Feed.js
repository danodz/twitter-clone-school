import React from 'react';
import styled from 'styled-components';

import Tweet from '../Tweet';
import TweetsContext from '../TweetsContext';

const Feed = ({ handle, mode }) => {
  const [tweets, dispatch] = React.useContext(TweetsContext);

  return (
    <Wrapper>
      {tweets.map(tweet => {
        return <Tweet key={tweet.id} tweet={tweet} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Feed;
