import React from 'react';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { calendar } from 'react-icons-kit/feather/calendar';
import { mapPin } from 'react-icons-kit/feather/mapPin';

import { getJoinedDate } from '../../helpers/date.helpers';

const IconStats = ({ profile }) => {
  return (
    <Wrapper>
      {profile.location && (
        <IconStat>
          <IconElem icon={mapPin} /> {profile.location}
        </IconStat>
      )}
      <IconStat>
        <IconElem icon={calendar} /> Joined {getJoinedDate(profile.joined)}
      </IconStat>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const IconStat = styled.div`
  display: flex;
  align-items: center;
  color: ${p => p.theme.colors.gray[600]};

  &:not(:last-of-type) {
    margin-right: 20px;
  }
`;

const IconElem = styled(Icon)`
  margin-right: 5px;
  transform: translateY(-2px);
`;

export default IconStats;
