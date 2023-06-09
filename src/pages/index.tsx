import Head from "next/head";
import { useRef } from "react";
import { css } from "@emotion/react";
import Button from "@components/atoms/button";
import FloatingButton from "@components/atoms/floatingButton";
import Input from "@components/atoms/input";

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      css={css`
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
      `}
    >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button
        variant="outlined"
        backgroundColor="#D4AA71"
        css={css`
          width: 295px;
        `}
      >
        button
      </Button>
      <FloatingButton
        css={css`
          position: absolute;
          bottom: 60px;
          right: 16px;
          z-index: 2;
        `}
      >
        button
      </FloatingButton>

      <Input
        type="password"
        placeholder="hi"
        ref={inputRef}
        id="input1"
        autoFocus
      />
      <Button
        onClick={() => {
          console.log(inputRef.current?.value);
        }}
      >
        Input click
      </Button>
    </div>
  );
}
