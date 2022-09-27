import React, { useContext } from "react";
import { CatContext } from "./Main";

import { IValueContext } from "../Types_Interfaces/typesAndInterfaces";

export const PhotoHolder: React.FC = () => {
  
  const catState: IValueContext = useContext(CatContext)

  return (
    <div className="photoHolder">
      <img className="photo" src={catState.photo} />
    </div>
  )
}