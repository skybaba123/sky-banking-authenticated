import classes from "./Cards.module.scss";
import React from "react";
import Nav from "../Nav/Nav";
import doubleImage from "./images/double-card.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faCreditCard } from "@fortawesome/free-solid-svg-icons";

const Cards = () => {
  return (
    <>
      <Nav />
      <div
        style={{ animation: "fadeIn", animationDuration: ".7s" }}
        className={classes.cards}
      >
        <div className={classes["title"]}>
          <h1>Cards</h1>
        </div>

        <div className={classes["card-container"]}>
          <div className={classes["card-image"]}>
            <img src={doubleImage} alt="card" />
          </div>

          <div className={classes["p-tag"]}>
            <p>
              Spend Online and Offline with your Sky <br /> Cards.
            </p>
          </div>

          <div className={classes["request-card"]}>
            <div className={classes["request-card-detail"]}>
              <FontAwesomeIcon icon={faCreditCard} />
              <div>
                <h3>Request a Card</h3>
                <p>We'll Send it to you wherever you're.</p>
              </div>
            </div>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
