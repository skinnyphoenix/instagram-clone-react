import React from "react";
import "./ModalStories.css";
import "../../mock/mock";

const ModalStories = ({ isOpen, toggle, stories }) => {
  return (
    <div className={`${isOpen ? "open" : ""} modalWrapper`}>
      <h2>CIAO</h2>
      <div className="modalClosed" onClick={() => toggle()}>
        ❌
      </div>
    </div>
  );
};

export default ModalStories;
