import React, { useContext, useState, useEffect } from "react";
import { PhotoHolder } from "./PhotoHolder";
import { valueContext } from "../Types_Interfaces/typesAndInterfaces";
import { Description } from "./Description";
import { Button } from "./Button";

export const CatContext = React.createContext<valueContext>({
  photo: "",
  description: "",
  id: ""
})

export const Main: React.FC = () => {

  const url = "https://api.thecatapi.com/v1/breeds"
  const apiKey = "live_5nFEruCJpzINLV4DDhLcVPUVv7yabFQHkk19m7c52LDLyehxkSiciwl2zAdKZRYQ"

  const [allBreed, setAllBreed] = useState([])
  const [breed, setBreed] = useState(0)

  const [catState, setCatState] = useState({
    photoURL: "",
    idBreed: "",
    description: "",
    error: false
  })

  const randomInteger: Function = () => {
    return Math.floor(Math.random() * 67)
  }


  useEffect( () => {
    const random = randomInteger()
    setBreed(random) 
    console.log(breed) 

    fetch( url )
      .then( response => response.json())
      .then( data => {
        setAllBreed(data)
        setCatState({
          ...catState,
          photoURL: data[breed].image.url,
          idBreed: data[breed].id,
          description: data[breed].description
        })
        console.log(allBreed)
        console.log(catState.photoURL)
      })
      .catch( error => setCatState({
        ...catState,
        error: !catState.error
      }) )
  }, []) 

  useEffect( () => {
    fetch( url )
      .then( response => response.json())
      .then( data => {
        setAllBreed(data)
        setCatState({
          ...catState,
          photoURL: data[breed].image.url,
          idBreed: data[breed].id,
          description: data[breed].description
        })
        console.log(allBreed)
        console.log(catState.photoURL)
      }) 
  }, [breed])

  function changeBread() {
    const newRandom = randomInteger()
    setBreed(newRandom)
  }

  function changePhotoInBread() {
    fetch( `https://api.thecatapi.com/v1/images/search?breed_ids=${catState.idBreed}` )
      .then( response => response.json() )
      .then( data => setCatState( {
        ...catState,
        photoURL:data[0].url
      }))
  }

  return (
    <CatContext.Provider value={{
      photo: catState.photoURL,
      description: catState.description,
      id: catState.idBreed
    }}>
      <div className="main">
        <div className="photoAndDiscription">
          <PhotoHolder />
          <Description />
        </div>
        <div className="buttons">
          <Button changeFunction={changePhotoInBread} text="CHANGE PHOTO"/>
          <Button changeFunction={changeBread} text="CHANGE BREED"/>
        </div>
      </div>
    </CatContext.Provider>
    
  )
}