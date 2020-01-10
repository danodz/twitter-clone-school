import React from "react";
import styled from "styled-components";

import useApiEndpoint from "../../hooks/use-api-endpoint.hook";

import CenteredSpinner from "../CenteredSpinner";
import SadScreen from "../SadScreen";
import Tweet from "../Tweet";

const Feed = ({ handle, mode }) => {
  const [data, status] = useApiEndpoint("/me/feed");

  if (status === "loading") {
    return <CenteredSpinner />;
  } else if (status === "error" || !data) {
    return <SadScreen />;
  }

  return (
    <Wrapper>
      {data.tweets.map(tweet => {
        return <Tweet key={tweet.id} data={tweet} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Feed;
