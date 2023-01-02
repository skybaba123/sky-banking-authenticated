import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import classes from "./GiftCards.module.scss";

const GiftCards = () => {
  return (
    <div
      style={{ animation: "fadeIn", animationDuration: "1s" }}
      className={classes["gift-cards"]}
    >
      <div className={classes["title"]}>
        <h3>Gift Cards</h3>
      </div>

      <div className={classes["input-container"]}>
        <FontAwesomeIcon icon={faSearch} />{" "}
        <input placeholder="Search gift cards here" type="text" />
      </div>

      <div className={classes["category-container"]}>
        <div>
          <p>All</p>
        </div>
        <div>
          <p>App</p>
        </div>
        <div>
          <p>Bauty</p>
        </div>
        <div>
          <p>Electronics</p>
        </div>
        <div>
          <p>Fashion</p>
        </div>
        <div>
          <p>Films & Tv</p>
        </div>
      </div>

      
    </div>
  );
};

export default GiftCards;
