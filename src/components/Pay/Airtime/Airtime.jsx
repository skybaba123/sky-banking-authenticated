import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import classes from "./Airtime.module.scss";

const Airtime = () => {
  return (
    <div
      style={{ animation: "fadeIn", animationDuration: "1s" }}
      className={classes["airtime"]}
    >
      <div className={classes["title"]}>
        <h3>Buy Airtime</h3>
      </div>

      <div className={classes["amount-details"]}>
        <p className={classes["amount-tag"]}>Amount</p>
        <div className={classes["input-container"]}>
          <p>₦</p>
          <input placeholder="How much?" type="text" />
        </div>
        <p className={classes["balance-tag"]}>Account Balance: ₦00.0</p>
      </div>

      <div className={classes["send-details"]}>
        <p>Network</p>
        <div>
          <FontAwesomeIcon icon={faAngleDown} />
          <p>Choose a Network</p>
        </div>
      </div>

      <div className={classes["add-number"]}>
        <p>Add a Phone Number</p>
        <div className={classes["input-container"]}>
          <input placeholder="What Number" type="text" />
        </div>
      </div>

      <div className={classes["btn"]}>
        <button>Buy</button>
      </div>
    </div>
  );
};

export default Airtime;
