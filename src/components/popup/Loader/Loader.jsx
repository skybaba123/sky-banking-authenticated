import classes from "./Loader.module.scss";

import React from "react";

const Loader = ({ children }) => {
  return (
    <React.Fragment>
      <div
        style={{ animation: "fadeIn", animationDuration: "1s" }}
        className={classes["overlay"]}
      ></div>
      <div
        style={{ animation: "fadeIn", animationDuration: "1s" }}
        className={classes["popup"]}
      >
        {children}
      </div>
    </React.Fragment>
  );
};

export default Loader;
