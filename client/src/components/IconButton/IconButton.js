import React from 'react';
import { Icon } from 'react-icons-kit';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import UnstyledButton from '../UnstyledButton';

const IconButton = ({ icon, color, num, status, size = 16, onClick }) => {
  return (
    <OuterWrapper
      style={{
        '--base-color': status === 'on' ? color : COLORS.gray[700],
        '--highlight-color': color,
        '--button-size': size * 2 + 'px',
      }}
    >
      <Wrapper onClick={onClick}>
        <IconElem icon={icon} size={size} />
      </Wrapper>
      {num > 0 && <Num>{num}</Num>}
    </OuterWrapper>
  );
};

const OuterWrapper = styled(UnstyledButton)`
  position: relative;
  color: var(--base-color);
  outline: none;

  &:hover {
    color: var(--highlight-color);
  }
`;

const Wrapper = styled.div`
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
    background-color: var(--highlight-color);
    opacity: 0;
  }

  &:hover:after {
    opacity: 0.1;
  }
  ${OuterWrapper}:focus &:after {
    opacity: 0.1;
  }
  ${OuterWrapper}:focus &:hover:after {
    opacity: 0.2;
  }
`;

const IconElem = styled(Icon)`
  display: block;

  i,
  svg {
    display: block !important;
  }
`;

const Num = styled.span`
  position: absolute;
  display: grid;
  place-content: center;
  top: 0;
  right: -8px;
  bottom: 0;
  margin: auto;
  transform: translateX(100%);
  outline: none;
`;

export default IconButton;
