import React, { useCallback } from "react";
import Iframe from 'react-iframe';

import { HiOutlineSpeakerphone } from "react-icons/hi";
import SignUp from "./SignUp"
import styles from "./signup.module.css";


function OfficeInfo() {

  const shoot = useCallback((message) => {
    alert(message);
  }, []);

    return (
      <div className="Office-Info">
        <h1>Office Hours & Day Passes</h1>
        <hr className="line"></hr>
        <div className="office-content">
          <h4><u>Day Passes:</u> $$$</h4>
          <h4><u>Monday - Friday:</u> 4:30pm - 7:00pm</h4>
          <h4><u>Saturday & Sunday:</u> By Appointment Only</h4>
          <div className={styles.container}>
        <div className={styles.section}>
          <SignUp
          icon={<HiOutlineSpeakerphone/>}
          title="Sign Up Here"
          onClick={() => shoot('Know how to Swole')}
          />
        </div>
      </div>
        </div>
        <div id="iframe-container">
          <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d203.9937453638252!2d-120.61843549265973!3d35.109209700000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ec594b9187f103%3A0x1790f1c03fca0846!2sCentral%20Coast%20Barbell!5e0!3m2!1sen!2sus!4v1665769057226!5m2!1sen!2sus" width="90%" height="315" style={{ border: "0;" }} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
        </div>
        <hr className="line"></hr>
        <h1>Contact Us</h1>
        <hr className="line"></hr>
        <div className="office-content">
          <h4><u>Phone:</u> <a href="tel:+1-805-627-2329">805-627-2329</a></h4>
          <h4><u>Address:</u> <a
            href="https://www.google.com/maps/place/Central+Coast+Barbell/@35.1092097,-120.6184355,21z/data=!4m13!1m7!3m6!1s0x80ec5ead667d5a27:0xdfac6f9659f20cc5!2s1081+Highland+Way+a,+Grover+Beach,+CA+93433!3b1!8m2!3d35.1092097!4d-120.6182988!3m4!1s0x80ec594b9187f103:0x1790f1c03fca0846!8m2!3d35.1092097!4d-120.6182987"
            target="_blank"
            rel="noopener noreferrer"
          >1081 Highland Way, Unit A, Grover Beach, CA 93433
          </a></h4>
          <h4><u>Saturday & Sunday:</u> By Appointment Only</h4>
        </div>
      </div>
    );
  }
export default OfficeInfo;