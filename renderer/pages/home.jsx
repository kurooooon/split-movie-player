import React from "react";
import Player from "../components/Player";

import Dropzone from "react-dropzone";

const Home = () => {
  const videoJsOptions1 = {
    width: "100%",
    height: "100%",
    autoplay: true,
    controls: true,
    sources: [
      {
        src: "/movies/sample1.mp4",
        type: "video/mp4",
      },
    ],
  };

  const videoJsOptions2 = {
    width: "100%",
    height: "100%",
    autoplay: true,
    controls: true,
    sources: [
      {
        src: "/movies/sample2.mp4",
        type: "video/mp4",
      },
    ],
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Player options={videoJsOptions1} />
      {/* <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} /> */}
      <Player options={videoJsOptions2} />
      {/* </div>
          </section>
        )}
      </Dropzone> */}
    </div>
  );
};

export default Home;
