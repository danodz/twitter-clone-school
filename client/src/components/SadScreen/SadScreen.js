import React from 'react';
import { Icon } from 'react-icons-kit';
import { u1F4A3 as bomb } from 'react-icons-kit/noto_emoji_regular/u1F4A3';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Heading from '../Heading';
import Paragraph from '../Paragraph';

const SadScreen = ({
  title = 'An unknown error has occurred.',
  children = (
    <Paragraph>
      Please try refreshing the page, or{' '}
      <Link to="/contact">contact support</Link> if the problem persists.
    </Paragraph>
  ),
}) => {
  return (
    <Wrapper>
      <Icon icon={bomb} size={64} />
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  padding: 72px 12px;
  max-width: 400px;
  margin: auto;
`;

const Title = styled(Heading)`
  margin-top: 48px;
  margin-bottom: 16px;
`;

export default SadScreen;
