import React from 'react';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { repeat as retweetIcon } from 'react-icons-kit/feather/repeat';
import { Link } from 'react-router-dom';

import ProfileTooltip from './ProfileTooltip';

const RetweetPrefix = ({ profile }) => {
  return (
    <Wrapper>
      <RetweetIcon icon={retweetIcon} />
      <ProfileTooltip profile={profile}>
        <ProfileLink
          to={`/${profile.handle}`}
          onClick={ev => {
            ev.stopPropagation();
          }}
        >
          {profile.displayName} Remeowed
        </ProfileLink>
      </ProfileTooltip>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 6px;
  margin-bottom: 6px;
  margin-left: 25px;
  font-size: 13px;
`;

const RetweetIcon = styled(Icon)`
  margin-right: 10px;
`;

const ProfileLink = styled(Link)`
  text-decoration: none;
  color: ${p => p.theme.colors.gray[600]};

  &:hover {
    text-decoration: underline;
  }
`;

export default RetweetPrefix;
