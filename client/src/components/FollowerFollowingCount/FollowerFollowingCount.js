import React from 'react';
import styled from 'styled-components';

const FollowerFollowingCount = ({
  numFollowers,
  numFollowing,
  ...delegated
}) => {
  return (
    <Row {...delegated}>
      <Count>
        <strong>{numFollowing}</strong> Following
      </Count>
      <Count>
        <strong>{numFollowers}</strong> Followers
      </Count>
    </Row>
  );
};

const Row = styled.div`
  display: flex;
`;

const Count = styled.div`
  color: ${p => p.theme.colors.gray[600]};
  &:not(:last-of-type) {
    margin-right: 24px;
  }

  strong {
    color: ${p => p.theme.colors.gray[900]};
  }
`;

export default FollowerFollowingCount;
