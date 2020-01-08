import React from 'react';
import styled from 'styled-components';

const getComponent = size => {
  // prettier-ignore
  switch (size) {
    case 'large': return LargeHeading;
    case 'medium': return MediumHeading;
    case 'small': return SmallHeading;
  }
};

const Heading = ({ size = 'small', as = 'h1', ...delegated }) => {
  const Component = getComponent(size);
  return <Component as={as} {...delegated} />;
};

const Base = styled.h1`
  font-weight: bold;
  margin: 0;
`;

const LargeHeading = styled(Base)`
  font-size: 28px;
`;
const MediumHeading = styled(Base)`
  font-size: 24px;
`;
const SmallHeading = styled(Base)`
  font-size: 20px;
`;

export default Heading;
