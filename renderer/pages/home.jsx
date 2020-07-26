import React, { useState } from "react";
import Player from "../components/Player";
import styled from "@emotion/styled";

const StyledMenu = styled.div`
  height: 20px;
`;

const StyledPlayerWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 20px);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: #666;
`;

const Home = () => {
  const [splits, setSplits] = useState(1);

  return (
    <>
      <StyledMenu style={{ height: "20px" }}>
        <button
          tabIndex="-1"
          onClick={() => {
            if (splits <= 1) {
              return;
            }
            setSplits(splits - 1);
          }}
        >
          -1
        </button>
        <button tabIndex="-1" onClick={() => setSplits(splits + 1)}>
          +1
        </button>
      </StyledMenu>
      <StyledPlayerWrapper>
        {[...Array(splits)].map((_, index) => (
          <Player key={index} />
        ))}
      </StyledPlayerWrapper>
    </>
  );
};

export default Home;
