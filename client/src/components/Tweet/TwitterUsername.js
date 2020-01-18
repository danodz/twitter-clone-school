import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';

import Tooltip from '../Tooltip';
import Avatar from '../Avatar';
import FollowerFollowingCount from '../FollowerFollowingCount/FollowerFollowingCount';

const TwitterUsername = ({ user }) => {
  const history = useHistory();

  const visitUserProfile = ev => {
    ev.preventDefault();
    ev.stopPropagation();

    history.push(`/${user.handle}`);
  };

  return (
    <Tooltip
      interactive={true}
      content={
        <ProfileWrapper onClick={visitUserProfile}>
          <TooltipAvatar handle={user.handle} src={user.avatarSrc} size={48} />
          <DisplayName>{user.displayName}</DisplayName>
          <Handle>@{user.handle}</Handle>
          <Bio>{user.bio}</Bio>
          <FollowerFollowingCount
            numFollowers={user.numFollowers}
            numFollowing={user.numFollowing}
          />
        </ProfileWrapper>
      }
    >
      <DisplayNameLink
        as={Link}
        onClick={visitUserProfile}
        to={`/${user.handle}`}
      >
        <span>{user.displayName}</span>
      </DisplayNameLink>
    </Tooltip>
  );
};

const DisplayName = styled.div`
  font-weight: bold;
  color: #000;
  margin: 0;
  padding: 0;
`;

const DisplayNameLink = styled(DisplayName)`
  display: inline-block;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ProfileWrapper = styled.div`
  color: ${p => p.theme.colors.gray[900]};
  font-size: 15px;
`;

const TooltipAvatar = styled(Avatar)`
  margin-bottom: 8px;
`;

const Handle = styled.div`
  font-size: 15px;
  color: ${p => p.theme.colors.gray[600]};
  margin-top: -3px;
`;

const Bio = styled.div`
  margin-top: 12px;
  margin-bottom: 12px;
`;

export default TwitterUsername;
