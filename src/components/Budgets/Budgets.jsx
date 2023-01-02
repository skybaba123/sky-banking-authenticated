import classes from "./Budgets.module.scss";
import React from "react";
import Nav from "../Nav/Nav";
import { Link, Outlet } from "react-router-dom";

const Budgets = () => {
  return (
    <>
      <Nav />
      <div
        style={{ animation: "fadeIn", animationDuration: ".7s" }}
        className={classes.budget}
      >
        <div className={classes["nav-container"]}>
          <Link to="/budgets">
            <p>Transactions</p>
          </Link>
          <Link to="/budgets/plan">
            <p>Budget</p>
          </Link>
          <Link to="/budgets/overview">
            <p>Overview</p>
          </Link>
        </div>

        <Outlet />
      </div>
    </>
  );
};

export default Budgets;
