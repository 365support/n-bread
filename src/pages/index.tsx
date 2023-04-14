import Head from "next/head";
import Hello from "@domains/Hello.tsx";
import Button from "@components/atoms/button";
import { css } from "@emotion/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hello />
      <Button
        variant="outlined"
        backgroundColor="#D4AA71"
        css={css`
          width: 295px;
        `}
      >
        button
      </Button>
    </>
  );
}
