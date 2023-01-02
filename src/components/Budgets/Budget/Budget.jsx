import { faPieChart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Budget.module.scss";
import React from "react";

const Budget = () => {
  return (
    <div className={classes["wrapper"]}>
      <div className={classes["pie-chart"]}>
        <FontAwesomeIcon icon={faPieChart} />
      </div>

      <div className={classes["main-tag"]}>
        <p>Nothing to see yet.</p>
      </div>

      <div className={classes["sub-tag"]}>
        <p>
          Create a budget and we will show you <br /> how you're spending your
          money.
        </p>
      </div>

      <div className={classes["btn"]}>
        <button>Create a Budget</button>
      </div>
    </div>
  );
};

export default Budget;
