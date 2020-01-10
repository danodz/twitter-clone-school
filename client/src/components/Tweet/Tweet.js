import React from 'react';

import SmallTweet from './SmallTweet';
import BigTweet from './BigTweet';

const Tweet = ({ size = 'small', ...delegated }) => {
  if (size === 'small') {
    return <SmallTweet {...delegated} />;
  }

  return <BigTweet {...delegated} />;
};

export default Tweet;
