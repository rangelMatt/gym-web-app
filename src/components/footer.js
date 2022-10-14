import React from "react";
import { FaMapMarkedAlt, FaInstagram, FaPhoneSquareAlt } from "react-icons/fa";


function Footer() {
  
  return (
  <footer rel="stylesheet" href="style.module.css">
      <div className="footer-container">
        <div className="row">
          <div className="col social-links">
            <a
              href="https://instagram.com/centralcoast_barbell?igshid=YmMyMTA2M2Y=">
              <FaInstagram
                size={50}
                color="white"
              />
            </a>
            <a
              href="https://www.google.com/maps/place/Central+Coast+Barbell/@35.1092097,-120.6184355,21z/data=!4m13!1m7!3m6!1s0x80ec5ead667d5a27:0xdfac6f9659f20cc5!2s1081+Highland+Way+a,+Grover+Beach,+CA+93433!3b1!8m2!3d35.1092097!4d-120.6182988!3m4!1s0x80ec594b9187f103:0x1790f1c03fca0846!8m2!3d35.1092097!4d-120.6182987">
              <FaMapMarkedAlt
                size={50}
                color="white"
              />
              </a>
              <a
              href="+18054891618">
              <FaPhoneSquareAlt
                size={50}
                color="white"
              />
              </a>
          </div>
          <div className="col social-links">
            
            
          </div>
          <div className="col">
            <div
              onClick={() =>
                this.props.applyPickedLanguage(
                  window.$primaryLanguage,

                )
              }
              style={{ display: "inline" }}
            >
              <span
                className="iconify language-icon mr-5"
                data-icon=""
                data-inline="false"
                id={window.$primaryLanguageIconId}
              ></span>
            </div>
            <div
              onClick={() =>
                this.props.applyPickedLanguage(
                  window.$primaryLanguageIconId
                )
              }
              style={{ display: "inline" }}
            >
            </div>
          </div>
          <div className="col">
            <div className="copyright py-4 text-center">
              <div className="container">
                <small>
                  {/* Copyright &copy;{"Matt Rangel"} */}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;