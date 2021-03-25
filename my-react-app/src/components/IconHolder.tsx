import React, { FC } from "react";
import styled from "styled-components";

interface IIconInterface{
  source: string;
  alt: string;
}
const IconHolder: FC<IIconInterface> = props => {
  return(
    <>
      <img src={props.source} alt ={props.alt}/>
    </>
  );
};

export default IconHolder;
