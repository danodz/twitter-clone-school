import React from 'react';
import styled from 'styled-components';

import Logo from '../Logo';

const Header = () => {
  return (
    <Wrapper>
      <Logo size={42} />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  width: 275px;
  padding: 0 ${p => p.theme.unit * 3}px;
`;

export default Header;
