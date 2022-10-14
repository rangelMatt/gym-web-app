import React from "react";
import GorillaRack from "../images/gorillarack.png";


function Header() {
  return (

    <div className="Header">
      <header className="App-header">
        <hr className="line"></hr>
        <h1 className="main-header">Central Coast Barbell</h1>
        <div>
          <h5 className="sub-header">Oldschool BodyBuilding & Powerlifting training facility</h5>
        </div>
      </header>
      <hr className="line"></hr>
      <div>
        <img
          className="gorilla-rack"
          src={GorillaRack}
          alt="gorilla-rack"
        ></img>
      </div>
      <hr className="line"></hr>
    </div>
  );
}
export default Header;