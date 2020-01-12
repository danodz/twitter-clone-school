import React from 'react';

const TweetsContext = React.createContext({});

const reducer = (state, action) => {
  switch (action.type) {
    case 'RECEIVE_NEW_DATA': {
      return action.tweets;
    }

    case 'TOGGLE_LIKE': {
      const { id } = action;
      return state.map(tweet => {
        if (tweet.id !== id) {
          return tweet;
        }

        return {
          ...tweet,
          isLiked: !tweet.isLiked,
          numLikes: tweet.isLiked ? tweet.numLikes - 1 : tweet.numLikes + 1,
        };
      });
    }

    case 'TOGGLE_RETWEET': {
      const { id } = action;
      return state.map(tweet => {
        if (tweet.id !== id) {
          return tweet;
        }

        return {
          ...tweet,
          isRetweeted: !tweet.isRetweeted,
          numRetweets: tweet.isRetweeted
            ? tweet.numRetweets - 1
            : tweet.numRetweets + 1,
        };
      });
    }

    default:
      return state;
  }
};

export const TweetsProvider = ({ tweets, children }) => {
  const [state, dispatch] = React.useReducer(reducer, tweets);

  React.useEffect(() => {
    dispatch({ type: 'RECEIVE_NEW_DATA', tweets });
  }, [tweets]);

  return (
    <TweetsContext.Provider value={[state, dispatch]}>
      {children}
    </TweetsContext.Provider>
  );
};

export default TweetsContext;
