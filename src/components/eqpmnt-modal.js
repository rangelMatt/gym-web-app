// import React, { useRef } from "react";
// import ReactDom from "react-dom";
// export const Modal = ({ setShowModal }) => {
//   // close the modal when clicking outside the modal.
//   const modalRef = useRef();
//   const closeModal = (e) => {
//     if (e.target === modalRef.current) {
//       setShowModal(false);
//     }
//   };
//   //render the modal JSX in the portal div.
//   return ReactDom.createPortal(
//     <div className="container" ref={modalRef} onClick={closeModal}>
//       <div className="modal">
//         <h2>This is a Modal</h2>
//         <button onClick={() => setShowModal(false)}>X</button>
//       </div>
//     </div>,
//     document.getElementById("portal")
//   );
// };
import React, { useState } from "react";
import "./signup.module.css";
import "./modal.module.css";

import Modal from "react-modal";

Modal.setAppElement("#root");

export default function EquipmentModal() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="office-content">
      <button onClick={toggleModal}>Open modal</button>

      <Modal
          style={{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.75)'
            },
            content: {
              position: 'absolute',
              top: '40px',
              left: '40px',
              right: '40px',
              bottom: '40px',
              border: '1px solid #ccc',
              background: 'grey',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '4px',
              outline: 'none',
              padding: '20px'
            }
          }}
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
      >
        <div>My modal dialog.</div>
        <button onClick={toggleModal}>Close modal</button>
      </Modal>
    </div>
  );
}
