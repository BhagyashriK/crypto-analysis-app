import React from "react";
import { Wrapper, LoadingIcon } from "./loader.style";

const Loader = props => {
  return (
    <Wrapper>
      <LoadingIcon />
      Loading...
    </Wrapper>
  );
};

export default Loader;
