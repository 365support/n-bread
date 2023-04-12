import React from "react";

const Hello = ({ name, big }: any) => {
  if (big) {
    return <h1>Hello, {name}</h1>;
  }
  return <p>Hello</p>;
};

export default Hello;
