import React from "react";

import "video-react/dist/video-react.css";

// memo: https://github.com/zeit/next.js/issues/7515
// eslint-disable-next-line react/prop-types
const CustomApp = ({ Component, pageProps }) => {
  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        href="http://yui.yahooapis.com/3.18.1/build/cssreset/cssreset-min.css"
      />
      <Component {...pageProps} />
    </>
  );
};

export default CustomApp;
