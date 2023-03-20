import type { AppProps } from "next/app";
import { useMemo } from "react";
import { Layout } from "../src/components/Layout";
import ProtectedRoute from "./protectedRoute";
import { AuthRoutes } from "./routes";

const routing = ({ Component, pageProps, router }: AppProps) => {
  const isAuthRequired = AuthRoutes.includes(router.pathname);

  const CurrentPage = useMemo(() => {
    return () => <Component {...pageProps} />;
  }, [Component, pageProps]);

  if (isAuthRequired) {
    return (
      <ProtectedRoute>
        <Layout Component={CurrentPage}></Layout>
      </ProtectedRoute>
    );
  } else {
    return <Component {...pageProps} />;
  }
};

export default routing;
