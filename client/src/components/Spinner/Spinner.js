import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Icon } from 'react-icons-kit';
import { loader } from 'react-icons-kit/feather/loader';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
`;

const SpinningIcon = styled(Icon)`
  animation: ${spin} 2000ms linear infinite;
  color: ${p => p.theme.colors.gray[500]};
`;

const Spinner = ({ size = 32, ...delegated }) => {
  return <SpinningIcon size={size} icon={loader} {...delegated} />;
};

export default Spinner;
