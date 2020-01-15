import React from 'react';
import Tippy from '@tippy.js/react';
import styled, { keyframes } from 'styled-components';

import 'tippy.js/dist/tippy.css';

const Tooltip = ({ content, children, ...delegated }) => {
  return (
    <StyledTippy
      arrow={false}
      placement="bottom-start"
      content={content}
      delay={[700, 400]}
      {...delegated}
    >
      {children}
    </StyledTippy>
  );
};

const enterKeyframes = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledTippy = styled(Tippy)`
  animation: ${enterKeyframes} 400ms both;
  padding: 8px 8px 12px 8px;
  font-size: 18px !important;
  /* text-align: center; */
  background: #fff !important;
  box-shadow: 0 0.7px 2.2px -2px rgba(0, 0, 0, 0.02),
    0 1.6px 5.3px -2px rgba(0, 0, 0, 0.028),
    0 2.6px 10px -2px rgba(0, 0, 0, 0.035),
    0 3.5px 17.9px -2px rgba(0, 0, 0, 0.042),
    0 4.1px 33.4px -2px rgba(0, 0, 0, 0.05), 0 4px 80px -2px rgba(0, 0, 0, 0.07);
  width: 300px;
`;

export default Tooltip;
