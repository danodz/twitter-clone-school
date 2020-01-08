import React from 'react';
import styled from 'styled-components';

import Spinner from '../Spinner';

const CenteredSpinner = props => {
  return (
    <Wrapper>
      <Spinner {...props} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  place-content: center;
  padding: 72px 0;
`;

export default CenteredSpinner;
