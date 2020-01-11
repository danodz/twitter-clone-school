import React from 'react';
import { Icon } from 'react-icons-kit';

import UnstyledButton from '../UnstyledButton';

const IconButton = ({ icon, color, num, size = 16, onClick }) => {
  return (
    <ActionButton
      style={{ '--color': color, '--button-size': size * 1.5 + 'px' }}
    >
      <ActionIcon icon={icon} size={size} />
    </ActionButton>
  );
};

const Wrapper = styled(UnstyledButton)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--size);
  height: var(--size);

  &:after {
    content: '';
    position: absolute;
    z-index: -1;
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

  ${Wrapper}:hover & {
    color: var(--color);
  }
`;

export default IconButton;
