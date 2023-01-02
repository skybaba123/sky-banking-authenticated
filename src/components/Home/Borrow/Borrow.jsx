import React from "react";
import HomeNav from "../HomeNav/HomeNav";
import classes from "./Borrow.module.scss";
import borrowBal from "./images/borrow-bal.svg";
import borrowApp from "./images/borrow-app.svg";
import { useContext } from "react";
import { LoginContext } from "../../../store/LoginContext";

const Borrow = () => {
  const ctx = useContext(LoginContext);

  return (
    <div className={classes.Borrow}>
      <div
        style={{ animation: "fadeIn", animationDuration: "1s" }}
        className={classes["balance-container"]}
      >
        <div className={classes["left"]}>
          <img className={classes["bal-image"]} src={borrowBal} alt="" />
          <div>
            <small>You Owe</small>
            <h1>
              <span>₦</span>
              {ctx.currentOwe}
            </h1>
          </div>
        </div>

        <div className={classes["right"]}>
          <button disabled>Get a Loan</button>
        </div>
      </div>

      <HomeNav borrow="#dd4f05" />

      <div className={classes["borrow-details"]}>
        <img src={borrowApp} alt="" />
        <p className={classes["borrow-details-para-one"]}>
          Please Use The Mobile App
        </p>
        <p className={classes["borrow-details-para-two"]}>
          You Can Only accept Sky OverDraft Using The <br /> Mobile App
        </p>
      </div>
    </div>
  );
};

export default Borrow;
