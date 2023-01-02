import {
  faCreditCard,
  faHome,
  faMoon,
  faPaperPlane,
  faPieChart,
  faSignOut,
  faSun,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { LoginContext } from "../../store/LoginContext";
import classes from "./Nav.module.scss";

const Nav = ({ homeActive }) => {
  const [showNav, setShowNav] = useState(false);
  const logout = useContext(LoginContext);

  const navHandler = () => {
    setShowNav(!showNav);
  };

  const logoutHandler = () => {
    logout.isLoggedOut();
  };

  return (
    <>
      {/* *************Mobile nav********************* */}
      <nav
        style={{
          backgroundColor: logout.darkMode ? "#121212" : "",
          color: logout.darkMode ? "white" : "",
          transition: "all .5s",
        }}
        className={classes.nav}
      >
        {showNav && (
          <div
            style={{
              animation: "fadeIn",
              animationDuration: ".7s",
            }}
            onClick={navHandler}
            className={classes.overLay}
          ></div>
        )}
        {showNav && (
          <div
            style={{
              backgroundColor: logout.darkMode ? "#121212" : "",
              color: logout.darkMode ? "white" : "",
              animation: "fadeInRight",
              animationDuration: ".7s",
            }}
            className={classes["mobile-nav"]}
          >
            <div className={classes["account-times"]}>
              <div>
                <NavLink
                  className={({ isActive }) => (isActive ? classes.active : "")}
                  to="/account"
                >
                  <FontAwesomeIcon icon={faUser} />
                </NavLink>
                <NavLink to="/account">
                  <p>Account</p>
                </NavLink>
              </div>
              <FontAwesomeIcon
                onClick={navHandler}
                className={classes.times}
                icon={faTimes}
              />
            </div>

            <div>
              <NavLink
                className={({ isActive }) => (isActive ? classes.active : "")}
                to="/home"
              >
                <p>
                  <FontAwesomeIcon icon={faHome} /> Home
                </p>
              </NavLink>
            </div>

            <div>
              <NavLink
                className={({ isActive }) => (isActive ? classes.active : "")}
                to="/pay"
              >
                <p>
                  <FontAwesomeIcon icon={faPaperPlane} /> Payments
                </p>
              </NavLink>
            </div>

            <div>
              <NavLink
                className={({ isActive }) => (isActive ? classes.active : "")}
                to="/budgets"
              >
                <p>
                  <FontAwesomeIcon icon={faPieChart} /> Budgets
                </p>
              </NavLink>
            </div>

            <div>
              <NavLink
                className={({ isActive }) => (isActive ? classes.active : "")}
                to="/cards"
              >
                <p>
                  <FontAwesomeIcon icon={faCreditCard} /> Cards
                </p>
              </NavLink>
            </div>

            <div onClick={logoutHandler} className={classes.signout}>
              <FontAwesomeIcon icon={faSignOut} /> <p>Sign Out</p>
            </div>
          </div>
        )}

        {/* *************desktop nav********************* */}

        <Link to="/">
          <h1>Sky</h1>
        </Link>
        <div className={classes["nav-links"]}>
          <NavLink
            className={({ isActive }) => (isActive ? classes.active : "")}
            to="/home"
          >
            <p style={{ color: homeActive }}>
              Home{" "}
              <FontAwesomeIcon style={{ color: homeActive }} icon={faHome} />
            </p>
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? classes.active : "")}
            to="/pay"
          >
            <p>
              Pay <FontAwesomeIcon icon={faPaperPlane} />
            </p>
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? classes.active : "")}
            to="/budgets"
          >
            <p>
              Budgets <FontAwesomeIcon icon={faPieChart} />
            </p>
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? classes.active : "")}
            to="/cards"
          >
            <p>
              Cards <FontAwesomeIcon icon={faCreditCard} />
            </p>
          </NavLink>
        </div>

        <div>
          {logout.darkMode ? (
            <FontAwesomeIcon
              onClick={() => {
                logout.darkModeHandler();
              }}
              icon={faSun}
            />
          ) : (
            <FontAwesomeIcon
              onClick={() => {
                logout.darkModeHandler();
              }}
              icon={faMoon}
            />
          )}

          <NavLink
            className={({ isActive }) => (isActive ? classes.active : "")}
            to="/account"
          >
            <FontAwesomeIcon icon={faUser} />
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? classes.active : "")}
            to="/account"
          >
            <p className={classes.account}>Account</p>
          </NavLink>

          <div onClick={navHandler} className={classes.hambuger}>
            <div
              style={{
                backgroundColor: logout.darkMode ? "white" : "",
              }}
              className={classes.top}
            ></div>
            <div
              style={{
                backgroundColor: logout.darkMode ? "white" : "",
              }}
              className={classes.bottom}
            ></div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
