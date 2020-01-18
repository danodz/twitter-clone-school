import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Heading from '../Heading';

const Header = ({ children, action }) => {
  const hasAction = !!action;
  return (
    <Wrapper style={{ paddingLeft: hasAction ? 0 : undefined }}>
      {hasAction && <ActionWrapper>{action}</ActionWrapper>}
      <Heading size="small">{children}</Heading>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  font-size: 20px;
  font-weight: 600;
  border-bottom: 1px solid ${COLORS.gray[200]};
`;

const ActionWrapper = styled.div`
  margin-right: 12px;
  margin-left: 12px;
`;

export default Header;
