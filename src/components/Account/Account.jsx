import { faReadme, faRocketchat } from "@fortawesome/free-brands-svg-icons";
import {
  faAngleRight,
  faCreditCard,
  faExclamation,
  faExclamationCircle,
  faEyeSlash,
  faFileLines,
  faMoon,
  faStopCircle,
  faUserCircle,
  faUserEdit,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Nav from "../Nav/Nav";
import classes from "./Account.module.scss";
import maleAvatar from "./images/male-avatar.svg";
import { useContext } from "react";
import { LoginContext } from "../../store/LoginContext";

const Account = () => {
  const logout = useContext(LoginContext);
  const userInfo = useContext(LoginContext);

  return (
    <>
      <Nav />
      <div
        style={{ animation: "fadeIn", animationDuration: "1s" }}
        className={classes["account"]}
      >
        <div className={classes["title"]}>
          <h1>Account</h1>
        </div>

        <div className={classes["account-wrapper"]}>
          <div className={classes["account-detail-header"]}>
            <div className={classes["left"]}>
              <div className={classes["avatar-container"]}>
                <img src={maleAvatar} alt="avatar" />
              </div>
              <div>
                <h3>
                  {userInfo.currentName} <br />
                  {userInfo.currentLname}
                </h3>
                <small>Copy Username</small>
                <p>{userInfo.currentUserName}</p>
                <small>Copy account Number</small>
                <p>{userInfo.currentAccountNumber}</p>
              </div>
            </div>

            <div className={classes["right"]}>
              <div>
                <h3>Invite & Refer</h3>
                <button>View referrals</button>
              </div>
              <div>
                <p>Amount Earned</p>
                <h2>
                  <sup>₦</sup>0
                </h2>
              </div>
            </div>
          </div>

          <div className={classes["account-detail-body"]}>
            <section className={classes["left"]}>
              <div className={classes["single-wrapper"]}>
                <div className={classes["single-wrapper-left"]}>
                  <FontAwesomeIcon icon={faUserEdit} />
                  <p>View Profile</p>
                </div>
                <FontAwesomeIcon icon={faAngleRight} />
              </div>

              <div className={classes["single-wrapper"]}>
                <div className={classes["single-wrapper-left"]}>
                  <FontAwesomeIcon icon={faFileLines} />
                  <p>Account Statement</p>
                </div>
                <FontAwesomeIcon icon={faAngleRight} />
              </div>

              <div className={classes["single-wrapper"]}>
                <div className={classes["single-wrapper-left"]}>
                  <FontAwesomeIcon icon={faCreditCard} />
                  <p>Saved Cards</p>
                </div>
                <FontAwesomeIcon icon={faAngleRight} />
              </div>

              <div className={classes["single-wrapper"]}>
                <div className={classes["single-wrapper-left"]}>
                  <FontAwesomeIcon icon={faUserCircle} />
                  <p>Linked Accounts</p>
                </div>
                <FontAwesomeIcon icon={faExclamationCircle} />
              </div>

              <div className={classes["single-wrapper"]}>
                <div className={classes["single-wrapper-left"]}>
                  <FontAwesomeIcon icon={faStopCircle} />
                  <p>Account Limits</p>
                </div>
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
            </section>

            <section className={classes["right"]}>
              <div className={classes["single-wrapper"]}>
                <div className={classes["single-wrapper-left"]}>
                  <FontAwesomeIcon icon={faExclamation} />
                  <p>Terms & Condition</p>
                </div>
                <FontAwesomeIcon icon={faAngleRight} />
              </div>

              <div className={classes["single-wrapper"]}>
                <div className={classes["single-wrapper-left"]}>
                  <FontAwesomeIcon icon={faReadme} />
                  <p>FAQs</p>
                </div>
                <FontAwesomeIcon icon={faAngleRight} />
              </div>

              <div className={classes["single-wrapper"]}>
                <div className={classes["single-wrapper-left"]}>
                  <FontAwesomeIcon icon={faRocketchat} />
                  <p>Chat With Us</p>
                </div>
                <FontAwesomeIcon icon={faAngleRight} />
              </div>

              <div className={classes["single-wrapper"]}>
                <div className={classes["single-wrapper-left"]}>
                  <FontAwesomeIcon icon={faEyeSlash} />
                  <p>Hide Balance</p>
                </div>
                <FontAwesomeIcon icon={faAngleRight} />
              </div>

              <div className={classes["single-wrapper"]}>
                <div className={classes["single-wrapper-left"]}>
                  <FontAwesomeIcon icon={faMoon} />
                  <p>Dark Mode</p>
                </div>
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
            </section>
          </div>

          <div
            onClick={logout.isLoggedOut}
            className={classes["account-detail-signout"]}
          >
            <p>Sign Out</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
