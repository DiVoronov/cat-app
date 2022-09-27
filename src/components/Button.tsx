import React from "react";
import { IPropsType } from "../Types_Interfaces/typesAndInterfaces"

export const Button: React.FC<IPropsType> = ( { changeFunction, text } ) => {

  return (
      <button className="button" onClick={ () => changeFunction()}> 
        {text} 
      </button>
  )
}