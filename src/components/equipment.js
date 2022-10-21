import React, { useCallback } from "react";
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import { HiOutlineSpeakerphone } from "react-icons/hi";
// import { BiRightArrowAlt } from "react-icons/bi";
// import styles from "./Button.module.css";
import SignUp from "./SignUp"
import styles from "./signup.module.css";


const Equipment = () => {

  const shoot = useCallback((message) => {
    alert(message);
  }, []);



  return (

    <div className="Office-Info">
      <div className={styles.container}>
        <div className={styles.section}>
          <SignUp
            icon={<HiOutlineSpeakerphone />}
            title="Sign Up Here"
            onClick={() => shoot('Know how to Swole')}
          />
        </div>
      </div>
      <hr className="line"></hr>
      <h1>CCB Culture</h1>
      <div className="ccb-culture">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus elit tincidunt, tempor ipsum nec, scelerisque risus. Cras quis massa venenatis, condimentum orci quis, luctus arcu. Nunc rhoncus felis nunc, quis interdum purus consequat at. Sed vestibulum porttitor erat. Fusce nisi urna, sodales a dui eu, consectetur aliquet tellus. Donec ut neque neque. Aenean ac convallis neque.</p>
        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In neque nisi, varius et metus et, elementum congue nulla. Nam vitae lorem molestie, ullamcorper mauris vel, bibendum odio. Suspendisse vitae sem quam. Vestibulum nunc ex, faucibus vehicula erat nec, lobortis semper lorem. Phasellus sollicitudin arcu orci, et euismod justo congue nec. Etiam maximus neque et turpis convallis, vel convallis est suscipit.</p>
        <p>
          Maecenas ut molestie neque. Quisque tempor fermentum ante, ut viverra lorem ultricies in. Suspendisse felis ligula, condimentum eget bibendum convallis, ullamcorper nec quam. Pellentesque dapibus eros at sem volutpat, a ultricies justo facilisis. Aliquam pharetra scelerisque nisl eu porta. Etiam imperdiet pharetra tellus a porttitor. Suspendisse ac neque ex.
        </p>
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