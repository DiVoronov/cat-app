import React, { useContext } from "react";
import { CatContext } from "./Main";

import { valueContext } from "../Types_Interfaces/typesAndInterfaces";

export const PhotoHolder: React.FC = () => {
  
  const catState: valueContext = useContext(CatContext)

  return (
    <div className="photoHolder">
      {
        catState.id && (
          <img className="photo" src={catState.photo} />
        )
      }
    </div>
    
  )
}