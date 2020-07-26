import React, { useState } from "react";
import Player from "../components/Player";

const Home = () => {
  const [splits, setSplits] = useState(1);

  return (
    <>
      <div style={{ height: "20px" }}>
        <button tabIndex="-1" onClick={() => setSplits(splits - 1)}>
          -1
        </button>
        <button tabIndex="-1" onClick={() => setSplits(splits + 1)}>
          +1
        </button>
      </div>
      <div
        style={{
          width: "100%",
          height: "calc(100vh - 20px)",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
        }}
      >
        {[...Array(splits)].map((_, index) => (
          <Player key={index} />
        ))}
      </div>
    </>
  );
};

export default Home;
