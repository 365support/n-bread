import { css } from "@emotion/react";
import React from "react";

const Hello = ({ name, big }: any) => {
  if (big) {
    return <h1>Hello, {name}</h1>;
  }
  return (
    <p
      css={css`
        color: red;
        font-size: 100px;
      `}
    >
      Hello
    </p>
  );
};

export default Hello;
