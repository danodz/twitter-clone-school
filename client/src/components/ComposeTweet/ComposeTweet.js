import React from 'react';
import styled from 'styled-components';

import Avatar from '../Avatar';

const ComposeTweet = ({ currentUser, handleSubmit }) => {
  return (
    <Wrapper>
      <Avatar
        handle={currentUser.handle}
        src={currentUser.avatarSrc}
        size={48}
      />
      <MainContent>
        <Textarea placeholder="What's happening?" />
        <Actions>TODO</Actions>
      </MainContent>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  padding: 12px;
`;

const MainContent = styled.div`
  flex: 1;
  margin-left: 12px;
  display: flex;
  flex-direction: column;
`;

const Textarea = styled.textarea`
  display: block;
  font-size: 20px;
  border: none;
  resize: none;
  padding: 12px;
  height: 100px;
`;

const Actions = styled.div``;

export default ComposeTweet;
