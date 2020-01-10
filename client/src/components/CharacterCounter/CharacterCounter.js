import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

const CharacterCounter = ({ count, limit = 280 }) => {
  let color = COLORS.gray[400];
  const ratio = count / limit;

  if (ratio > 1) {
    color = COLORS.error;
  } else if (ratio > 0.8) {
    color = COLORS.warning;
  }

  return <Wrapper style={{ color }}>{limit - count}</Wrapper>;
};

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  font-size: 14px;
`;

export default CharacterCounter;
