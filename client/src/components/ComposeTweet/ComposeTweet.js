import React from 'react';
import styled from 'styled-components';

import Avatar from '../Avatar';
import CharacterCounter from '../CharacterCounter';
import Button from '../Button';
import Spacer from '../Spacer';
import Spinner from '../Spinner';

const LIMIT = 280;

const ComposeTweet = ({ currentUser, handleSubmit }) => {
  const [status, setStatus] = React.useState('');
  const [sending, setSending] = React.useState(false);

  return (
    <form
      onSubmit={ev => {
        ev.preventDefault();

        setSending(true);

        // redundant guard
        if (status.length > LIMIT) {
          return;
        }

        handleSubmit(status).then(() => {
          setStatus('');
          setSending(false);
        });
      }}
    >
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
            <Button
              style={{ width: 80 }}
              disabled={
                status.length === 0 || status.length > LIMIT || sending === true
              }
            >
              {sending ? (
                <Spinner size={16} style={{ color: '#FFF' }} />
              ) : (
                'Meow'
              )}
            </Button>
          </Actions>
        </MainContent>
      </Wrapper>
    </form>
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
  color: ${p => p.theme.colors.gray[900]};

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
