import React from 'react';
import styled from 'styled-components';
import { Dialog } from '@reach/dialog';
import VisuallyHidden from '@reach/visually-hidden';
import { Icon } from 'react-icons-kit';
import { x } from 'react-icons-kit/feather/x';
import '@reach/dialog/styles.css';

import UnstyledButton from '../UnstyledButton';

const Modal = ({ label, isOpen, handleClose, children }) => {
  return (
    <Wrapper aria-label={label} isOpen={isOpen} onDismiss={handleClose}>
      <Header>
        <CloseButton onClick={handleClose}>
          <VisuallyHidden>Close</VisuallyHidden>
          <span aria-hidden>
            <Icon size={24} icon={x} />
          </span>
        </CloseButton>
      </Header>
      <Body>{children}</Body>
    </Wrapper>
  );
};

const Wrapper = styled(Dialog)`
  border-radius: 20px;
  padding: 0 !important;
  max-width: 600px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 5px;
  border-bottom: 1px solid ${p => p.theme.colors.gray[300]};
`;

const CloseButton = styled(UnstyledButton)`
  padding: 15px;
  color: ${p => p.theme.colors.primary};
`;

const Body = styled.div``;

export default Modal;
