import React from "react"
import videojs from 'video.js'

export default class Player extends React.Component {
  componentDidMount() {
    // instantiate Video.js
    this.player = videojs(this.videoNode, this.props.options, function onPlayerReady() {
      console.log('onPlayerReady', this)
    });
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }

  render() {
    return (
      <div style={{ flex: 1 }}> 
        <div data-vjs-player>
          <video style={{ width: "100%", height: "100%" }} ref={ node => this.videoNode = node } className="video-js"></video>
        </div>
      </div>
    )
  }
}