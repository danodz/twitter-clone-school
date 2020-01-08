import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';

const NavigationLink = ({ href, name, icon }) => {
  return (
    <Wrapper to={href} exact>
      <InnerWrapper>
        <Icon size={24} icon={icon} />
        <Name>{name}</Name>
      </InnerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(NavLink)`
  text-decoration: none;
`;

const InnerWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  color: black;
  padding: 15px;
  font-size: 18px;
  font-weight: 600;

  &:after {
    position: absolute;
    z-index: -1;
    top: 3px;
    left: 0;
    right: 0;
    bottom: 3px;
    display: none;
    content: '';
    border-radius: 1000px;
    background: ${p => p.theme.colors.primary};
  }

  ${Wrapper}.active & {
    color: ${p => p.theme.colors.primary};
  }

  ${Wrapper}:hover & {
    color: ${p => p.theme.colors.primary};

    &:after {
      display: block;
      opacity: 0.1;
    }
  }
`;

const Name = styled.div`
  margin-left: 22px;

  @media ${p => p.theme.breakpoints.md} {
    display: none;
  }
`;

export default NavigationLink;
