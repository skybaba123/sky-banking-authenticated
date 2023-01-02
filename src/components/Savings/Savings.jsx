import {
  faAngleLeft,
  faLock,
  faPiggyBank,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import classes from "./Savings.module.scss";

const Savings = () => {
  return (
    <>
      <Nav homeActive="#e78651" />
      <div className={classes["savings"]}>
        <div className={classes["container"]}>
          <Link to="/home/save">
            <div className={classes["back-container"]}>
              <FontAwesomeIcon icon={faAngleLeft} /> <small>Back</small>
            </div>
          </Link>

          <div className={classes["title"]}>
            <h1>Save Now</h1>
          </div>

          <div className={classes["single-container"]}>
            <FontAwesomeIcon icon={faPiggyBank} />
            <h3>Spend + Save</h3>
            <p>Save a percentage every time you spend from your account.</p>
          </div>

          <div className={classes["single-container"]}>
            <FontAwesomeIcon icon={faPiggyBank} />
            <h3>Flexible Savings</h3>
            <p>
              Save daily, weekly or monthly towards a goal, get up to 10%
              interest per Year.
            </p>
          </div>

          <div className={classes["single-container"]}>
            <FontAwesomeIcon icon={faLock} />
            <h3>Fixed Savings</h3>
            <p>Save ₦5000 or more at once, get up to 15% interest per year.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Savings;
