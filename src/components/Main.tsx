import React, { useContext, useState, useEffect } from "react";

const CatContext = React.createContext({})

export const Main: React.FC = () => {

  const url = "https://api.thecatapi.com/v1/breeds"
  const apiKey = "live_5nFEruCJpzINLV4DDhLcVPUVv7yabFQHkk19m7c52LDLyehxkSiciwl2zAdKZRYQ"

  const [allBreed, setAllBreed] = useState([])
  const [breed, setBreed] = useState(0)

  const [catState, setCatState] = useState({
    photoURL: "",
    idBreed: "",
    description: ""
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

  useEffect( () => {
    console.log(breed)
    setCatState({
      ...catState,

    })
  }, [allBreed])

  /*
   * useEffect( () => {
   * 
   *   fetch( url )
   *     .then( response => response.json())
   *     .then( data => {
   *       setCatState({
   *         ...catState, 
   *         allBreed: data,
   *       })
   *       
   *       return data
   *     })
   *     .then( result => {
   *       console.log(catState)
   *       setCatState({
   *         ...catState,
   *         photoURL: result[random].image.url,
   *         description: result[random].description,
   *         idBreed: result[random].id
   *       })
   *       console.log(catState)
   *       return result
   *     }) 
   *     
   *     .then( result => console.log(result))
   * 
   * 
   * }, []) 
   * 
   * useEffect( () => {
   *   // console.log(catState.idBreed)
   *   console.log("after fetch: " + JSON.stringify(catState))
   *   fetch( `https://api.thecatapi.com/v1/images/search?breed_ids=${catState.idBreed}` )
   *   .then(response => response.json())
   *   .then(result => console.log(result))
   * }, [catState.allBreed])
  */

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
      // photo: catState.photoURL,
      // description: catState.description,
      // allBreed: catState.allBreed,
      // allPhotoOfBreed: catState.allPhotoOfBreed
    }}>
      <div className="main">
        <div className="photoAndDiscription">
          <div className="photoHolder">
            
            {/* {catState && (<img className="photo" src={catState.photoURL} />)} */}
            {
              catState.idBreed
                ? (<img className="photo" src={catState.photoURL} />)
                : catState && (<img className="photo" src={catState.photoURL} />)
              
            }

          </div>
          <div className="discription">
            <p> {catState.description} </p>
          </div>
        </div>
        <div className="buttons">
          <div className="buttonsBread">
          <button className="btn" onClick={changeBread}>CHANGE BREAD</button>
          </div>
          <div className="buttonChangePhoto">
            <button className="btn" onClick={changePhotoInBread}>CHANGE PHOTO</button> 
          </div>
        </div>
      </div>
    </CatContext.Provider>
    
  )
}