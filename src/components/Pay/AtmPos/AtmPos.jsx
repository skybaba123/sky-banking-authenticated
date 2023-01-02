import {
  faAngleRight,
  faMoneyBillTransfer,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import classes from "./AtmPos.module.scss";

const AtmPos = () => {
  return (
    <div
      style={{ animation: "fadeIn", animationDuration: "1s" }}
      className={classes["Atm-Pos"]}
    >
      <div className={classes["title"]}>
        <h3>Atm & Pos Payments</h3>
      </div>

      <div className={classes["sub-title"]}>
        <p>Get cash or pay on a POS with no card</p>
      </div>

      <div className={classes["cardless-container"]}>
        <div>
          <FontAwesomeIcon icon={faMoneyBillTransfer} />
          <p>Cardless POS Payments</p>
        </div>
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
    </div>
  );
};

export default AtmPos;
