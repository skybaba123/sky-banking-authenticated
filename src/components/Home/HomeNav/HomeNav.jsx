import React from "react";
import classes from "./HomeNav.module.scss";
import { Link } from "react-router-dom";

// #dd4f05

const HomeNav = ({ spend, save, borrow }) => {
  return (
    <div className={classes["nav-container"]}>
      <Link to="/home">
        <p style={{ color: spend }}>Spend</p>
      </Link>
      <Link to="/home/save">
        <p style={{ color: save }}>Save</p>
      </Link>
      <Link to="/home/borrow">
        <p style={{ color: borrow }}>Borrow</p>
      </Link>
    </div>
  );
};

export default HomeNav;
