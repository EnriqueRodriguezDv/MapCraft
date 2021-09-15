import React from "react";

import {useInputValue} from "../../hooks/useInputValue"
import { Div } from "./styles";

const Input = ({ coordinate }) => {
  const coord = useInputValue("")

  return (
    <Div>
      <p>{coordinate}</p>
      <input {...coord} />
    </Div>
  );
};

export default Input;
