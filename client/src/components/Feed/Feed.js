import React from 'react';
import styled from 'styled-components';

import Tweet from '../Tweet';
import TweetsContext from '../TweetsContext';

const Feed = ({ handle, mode }) => {
  const [state] = React.useContext(TweetsContext);

  return (
    <Wrapper>
      {state.tweetIds.map(tweetId => {
        return <Tweet key={tweetId} tweet={state.tweetsById[tweetId]} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Feed;
