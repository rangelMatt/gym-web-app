import React, { useCallback } from "react";
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import { HiOutlineSpeakerphone, HiOutlineKey } from "react-icons/hi";
// import { BiRightArrowAlt } from "react-icons/bi";
// import styles from "./Button.module.css";
import SignUp from "./SignUp"
import styles from "./signup.module.css";
// import './App.css';
// import Grid from './eqpmnt-modal'

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";
import delt from "../images/standing-delt-raise.jpg"
import levChest from "../images/leverage-chest-press.jpg"
import advChest from "../images/advanced-chest.jpg"
import superPullover from "../images/super-pullover.jpg"
import tricepDip from "../images/seated-tricep-dip.jpg"
import hackSquat from "../images/hack-squat.jpg"
import donkeyCalfraise from "../images/donkey-calfraise.jpg"
import hsLegCurl from "../images/hs-seated-leg-curl.jpg"
import DayPass from "./DayPass";

import  EquipmentModal  from "./eqpmnt-modal"

// import '@react-ui-org/react-ui/src/lib/theme.scss';
// import '@react-ui-org/react-ui/src/lib/foundation.scss';
// import {
//   Modal,
//   ModalHeader,
//   ModalBody,
//   ModalCloseButton,
//   ModalContent,
//   ModalFooter,
//   ModalTitle,
//   Toolbar,
//   ToolbarItem,
//   Button,
// } from '@react-ui-org/react-ui';


