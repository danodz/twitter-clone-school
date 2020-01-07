import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavLink = ({ icon, name, href }) => {
  return (
    <Wrapper>
      {icon}
      <Name>{name}</Name>
    </Wrapper>
  );
};

const Wrapper = styled(Link)``;

export default NavLink;
