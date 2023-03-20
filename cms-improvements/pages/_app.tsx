import type { AppProps } from "next/app";
import Routing from "../routers/routing";
import AuthProvider from "../src/context/AuthProvider";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <AuthProvider>
      <Routing Component={Component} pageProps={pageProps} router={router} />
    </AuthProvider>
  );
};

export default MyApp;