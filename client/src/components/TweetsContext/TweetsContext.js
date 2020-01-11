import React from 'react';

const TweetsContext = React.createContext({});

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_TWEETS': {
    }

    case 'LIKE_TWEET': {

    }

    case 'UNLIKE_TWEET': {

    }

    case 'RETWEET_TWEET': {

    }

    case 'UNRETWEET_TWEET': {

    }
  }
};

export const TweetsProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return <TweetsContext.Provider value={data}>;
};

export default TweetsContext;
