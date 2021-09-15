import React from "react";
import { HiSearchCircle } from "./styles";

const Icon = ({ title, onClick, className }) => {
  return (
    <>
      <HiSearchCircle className={className} cursor="pointer" title={title} onClick={onClick} color="white" size={28} />
    </>
  );
};

export default Icon;
