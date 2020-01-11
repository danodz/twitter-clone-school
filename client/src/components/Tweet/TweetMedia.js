import React from 'react';
import styled from 'styled-components';

const TweetMedia = ({ media }) => {
  if (!media || media.length === 0) {
    return null;
  }

  // For now: We only support 1 image
  const [img] = media;
  return <Image alt={img.alt} src={img.url} />;
};

const Image = styled.img`
  display: block;
  width: 100%;
  border-radius: 16px;
  margin-bottom: 8px;
`;

export default TweetMedia;
