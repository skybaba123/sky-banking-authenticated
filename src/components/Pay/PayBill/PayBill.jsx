import { faInternetExplorer } from "@fortawesome/free-brands-svg-icons";
import {
  faAngleRight,
  faLightbulb,
  faMoneyBillWave,
  faTv,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import classes from "./PayBill.module.scss";

const PayBill = () => {
  return (
    <div
      style={{ animation: "fadeIn", animationDuration: "1s" }}
      className={classes["pay-bill"]}
    >
      <div className={classes["title"]}>
        <h3>Pay a Bill</h3>
      </div>

      <div className={classes["single-container"]}>
        <div>
          <FontAwesomeIcon icon={faTv} />
          <p>TV</p>
        </div>
        <FontAwesomeIcon icon={faAngleRight} />
      </div>

      <div className={classes["single-container"]}>
        <div>
          <FontAwesomeIcon icon={faInternetExplorer} />
          <p>Internet</p>
        </div>
        <FontAwesomeIcon icon={faAngleRight} />
      </div>

      <div className={classes["single-container"]}>
        <div>
          <FontAwesomeIcon icon={faLightbulb} />
          <p>Electricity</p>
        </div>
        <FontAwesomeIcon icon={faAngleRight} />
      </div>

      <div className={classes["single-container"]}>
        <div>
          <FontAwesomeIcon icon={faMoneyBillWave} />
          <p>Betting</p>
        </div>
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
    </div>
  );
};

export default PayBill;
