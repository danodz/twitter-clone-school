import React from 'react';

import Button from '../Button';

const FollowButton = ({ profile }) => {
  // HACK: The proper way to do this would be to add a ProfileContext, and
  // mimic TweetsContext. I'm being lazy, though, so I'm going to solve this
  // here.
  // Note that this is a bad solution because there's no single source of
  // truth: different follow buttons could show different states. This is fine
  // for this fake app since the button is only used in 1 place, but this
  // wouldn't fly in a real app
  const [isFollowing, setIsFollowing] = React.useState(
    profile.isBeingFollowedByYou
  );

  const toggleFollowing = () => {
    let apiUrl = isFollowing
      ? `/api/${profile.handle}/unfollow`
      : `/api/${profile.handle}/follow`;

    setIsFollowing(!isFollowing);

    fetch(apiUrl, {
      method: 'PUT',
    });
  };

  return (
    <Button
      type={isFollowing ? 'primary' : 'secondary'}
      onClick={toggleFollowing}
    >
      {isFollowing ? 'Following' : 'Follow'}
    </Button>
  );
};

export default FollowButton;
