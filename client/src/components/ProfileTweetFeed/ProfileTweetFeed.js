import React from 'react';
import { useParams } from 'react-router-dom';

import useApiEndpoint from '../../hooks/use-api-endpoint.hook';

import { TweetsProvider } from '../TweetsContext';
import Feed from '../Feed';
import CenteredSpinner from '../CenteredSpinner';

const ProfileTweetFeed = () => {
  const { handleId } = useParams();

  const [feedData, feedStatus] = useApiEndpoint(`/${handleId}/feed`);

  let mainContent;
  if (feedStatus === 'loading') {
    mainContent = <CenteredSpinner />;
  } else {
    mainContent = <Feed />;
  }

  return (
    <TweetsProvider
      tweetsById={feedData ? feedData.tweetsById : undefined}
      tweetIds={feedData ? feedData.tweetIds : undefined}
    >
      {mainContent}
    </TweetsProvider>
  );
};

export default ProfileTweetFeed;
