import classes from "./Popup.module.scss";

import React from "react";
import { useContext } from "react";
import { LoginContext } from "../../store/LoginContext";
import Button from "../Button/Button";

const Popup = ({ children }) => {
  const closeModal = useContext(LoginContext);
  return (
    <React.Fragment>
      <div
        onClick={closeModal.closeModal}
        style={{
          animation: "fadeIn",
          animationDuration: ".5s",
        }}
        className={classes["overlay"]}
      ></div>
      <div
        style={{
          animation: "zoomIn",
          animationDuration: ".5s",
          backgroundColor: closeModal.darkMode ? "#121212" : "",
          color: closeModal.darkMode ? "white" : "",
        }}
        className={classes["popup"]}
      >
        {children}
        <Button onClick={closeModal.closeModal} text="Close" />
      </div>
    </React.Fragment>
  );
};

export default Popup;
