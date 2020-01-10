import React from "react";
import styled from "styled-components";

import Avatar from "../Avatar";
import CharacterCounter from "../CharacterCounter";
import Button from "../Button";
import Spacer from "../Spacer";

const LIMIT = 280;

const ComposeTweet = ({ currentUser, handleSubmit }) => {
  const [status, setStatus] = React.useState("");

  return (
    <Wrapper>
      <Avatar
        handle={currentUser.handle}
        src={currentUser.avatarSrc}
        size={48}
      />
      <MainContent>
        <Textarea
          placeholder="What's happening?"
          value={status}
          onChange={ev => setStatus(ev.target.value)}
        />
        <Actions>
          <CharacterCounter count={status.length} limit={LIMIT} />
          <Spacer size={16} />
          <Button disabled={status.length === 0 || status.length > LIMIT}>
            Tweet
          </Button>
        </Actions>
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
  color: #999;

  &:focus {
    outline: none;
    &::placeholder {
      color: #ccc;
    }
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export default ComposeTweet;
