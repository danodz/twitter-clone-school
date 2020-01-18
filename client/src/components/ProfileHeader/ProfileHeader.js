import React from 'react';
import styled from 'styled-components';

import Avatar from '../Avatar';
import FollowButton from '../FollowButton';
import FollowerFollowingCount from '../FollowerFollowingCount';
import IconStats from './IconStats';

const ProfileHeader = ({ profile }) => {
  return (
    <Wrapper>
      <TopBanner src={profile.bannerSrc} />
      <MainSection>
        <TopRow>
          <BigAvatar
            handle={profile.handle}
            src={profile.avatarSrc}
            size={140}
          />
          <ProfileFollowButton profile={profile} />
        </TopRow>
        <DisplayName>{profile.displayName}</DisplayName>
        <Handle>
          @{profile.handle}
          {profile.isFollowingYou && <Label>Follows you</Label>}
        </Handle>
        <Bio>{profile.bio}</Bio>
        <IconStats profile={profile} />
        <ProfileFollowerFollowingCount
          numFollowers={profile.numFollowers}
          numFollowing={profile.numFollowing}
        />
      </MainSection>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const TopBanner = styled.img`
  position: relative;
  z-index: 1;
  display: block;
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const MainSection = styled.div`
  position: relative;
  z-index: 2;
  /* It should overlap the banner*/
  margin-top: -70px;
  padding-left: 16px;
  padding-right: 16px;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const BigAvatar = styled(Avatar)`
  border: 3px solid white;
`;

const ProfileFollowButton = styled(FollowButton)`
  margin-bottom: 15px;
`;

const DisplayName = styled.h3`
  font-size: 19px;
  font-weight: 700;
  color: ${p => p.theme.colors.gray[900]};
  margin-bottom: 4px;
`;

const Label = styled.span`
  display: inline-block;
  padding: 3px 5px;
  background: ${p => p.theme.colors.gray[200]};
  border-radius: 6px;
  color: ${p => p.theme.colors.gray[600]};
  font-size: 13px;
  margin-left: 5px;
`;

const Handle = styled.div`
  color: ${p => p.theme.colors.gray[600]};
  font-size: 15px;
`;

const Bio = styled.div`
  white-space: pre-wrap;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const ProfileFollowerFollowingCount = styled(FollowerFollowingCount)`
  margin-top: 15px;
  margin-bottom: 15px;
`;

export default ProfileHeader;
