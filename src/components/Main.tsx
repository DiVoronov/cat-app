import React, { useState, useEffect } from "react";
import { PhotoHolder } from "./PhotoHolder";
import { IValueContext } from "../Types_Interfaces/typesAndInterfaces";
import { Description } from "./Description";
import { Button } from "./Button";
import { Title } from "./Title";
import { Loader } from "./Loader";

export const CatContext = React.createContext<IValueContext>({
  photo: "",
  description: "",
  id: "",
  appear: false,
  breed: ""
})

export const Main: React.FC = () => {

  const url = "https://api.thecatapi.com/v1/breeds"

  const [allBreed, setAllBreed] = useState([])
  const [breed, setBreed] = useState(0)
  const [appear, setAppear] = useState(true)

  const [catState, setCatState] = useState({
    photoURL: "",
    idBreed: "",
    description: "",
    error: false,
    name: ""
  })

  const randomInteger: Function = () => {
    return Math.floor(Math.random() * 67)
  }

  useEffect( () => {
    const random = randomInteger()
    setBreed(random) 

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
          description: data[breed].description,
          name: data[breed].name
        })
      }) 
  }, [breed])

  function changeBread() {
    const newRandom = randomInteger()
    setBreed(newRandom)
  }

  function changePhotoInBread() {
    setAppear(false)
    fetch( `https://api.thecatapi.com/v1/images/search?breed_ids=${catState.idBreed}` )
      .then( response => response.json() )
      .then( data => {
        setCatState( {
        ...catState,
        photoURL:data[0].url
        })
        return data
      })
      .then(data => {
        catState.photoURL 
          ? setAppear(true) 
          : setAppear(false)
        return data
      })
    
  }

  return (
    <CatContext.Provider value={{
      photo: catState.photoURL,
      description: catState.description,
      id: catState.idBreed,
      appear: appear,
      breed: catState.name
    }}>
      <div className="main">
        <Title />
        { appear 
          ? (<div className="photoAndDiscription">
              <PhotoHolder />
              <Description />
            </div>)
          : (<div className="photoAndDiscription">
              <Loader/>
            </div>)
        }
        <div className="buttons">
          <Button changeFunction={changePhotoInBread} text="CHANGE PHOTO"/>
          <Button changeFunction={changeBread} text="CHANGE BREED"/>
        </div>
      </div>
    </CatContext.Provider>
  )
}