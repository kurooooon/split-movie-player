import React from "react";
import Player from "../components/Player";

const Home = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Player />
    </div>
  );
};

export default Home;
