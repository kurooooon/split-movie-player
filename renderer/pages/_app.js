import React from "react";

import "video.js/dist/video-js.css";

// memo: https://github.com/zeit/next.js/issues/7515
// eslint-disable-next-line react/prop-types
const CustomApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default CustomApp;
