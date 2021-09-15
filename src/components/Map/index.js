import React from "react";

import { Figure, Img } from "./styles"

import mapImg from "../../public/map.png"

const Map = ({children}) => {
  return (
    
      <Figure >
        <Img src={mapImg}/>
        {children}
      </Figure>
    
  );
};

export default Map;
