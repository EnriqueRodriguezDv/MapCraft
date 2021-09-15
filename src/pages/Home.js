import React, {useEffect, useRef} from "react";

import Input from "../components/Input";
import Map from "../components/Map";
import Icon from "../components/Icon";

import { DivHome, DivInput } from "./styles";

const Home = () => {
  const text = useRef(null)
  const coord = useRef(null)
  const description = useRef(null)

  const handleClick = (textVar, coordVar, descriptionVar) => {
    text.current.innerText = `${textVar}`
    coord.current.innerText = `${coordVar}`
    description.current.innerText = `${descriptionVar}`
  }

  return (
    <DivHome>
      <h1>MapCraft</h1>
      <p ref={text} ></p>
      <p ref={coord} ></p>
      <p ref={description} ></p>
      {/* <DivInput>
        <Input coordinate="x" />
        <Input coordinate="y" />
      </DivInput> */}
      <Map>
        <Icon className="casa" title="Ciudad Principal" onClick={() => handleClick("Ciudad Principal", "x: 400 y: -400", "")} />
        <Icon className="setas" title="Peninsula Setas" onClick={() => handleClick("Peninsula setas", "", "")} />
        <Icon className="pueblo_paleta" title="Pueblo Paleta" onClick={() => handleClick("Pueblo Paleta", "", "Granjero")} />
        <Icon className="pueblo_vacio" title="Pueblo Vacio" onClick={() => handleClick("Pueblo Vacio", "", "")} />
        <Icon className="pueblo_bob" title="Pueblo Bob Marley " onClick={() => handleClick("Pueblo Bob Marley", "", "Cartografo, Herrero herramientas")} />
      </Map>
    </DivHome>
  );
};

export default Home;
