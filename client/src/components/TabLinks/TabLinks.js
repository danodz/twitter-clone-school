import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const TabLinks = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Tab = ({ to, children }) => {
  return (
    <TabWrapper exact to={to}>
      {children}
    </TabWrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  border-bottom: 1px solid ${p => p.theme.colors.gray[200]};
`;

const TabWrapper = styled(NavLink)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  font-size: 15px;
  font-weight: bold;
  text-decoration: none;
  color: ${p => p.theme.colors.gray[600]};

  &.active {
    color: ${p => p.theme.colors.primary};
    border-bottom: 2px solid ${p => p.theme.colors.primary};
  }
`;

TabLinks.Tab = Tab;

export default TabLinks;
