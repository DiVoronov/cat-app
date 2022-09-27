import React, { useContext } from "react";
import { CatContext } from "./Main";

import { IValueContext } from "../Types_Interfaces/typesAndInterfaces";

export const Description: React.FC = () => {

  const catState: IValueContext = useContext(CatContext)

  return (
    <div className="discription">
      <h2> {catState.breed} </h2>
      <hr/>
      <p> {catState.description} </p>
    </div>
  )
}