const Equipment = () => {

  const shoot = useCallback((message) => {
    alert(message);
  }, []);

  const EquipmentModal = <EquipmentModal/>
  // const pass = useCallback((message) => {
  //   alert(message);
  // }, []);

  // const [modalOpen, setModalOpen] = React.useState(false)
  // const [variant, setVariant] = React.useState(null)
  // const modalPrimaryButtonRef = React.useRef()
  // const modalCloseButtonRef = React.useRef()

  // const [showModal, setShowModal] = useState(false);

  // const openModal = () => {
  //   setShowModal(true);
  // };
  return (

    <div className="Office-Info">
      <div className={styles.container}>
        <div className={styles.section}>
          <SignUp
            icon={<HiOutlineSpeakerphone />}
            title="Sign Up Here"
            onClick={() => shoot('Know how to Swole')}
          />
          <DayPass
            icon={<HiOutlineKey />}
            title="Day Pass"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://form.jotform.com/ccbarbell1081/waiver";
            }}
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

        <dt><u>Upper Body</u></dt>
        <div>
          <Container fluid="sm">
            <Row>
              <Col
                sm={6}
                flex="true"
                
              ><a href={EquipmentModal}>- Icarian Standing Deltoid Raise
                </a></Col>
              {/* <div className="App">
                <h1>Popup Modal</h1>
                <button onClick={openModal}>Open Modal</button>
                {showModal ? <EquipmentModal setShowModal={setShowModal} /> : null}
              </div> */}


            </Row>
            <Row>
              <Col sm={3}
              >
                <Image
                  fluid
                  thumbnail
                  src={delt}
                  alt="Icarian Standing Delt Raise"
                // bsPrefix="equip"
                ></Image></Col>
              <Col>
                <p>
                  We have been very excited to get this Rare piece in our Gym. Very hard to find, Icarian machine. We’ve been trying to find one for almost a year, being told it’s impossible, but we got one to fit in our Gym! Overall smooth Machine.
                  <br />
                  Definitely feels a better connection with the lateral(middle) part of the Shoulder in comparison to using Dumbbells as a variation.
                  <br />
                  Definitely feel a good connection with it in the Side Delts. <a href="https://www.instagram.com/tv/Cfg96PClFgC/?igshid=YmMyMTA2M2Y="
                    alt="insta video">Check it out!</a>

                </p>
              </Col>

            </Row>

            <Row>
              <Col
                sm={6}
                flex="true"
              >- FLEX Fitness LEVERAGE Chest Press</Col>
            </Row>
            <Row>
              <Col sm={3}
              >
                <Image
                  fluid
                  thumbnail
                  src={levChest}
                  alt="FLEX Fitness LEVERAGE Chest Press"
                // bsPrefix="equip"
                ></Image></Col>
              <Col>
                <p>
                  Rare & Highly Sought after, FLEX Leverage Chest Press. Part of the Rare Oldschool Flex Leverage line, that sponsored much of the top Olympia pros back in the day.
                  <br />
                  The design of these machines compared to typical plate loaded machines, is that Flex Leverage machines have constant, even tension all throughout the movement.
                  <br />
                  Typical Plate Loaded Machines, as the weight physically gets closer to the joint of the movement, the strength curve lessens, so at some point of the movement the weight load lessens. That’s not the case with the design of these Oldschool Flex Leverage pieces.
                  <br />
                  The converging at the top of the movement, feels a great squeeze on the chest as it tracks inward. Feedback on this machine has been one of the best in our Facility. Great Chest connection and Pump, feels great overall.
                  <a href="https://www.instagram.com/tv/Cey5s16pUnh/?igshid=YmMyMTA2M2Y="
                    alt="insta video">Check it out!</a>

                </p>
              </Col>

            </Row>

            <Row>
              <Col
                sm={6}
                flex="true"
              >- CYBEX Advanced Chest</Col>
            </Row>
            <Row>
              <Col sm={3}
              >
                <Image
                  fluid
                  thumbnail
                  src={advChest}
                  alt="CYBEX Advanced Chest"
                // bsPrefix="equip"
                ></Image></Col>
              <Col>
                <p>
                  Got ourselves another Rare Machine, Cybex Advanced Chest.
                  <br />
                  This machine is like a combination of a Chest Fly and Press. The machine is free moving, compared to a fixed range of motion on most machines.
                  <br />
                  The stretch and squeeze at the top is great and especially for doing slow and controlled movements. This machine is definitely harder to load with weight, and works better doing a Moderate weight for Best Mind-Muscle Connection.
                  <br />
                  Very glad to have finally found this piece Flex Wheeler and Chris Cormier would use in their Olympia prep during the 90s.
                  <a href="https://www.instagram.com/p/CWMEmsdvpyb/?igshid=YmMyMTA2M2Y="
                    alt="insta video">Check it out!</a>

                </p>
              </Col>

            </Row>

            <Row>
              <Col
                sm={6}
                flex="true"
              >- Nautilus First-Generation Super Pullover</Col>
            </Row>
            <Row>
              <Col sm={3}
              >
                <Image
                  fluid
                  thumbnail
                  src={superPullover}
                  alt="Nautilus First-Generation Super Pullover"
                // bsPrefix="equip"
                ></Image></Col>
              <Col>
                <p>
                  Hard to find, and a very Underrated Machine/Exercise for Lat Development, you typically do not find in most Gyms. Even if you can find a Pullover Machine, none compare to the original Nautilus Pullover. There’s a couple newer Nautilus Nitro versions and Hammer Strength ones we have tried, but the spacing between the handle and elbow pads have always been awkward, the spacing on this one feels great.
                  <br />
                  When I personally began to incorporate our Pullover Machine on my last Back Training session, it definitely made me sore. It definitely is an underrated back exercise.
                  <br />
                  The whole purpose of this machine compared to Dumbbell Pullovers, or Cable Pullovers(one of my favorite back exercises), Is the Range of Motion you get and really gives you a good stretch and squeeze of your Lats, that you can’t really achieve without the machine version.
                  <b />
                  The machine version completely eliminates the involvement of the biceps, so it completely isolates your back, compared to doing rows or Pulldown movements.
                  <br />
                  Definitely using an underhand grip works best. Using the belt, which I overlooked at first, definitely makes a difference in the feel as you go heavier. Invisible Lat Syndrome is real after hitting this Machine.
                  <a href="https://www.instagram.com/tv/CVj451FlCyG/?igshid=YmMyMTA2M2Y="
                    alt="insta video">Check it out!</a>

                </p>
              </Col>

            </Row>

            <Row>
              <Col
                sm={6}
                flex="true"
              >- FLEX Fitness Seated Tricep Dip</Col>
            </Row>
            <Row>
              <Col sm={3}
              >
                <Image
                  fluid
                  thumbnail
                  src={tricepDip}
                  alt="FLEX Fitness Seated Tricep Dip"
                // bsPrefix="equip"
                ></Image></Col>
              <Col>
                <p>
                  Part of the Oldschool Flex Fitness  line, that sponsored much of the top Olympia pros back in the day.
                  < br />
                  Great Accessory/Isolation Exercise for Triceps Development/Strength. Capable of widening the grip to lean the focus more on the Lower Chest.

                </p>
              </Col>

            </Row>
          </Container>
          <hr className="line"></hr>
          <dt><u>Lower Body</u></dt>
          <div>
            <Container fluid="sm">
              <Row>
                <Col
                  sm={3}
                  flex="true"
                >- Icarian Hack Squat (35° angle)</Col>
              </Row>
              <Row>
                <Col sm={3}
                >
                  <Image
                    fluid
                    thumbnail
                    src={hackSquat}
                    alt="Icarian Hack Squat (35° angle)"
                  // bsPrefix="equip"
                  ></Image></Col>
                <Col>
                  <p>
                    One of the Best Feeling oldschool Hack Squats out there, to grow some Mighty Tree Trunk Legs.
                    <br />
                    The Angle on this Particular Hack Squat is at a lower tilt in comparison to most Hack Squat machines, which are at a 45° angle. Meaning, this has less pressure on the knees in comparison. The platform size is great to change up Footstance Variation to switch up focus on varying parts of the Legs.
                    <br />
                    The handles at the bottom to unrack the weight, make it great to hold onto. While performing the exercise, it allows you to use less of your back while driving up, and maintain the Weight Load on the legs, instead of driving more with your back.
                    <br />
                    The design of this machine also works great for using our Bands to perform Reverse Band Hack Squats.


                  </p>
                </Col>

              </Row>

              <Row>
                <Col
                  sm={4}
                  flex="true"
                >- Icarian Donkey Calf Raise</Col>
              </Row>
              <Row>
                <Col sm={3}
                >
                  <Image
                    fluid
                    thumbnail
                    src={donkeyCalfraise}
                    alt="Icarian Donkey Calf Raise"
                  // bsPrefix="equip"
                  ></Image></Col>
                <Col>
                  <p>
                    An Awesome oldschool Calf Machine not commonly seen in most Gyms. Personally one of my Favorite Calf Machines in our arsenal, the stretch on this machine feels great! This Machine is fairly easy to Load up with weight, as we have our Gym Pin to load up weight with 45s, past Maxing out the 400lb Stack.
                    <a href="https://www.instagram.com/tv/CeYz7mOl3hN/?igshid=YmMyMTA2M2Y="
                      alt="insta video">Check it out!</a>

                  </p>
                </Col>

              </Row>

              <Row>
                <Col
                  sm={5}
                  flex="true"
                >- Hammer Strength Seated Leg Curl (Plate Loaded)</Col>
              </Row>
              <Row>
                <Col sm={3}
                >
                  <Image
                    fluid
                    thumbnail
                    src={hsLegCurl}
                    alt="Hammer Strength Seated Leg Curl (Plate Loaded)"
                  // bsPrefix="equip"
                  ></Image></Col>
                <Col>
                  <p>
                    Plate Loaded Version of the Seated Hamstring Curl Machine. This machine is great for Priming up the Hamstrings for your Leg Training Session and also as a Finisher.
                    The plate loaded version definitely has a great squeeze as there is less friction than the Selectorized (weight stack) Version. The handle on this machine is great for doing forced reps to really burn out the Hamstrings and assist with reps.

                    <a href="https://www.instagram.com/p/CQJvnfCHbkm/?igshid=YmMyMTA2M2Y= "
                      alt="insta video">Check it out!</a>

                  </p>
                </Col>

              </Row>


            </Container>
          </div>
        </div>






      </div>
      <hr className="line"></hr>

    </div>
  );
}
export default Equipment;