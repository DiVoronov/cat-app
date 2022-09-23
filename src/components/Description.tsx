import React, { useContext } from "react";
import { CatContext } from "./Main";

import { valueContext } from "../Types_Interfaces/typesAndInterfaces";

export const Description: React.FC = () => {

  const catState: valueContext = useContext(CatContext)

  return (
    <div className="discription">
      <p> {catState.description} </p>
    </div>
  )
}