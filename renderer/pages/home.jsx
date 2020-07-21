import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Player from '../components/Player';

const Home = () => {
  const videoJsOptions = {
    width: 400,
    height: 200,
    autoplay: true,
    controls: true,
    sources: [{
      src: '/movies/sample.mp4',
      type: 'video/mp4'
    }]
  }

  return (
    <div>
      <Player
        options={videoJsOptions}
      />
    </div>
  );
};

export default Home;
