import React from "react";
import styled from "styled-components";

import Avatar from "../Avatar";

const Tweet = ({ data }) => {
  console.log(data);
  return (
    <Wrapper>
      <Avatar
        handle={data.author.handle}
        src={data.author.avatarSrc}
        size={48}
      />
      <MainContent>
        <TopRow>
          <Name>{data.author.displayName}</Name>{" "}
          <Handle>@{data.author.handle}</Handle>
        </TopRow>
      </MainContent>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 12px;
  border-bottom: 1px solid ${p => p.theme.colors.gray[200]};
`;

const MainContent = styled.div`
  flex: 1;
  margin-left: 12px;
  display: flex;
  flex-direction: column;
`;

const TopRow = styled.div``;

const Name = styled.span`
  font-size: 16px;
  font-weight: bold;
`;
const Handle = styled.span`
  font-size: 14px;
`;

export default Tweet;
