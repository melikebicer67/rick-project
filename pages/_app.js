import "../public/css/styles.css";
import "@mantine/core/styles.css";

import Home from "../components/layout";
import { useEffect, useState } from "react";
import { MantineProvider } from "@mantine/core";
// const myFont = localFont({
//   src: "../public/fonts/HelveticaNowDisplay-Regular.woff2",
// });

const MyApp = ({ Component, pageProps }) => {
  const [state, setState] = useState({
    open: false,
    time: 0,
    connection: true,
  });

  useEffect(() => {
    return () => {
      console.log("unmounted appjs");
    };
  }, []);

  return (
    <MantineProvider>
      <Home />
      <Component {...pageProps} />
    </MantineProvider>
  );
};

export default MyApp;
