import React from "react";
import classes from "./Transactions.module.scss";
import plus from "../images/budget-plus.svg";

const Transactions = () => {
  return (
    <React.Fragment>
      <div className={classes["budget-details"]}>
        <div className={classes["create-budget"]}>
          <p className={classes["top-tag"]}>Create a Budget</p>{" "}
          <img src={plus} alt="plus" />
        </div>
        <div className={classes["budget-div"]}>
          <p className={classes["top-tag"]}>Spent This Period</p>
          <p className={classes["amount-spend"]}>-₦0</p>
        </div>
        <div className={classes["budget-div"]}>
          <p className={classes["top-tag"]}>Income This Period</p>
          <p className={classes["amount-income"]}>+₦0</p>
        </div>
        <div className={classes["budget-div"]}>
          <p className={classes["top-tag"]}>Account Balance</p>
          <p className={classes["amount-balance"]}>₦0</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Transactions;
