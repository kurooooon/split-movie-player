import React, { useState } from "react";
import Dropzone from "react-dropzone";
import styled from "@emotion/styled";
import {
  Media,
  Player as VideoPlayer,
  controls,
  utils,
} from "react-media-player";
const { SeekBar, Volume } = controls;
const { keyboardControls } = utils;

const StyledMediaControls = styled.div`
  display: flex;
  align-items: center;
  background-color: #282f31;
  color: #fff;
  height: 15px;
  position: absolute;
  width: 100%;
  bottom: 0;
`;

const StyledSeekBar = styled(SeekBar)`
  margin-left: 15px;
  -webkit-appearance: none;
  appearance: none;
  background-color: #c7c7c7;
  height: 2px;
  width: 100%;

  &:focus,
  &:active {
    outline: none;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;
    position: relative;
    border: none;
    width: 8px;
    height: 8px;
    display: block;
    background-color: #00bfff;
    border-radius: 50%;
  }
`;

const StyledVolume = styled(Volume)`
  margin: 0 15px;
  width: 20%;
  -webkit-appearance: none;
  appearance: none;
  background-color: #c7c7c7;
  height: 2px;

  &:focus,
  &:active {
    outline: none;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;
    position: relative;
    border: none;
    width: 8px;
    height: 8px;
    display: block;
    background-color: #00bfff;
    border-radius: 50%;
  }
`;

export default function Player() {
  const [blobUrl, setBlobUrl] = useState(null);
  let savedVolume = 1;
  if (typeof window !== "undefined") {
    savedVolume = Number(localStorage.getItem("savedVolume"));
  }
  return (
    <div style={{ flex: 1, minHeight: "50%" }}>
      <Dropzone
        onDrop={(acceptedFiles) => {
          const blobUrl = window.URL.createObjectURL(acceptedFiles[0]);
          setBlobUrl(blobUrl);
        }}
      >
        {({ getRootProps }) => (
          <div style={{ height: "100%", display: "flex" }} {...getRootProps()}>
            <Media>
              {(mediaProps) => (
                <div
                  style={{ width: "100%", position: "relative" }}
                  onKeyDown={keyboardControls.bind(null, mediaProps)}
                >
                  <VideoPlayer
                    onVolumeChange={({ volume }) => {
                      if (!isNaN(volume)) {
                        localStorage.setItem("savedVolume", Number(volume));
                      }
                    }}
                    defaultVolume={savedVolume}
                    tabIndex="0"
                    style={{ width: "100%", height: "100%" }}
                    src={blobUrl}
                  />
                  <StyledMediaControls>
                    <StyledSeekBar />
                    <StyledVolume />
                  </StyledMediaControls>
                </div>
              )}
            </Media>
          </div>
        )}
      </Dropzone>
    </div>
  );
}
