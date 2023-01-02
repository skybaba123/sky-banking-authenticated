import React from "react";
import classes from "./Register.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLock,
  faMoon,
  faSun,
  faEye,
  faEyeLowVision,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../store/LoginContext";
import { PropagateLoader } from "react-spinners";
import Loader from "../popup/Loader/Loader";

const Register = () => {
  const [hidePass, setHidePass] = useState(false);
  const navigate = useNavigate();
  const ctx = useContext(LoginContext);

  const sigupHandler = (e) => {
    e.preventDefault();
    ctx.signUpHandler();
  };

  return (
    <>
      {ctx.loginLoader && (
        <Loader>
          <PropagateLoader color="#dd4f05" />
        </Loader>
      )}

      <div className={classes.login}>
        <nav>
          <h1>Sky</h1>
          <div>
            <div>
              {true && <FontAwesomeIcon icon={faMoon} />}
              {false && <FontAwesomeIcon icon={faSun} />}
            </div>
            <button onClick={() => navigate("/login")}>Sign In</button>
          </div>
        </nav>

        <main
          className={classes["main"]}
          style={{ animation: "fadeIn", animationDuration: ".7s" }}
        >
          <div className={classes.auth}>
            <div className={classes.announcement}>
              <FontAwesomeIcon color="#dd4f05" icon={faLock} />
              <p>
                Please, check your browser’s address bar to be sure you’re on
                <span> https://app.sky.com</span>
              </p>
            </div>

            <div className={classes["login-wrapper"]}>
              <form onSubmit={sigupHandler}>
                <h2>Open an Account</h2>
                <p>
                  To Open an Account, please fill the form with your correct
                  details.
                </p>

                <label className={classes["label-input"]} htmlFor="fName">
                  First Name
                </label>
                <br />
                <input
                  value={ctx.signupFistNameInput}
                  onChange={ctx.signupFistNameChange}
                  placeholder="Ugochukwu"
                  id="fName"
                  type="text"
                  required
                />
                <br />

                <label className={classes["label-input"]} htmlFor="LName">
                  Last Name
                </label>
                <br />
                <input
                  value={ctx.signupLastNameInput}
                  onChange={ctx.signupLastNameChange}
                  placeholder="Miracle"
                  id="LName"
                  type="text"
                  required
                />
                <br />

                <label className={classes["label-input"]} htmlFor="UName">
                  User Name
                </label>
                <br />
                <input
                  value={ctx.signupUserNameInput.toLowerCase()}
                  onChange={ctx.signupUserNameChange}
                  placeholder="Username"
                  id="UName"
                  type="text"
                  required
                />
                <br />

                <label className={classes["label-input"]} htmlFor="email">
                  Email Address
                </label>
                <br />
                <input
                  value={ctx.signupEmailInput.toLowerCase()}
                  onChange={ctx.signupEmailChange}
                  placeholder="example@gmail.com"
                  id="email"
                  type="email"
                  required
                />
                <br />

                <hr />
                <label className={classes["label-input"]} htmlFor="password">
                  Password
                </label>
                <br />
                <input
                  value={ctx.signupPasswordInput}
                  onChange={ctx.signupPasswordChange}
                  placeholder="•••••••••••••"
                  id="password"
                  type={!hidePass ? "password" : "text"}
                  required
                />
                {hidePass ? (
                  <FontAwesomeIcon
                    onClick={() => setHidePass(!hidePass)}
                    icon={faEye}
                  />
                ) : (
                  <FontAwesomeIcon
                    onClick={() => setHidePass(!hidePass)}
                    icon={faEyeLowVision}
                  />
                )}

                <hr />
                <button type="submit">Sign Up</button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Register;
