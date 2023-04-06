import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { cache } from "@emotion/css";
import { CacheProvider } from "@emotion/react";
import GlobalStyle from "src/styles/GlobalStyle";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<RecoilRoot>
			<CacheProvider value={cache}>
				<GlobalStyle />
				<Component {...pageProps} />
			</CacheProvider>
		</RecoilRoot>
	);
}
