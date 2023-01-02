import React from "react";
import classes from "./Login.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLock,
  faMoon,
  faSun,
  faEye,
  faEyeLowVision,
} from "@fortawesome/free-solid-svg-icons";
import desk from "../../Assets/Login-desk.svg";
import { useState } from "react";
import { useContext } from "react";
import { LoginContext } from "../../store/LoginContext";
import { useNavigate } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import Loader from "../popup/Loader/Loader";
import Popup from "../popup/Popup";
import { useEffect } from "react";

const Login = () => {
  const [hidePass, setHidePass] = useState(null);
  const navigate = useNavigate();
  const loginContext = useContext(LoginContext);

  useEffect(() => {
    const data = localStorage.getItem("hide");
    setHidePass(JSON.parse(data));
  }, []);

  useEffect(() => {
    if (hidePass !== null)
      localStorage.setItem("hide", JSON.stringify(hidePass));
  }, [hidePass]);

  return (
    <>
      {loginContext.loginLoader && (
        <Loader>
          <PropagateLoader color="#dd4f05" />
        </Loader>
      )}

      {loginContext.loginError && (
        <Popup>
          <h3>Wrong Credential</h3>
        </Popup>
      )}

      <div className={classes.login}>
        <nav
          style={{
            backgroundColor: loginContext.darkMode ? "#121212" : "",
            color: loginContext.darkMode ? "white" : "",
          }}
        >
          <h1>Sky</h1>
          <div>
            <div>
              {loginContext.darkMode ? (
                <FontAwesomeIcon
                  onClick={() => {
                    loginContext.darkModeHandler();
                  }}
                  icon={faSun}
                />
              ) : (
                <FontAwesomeIcon
                  onClick={() => {
                    loginContext.darkModeHandler();
                  }}
                  icon={faMoon}
                />
              )}
            </div>
            <button onClick={() => navigate("/register")}>
              Open an Account
            </button>
          </div>
        </nav>

        <main style={{ animation: "fadeIn", animationDuration: ".7s" }}>
          <div className={classes.auth}>
            <div className={classes.announcement}>
              <FontAwesomeIcon color="#dd4f05" icon={faLock} />
              <p>
                Please, check your browser’s address bar to be sure you’re on
                <span> https://app.sky.com</span>
              </p>
            </div>

            <div className={classes["login-wrapper"]}>
              <form>
                <h2>Sign in to Sky</h2>
                <p>
                  To sign in, please type in the email address linked to your
                  Kuda account and your Kuda password.
                </p>
                <label className={classes["label-input"]} htmlFor="email">
                  Email Address
                </label>{" "}
                <br />
                <input
                  onChange={loginContext.emailChange}
                  value={loginContext.emailInput.toLowerCase()}
                  placeholder="example@gmail.com"
                  id="email"
                  type="email"
                />
                <br />
                <hr />
                <label className={classes["label-input"]} htmlFor="password">
                  Password
                </label>
                <br />
                <input
                  onChange={loginContext.passwordChange}
                  value={loginContext.passwordInput}
                  placeholder="•••••••••••••"
                  id="password"
                  type={hidePass ? "text" : "password"}
                />
                {hidePass ? (
                  <FontAwesomeIcon
                    onClick={() => setHidePass(false)}
                    icon={faEye}
                  />
                ) : (
                  <FontAwesomeIcon
                    onClick={() => setHidePass(true)}
                    icon={faEyeLowVision}
                  />
                )}
                <hr />
                <small>
                  Forgot Password? <span>Reset it</span>
                </small>
                <br />
                <button onClick={loginContext.demoFill}>Demo fill</button>
                <button onClick={loginContext.isLoggedIn} type="submit">
                  Continue
                </button>
              </form>
            </div>
          </div>
          <div className={classes["image-container"]}>
            <img src={desk} alt="" />
          </div>
        </main>
      </div>
    </>
  );
};

export default Login;
