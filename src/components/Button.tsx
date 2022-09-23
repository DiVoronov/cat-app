import React from "react";
import { propsType } from "../Types_Interfaces/typesAndInterfaces"

export const Button: React.FC<propsType> = ( { changeFunction, text } ) => {

  return (
      <button className="btn" onClick={ () => changeFunction()}> 
        {text} 
      </button>
  )
}