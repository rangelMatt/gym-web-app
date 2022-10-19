import React, { useCallback } from "react";
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import { HiOutlineSpeakerphone } from "react-icons/hi";
// import { BiRightArrowAlt } from "react-icons/bi";
// import styles from "./Button.module.css";
import Button from "./Button"
import styles from "./signup.module.css";


const Equipment = () => {

  const shoot = useCallback((message) => {
    alert(message);
  }, []);



  return (

    <div className="Office-Info">
      <div className={styles.container}>
        <div className={styles.section}>
          <Button
          icon={<HiOutlineSpeakerphone/>}
          title="Sign Up Here"
          onClick={() => shoot('Know how to Swole')}
          />
        </div>
      </div>
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