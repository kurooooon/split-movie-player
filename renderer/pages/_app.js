import React from "react";
import Head from "next/head";

// memo: https://github.com/zeit/next.js/issues/7515
// eslint-disable-next-line react/prop-types
const CustomApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="http://yui.yahooapis.com/3.18.1/build/cssreset/cssreset-min.css"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default CustomApp;
