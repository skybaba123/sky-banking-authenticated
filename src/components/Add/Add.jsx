import {
  faAngleLeft,
  faCreditCard,
  faHashtag,
  faMoneyBillTransfer,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import classes from "./Add.module.scss";

const Add = () => {
  return (
    <>
      <Nav homeActive="#e78651" />
      <div
        style={{
          animation: "fadeIn",
          animationDuration: "1s",
        }}
        className={classes["add"]}
      >
        <div className={classes["container"]}>
          <Link to="/home">
            <div className={classes["back-container"]}>
              <FontAwesomeIcon icon={faAngleLeft} /> <small>Back</small>
            </div>
          </Link>

          <div className={classes["title"]}>
            <h1>Add Money</h1>
          </div>

          <div className={classes["top-div"]}>
            <div>
              <FontAwesomeIcon icon={faPaperPlane} />
              <h3>Add By Transfer</h3>
              <p>
                Send money to your account from any Nigerian Bank. with internet
                banking or mobile app.
              </p>
            </div>

            <div>
              <FontAwesomeIcon icon={faHashtag} />
              <h3>Add By USSD</h3>
              <p>
                Send Money to your Sky account through another banks's USSD
                platfrom.
              </p>
            </div>
          </div>

          <div className={classes["bottom-div"]}>
            <div>
              <FontAwesomeIcon icon={faCreditCard} />
              <h3>Add By Card</h3>
              <p>Move money to your account with a debit card.</p>
            </div>

            <div>
              <FontAwesomeIcon icon={faMoneyBillTransfer} />
              <h3>Add By Deposit</h3>
              <p>
                Deposit cash into your Sky Account at any Access bank, GTBank or
                any Zenith branch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add;
