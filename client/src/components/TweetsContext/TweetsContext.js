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

export const TweetsProvider = ({ tweetsById, tweetIds, children }) => {
  const [state, setState] = React.useState({ tweetsById, tweetIds });

  const toggleTweetLike = tweetId => {
    setState(state => {
      const tweet = state.tweetsById[tweetId];
      return {
        ...state,
        tweetsById: {
          ...state.tweetsById,
          [tweetId]: {
            ...tweet,
            isLiked: !tweet.isLiked,
            numLikes: tweet.isLiked ? tweet.numLikes - 1 : tweet.numLikes + 1,
          },
        },
      };
    });
  };
  const toggleTweetRetweet = tweetId => {
    setState(state => {
      const tweet = state.tweetsById[tweetId];
      return {
        ...state,
        tweetsById: {
          ...state.tweetsById,
          [tweetId]: {
            ...tweet,
            isRetweeted: !tweet.isRetweeted,
            numRetweets: tweet.isRetweeted
              ? tweet.numRetweets - 1
              : tweet.numRetweets + 1,
          },
        },
      };
    });
  };

  React.useEffect(() => {
    setState({ tweetsById, tweetIds });
  }, [tweetsById, tweetIds]);

  const actions = { toggleTweetLike, toggleTweetRetweet };

  return (
    <TweetsContext.Provider value={[state, actions]}>
      {children}
    </TweetsContext.Provider>
  );
};

export default TweetsContext;
