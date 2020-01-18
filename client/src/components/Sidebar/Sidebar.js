import React from 'react';
import styled from 'styled-components';
import { home } from 'react-icons-kit/feather/home';
import { user } from 'react-icons-kit/feather/user';
import { bookmark } from 'react-icons-kit/feather/bookmark';
import { bell } from 'react-icons-kit/feather/bell';

import { COLORS } from '../../constants';

import CurrentUserContext from '../CurrentUserContext';
import Logo from '../Logo';
import NavigationLink from '../NavigationLink';
import Modal from '../Modal';
import Spacer from '../Spacer';
import Button from '../Button';
import ComposeTweet from '../ComposeTweet';

const Sidebar = () => {
  const [currentUser] = React.useContext(CurrentUserContext);

  const [showComposeTweetModal, setShowComposeTweetModal] = React.useState(
    false
  );

  return (
    <Wrapper>
      <LogoWrapper>
        <Logo size={42} />
      </LogoWrapper>
      <NavigationLink href="/" name="Home" icon={home} />
      <NavigationLink
        href={`/${currentUser ? currentUser.handle : ''}`}
        name="Profile"
        icon={user}
      />
      <NavigationLink href="/notifications" name="Notifications" icon={bell} />
      <NavigationLink href="/bookmarks" name="Bookmarks" icon={bookmark} />
      <Spacer size={16} />
      <Button onClick={() => setShowComposeTweetModal(true)}>Meow</Button>

      <Modal
        isOpen={showComposeTweetModal}
        handleClose={() => setShowComposeTweetModal(false)}
        label="Compose new tweet modal"
      >
        <ComposeTweet afterSubmit={() => setShowComposeTweetModal(false)} />
      </Modal>
    </Wrapper>
  );
};

// Even though this is a sidebar, visually, it behaves as a header typically
// does.
const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  padding: 0 ${p => p.theme.unit * 3}px;
  position: relative;
`;

const LogoWrapper = styled.div`
  padding-top: 22px;
  padding-left: 8px;
  padding-bottom: 8px;
`;

export default Sidebar;
