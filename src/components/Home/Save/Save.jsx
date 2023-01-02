import React from "react";
import classes from "./Save.module.scss";
import HomeNav from "../HomeNav/HomeNav";
import saveBal from "./images/save-bal.png";
import saveNow from "./images/save-now.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPiggyBank } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../../store/LoginContext";

const Save = () => {
  const navigate = useNavigate();
  const ctx = useContext(LoginContext);
  const savingsPage = () => {
    navigate("/savings");
  };

  return (
    <div className={classes.Save}>
      <div
        style={{ animation: "fadeIn", animationDuration: "1s" }}
        className={classes["balance-container"]}
      >
        <div className={classes["left"]}>
          <img className={classes["bal-image"]} src={saveBal} alt="" />
          <div>
            <small>Saving Balance</small>
            <h1>
              <span>₦</span>
              {ctx.currentSavingBalance}
            </h1>
          </div>
        </div>

        <div className={classes["right"]}>
          <button onClick={savingsPage}>Save Now</button>
        </div>
      </div>

      <HomeNav save="#dd4f05" />

      <div className={classes["save-details"]}>
        <div className={classes["left"]}>
          <div className={classes["div-one"]}>
            <div className={classes["piggy-icon"]}>
              <FontAwesomeIcon icon={faPiggyBank} />
            </div>
            <small>Saved</small>
            <h3>{ctx.currentSavingBalance}</h3>
          </div>

          <div className={classes["div-two"]}>
            <small className={classes["spend-save"]}>Spend + Save</small>
            <small>Percentage to Save</small>
            <h3>10%</h3>
          </div>
        </div>
        <div onClick={savingsPage} className={classes["right"]}>
          <img src={saveNow} alt="" />
          <p>Save Now</p>
        </div>
      </div>
    </div>
  );
};

export default Save;
