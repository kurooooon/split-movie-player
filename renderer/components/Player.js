import React, { useRef, useState } from "react";
import Dropzone from "react-dropzone";
import {
  Player as ReactPlayer,
  ControlBar,
  BigPlayButton,
  ProgressControl,
  VolumeMenuButton,
} from "video-react";
import styled from "@emotion/styled";

const StyledPlayer = styled(ReactPlayer)`
  padding-top: 0 !important;
  height: 100% !important;
`;

export default function Player() {
  let playerRef = useRef(null);
  const [blobUrl, setBlobUrl] = useState(null);
  return (
    <div style={{ flex: 1, minHeight: "50%" }}>
      <Dropzone
        onDrop={(acceptedFiles) => {
          const blobUrl = window.URL.createObjectURL(acceptedFiles[0]);
          setBlobUrl(blobUrl);
          playerRef.current.load();
        }}
      >
        {({ getRootProps }) => (
          <div style={{ height: "100%", display: "flex" }} {...getRootProps()}>
            <StyledPlayer
              ref={playerRef}
              autoPlay
              poster="http://placehold.jp/150x50.png?text=empty"
            >
              {blobUrl && <source src={blobUrl} />}
              <ControlBar autoHide disableDefaultControls>
                <ProgressControl />
                <VolumeMenuButton tabindex="-1" vertical />
              </ControlBar>
              <BigPlayButton position="center" />
            </StyledPlayer>
          </div>
        )}
      </Dropzone>
    </div>
  );
}
