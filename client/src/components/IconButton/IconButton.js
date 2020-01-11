import React from 'react';
import { Icon } from 'react-icons-kit';
import styled from 'styled-components';

import UnstyledButton from '../UnstyledButton';

const IconButton = ({ icon, color, num, size = 16, onClick }) => {
  return (
    <Wrapper
      onClick={onClick}
      style={{ '--color': color, '--button-size': size * 2 + 'px' }}
    >
      <IconElem icon={icon} size={size} />
    </Wrapper>
  );
};

const Wrapper = styled(UnstyledButton)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--button-size);
  height: var(--button-size);

  &:after {
    content: '';
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 1000px;
    background-color: var(--color);
    opacity: 0;
  }

  &:hover:after {
    opacity: 0.1;
  }
`;

const IconElem = styled(Icon)`
  color: ${p => p.theme.colors.gray[900]};
  display: block;

  i,
  svg {
    display: block !important;
  }

  ${Wrapper}:hover & {
    color: var(--color);
  }
`;

export default IconButton;
