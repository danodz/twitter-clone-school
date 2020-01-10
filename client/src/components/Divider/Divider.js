import React from "react";
import styled from "styled-components";

const Divider = styled.div`
  height: ${p => p.size || 1}px;
  background: ${p => p.theme.colors.gray[200]};
`;

export default Divider;
