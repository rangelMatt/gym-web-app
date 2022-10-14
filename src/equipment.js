import React from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Equipment() {

  const shoot = () => {
    alert("Get Swole!");
  }

  return (

    <div className="Office-Info">
      <Button onClick={shoot}>Click for a Day Pass!</Button>
      <hr className="line"></hr>
      <h1>Central Coast Barbell Equipment</h1>
      <hr className="line"></hr>
      <div className="office-content">
        <dl>
          <dt><u>Bodybuilding Equipment</u></dt>
          <dd>- Hack Squat</dd>
          <dd>- Hack Squat</dd>
          <dd>- Hack Squat</dd>
          <dt><u>Powerlifting Equipment</u></dt>
          <ul>- Bench</ul>
          <ul>- Bench</ul>
          <ul>- Bench</ul>
          <dt><u>Strongman Equipment</u></dt>
          <li>Fill In</li>
          <li>Fill In</li>
          <li>Fill In</li>

        </dl>
        <div>
          <ul><u>Strongman Equipment</u></ul>
          <li>Fill In</li>
          <li>Fill In</li>
          <li>Fill In</li>
        </div>



      </div>
      <hr className="line"></hr>
      
    </div>
  );
}
export default Equipment;