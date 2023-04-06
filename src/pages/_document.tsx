import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import * as React from "react";
import Script from "next/script";
import { renderStatic } from "@utils/renderer";

export default class AppDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const page = await ctx.renderPage();
		const { css, ids } = await renderStatic(page.html);
		const initialProps = await Document.getInitialProps(ctx);
		return {
			...initialProps,
			styles: (
				<React.Fragment>
					{initialProps.styles}
					<style data-emotion={`css ${ids.join(" ")}`} dangerouslySetInnerHTML={{ __html: css }} />
				</React.Fragment>
			),
		};
	}

	render() {
		return (
			<Html>
				<Head />
				<body>
					<Main />
					<NextScript />
					<Script
						src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_API_KEY}&libraries=services,clusterer&autoload=false`}
						strategy="beforeInteractive"
					/>
				</body>
			</Html>
		);
	}
}
