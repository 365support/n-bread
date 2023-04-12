import type { AppProps } from "next/app";
import { cache } from "@emotion/css";
import { CacheProvider } from "@emotion/react";
import GlobalStyle from "src/styles/GlobalStyle";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={cache}>
      <GlobalStyle />
      <Component {...pageProps} />
    </CacheProvider>
  );
}
