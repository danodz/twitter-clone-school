import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Heading from '../Heading';

const Header = ({ children }) => {
  return (
    <Wrapper>
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

export default Header;
