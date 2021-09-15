import React from "react";
import { HiSearchCircle, AiFillHome, RiHomeHeartFill } from "./styles";

const Icon = ({ title, onClick, className, typeIcon }) => {
  return (
    <>
      {typeIcon === "village" && <AiFillHome className={className} cursor="pointer" title={title} onClick={onClick} color="#F0F0F0" size={28}/> }
      {typeIcon === "point" && <HiSearchCircle className={className} cursor="pointer" title={title} onClick={onClick} color="#F0F0F0" size={28}/>} 
      {typeIcon === "home" && <RiHomeHeartFill className={className} cursor="pointer" title={title} onClick={onClick} color="#F0F0F0" size={28}/> }
    </>
  );
};

export default Icon;
