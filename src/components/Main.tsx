import React from "react";

export const Main: React.FC = () => {

  return (
    <div className="main">
      <div className="photoAndDiscription">
        <div className="photoHolder">PHOTO </div>
        <div className="discription">DISCRIPTION</div>
      </div>
      <div className="buttons">
        <div className="buttonsBread">CHANGE BREAD</div>
        <div className="buttonChangePhoto">CHANGE PHOTO</div>
      </div>
    </div>
  )
}