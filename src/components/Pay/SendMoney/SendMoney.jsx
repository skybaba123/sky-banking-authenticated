// import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { LoginContext } from "../../../store/LoginContext";
import classes from "./SendMoney.module.scss";
import Popup from "../../popup/Popup";
import Button from "../../Button/Button";
import { useNavigate } from "react-router-dom";
import Loader from "../../popup/Loader/Loader";
import { PropagateLoader } from "react-spinners";

const SendMoney = () => {
  const sendCtx = useContext(LoginContext);
  const [takeNote, setTakeNote] = useState(50);
  const [takeNoteInput, setTakeNoteInput] = useState("");
  const navigate = useNavigate();

  return (
    <>
      {sendCtx.loginLoader && (
        <Loader>
          <PropagateLoader color="#dd4f05" />
        </Loader>
      )}

      {sendCtx.transferSuccess && (
        <Popup>
          <h3>Transfer successful</h3>

          <Button onClick={sendCtx.closeModal} text="Another Transfer" />
          <Button
            onClick={() => {
              sendCtx.closeModal();
              navigate("/home");
            }}
            text="Go Home"
          />
        </Popup>
      )}

      {sendCtx.transferError && (
        <Popup>
          <h3>Insufficient funds or invalid input amount</h3>
        </Popup>
      )}

      <div
        style={{ animation: "fadeIn", animationDuration: "1s" }}
        className={classes["send-money"]}
      >
        <div className={classes["title"]}>
          <h3>Send Money</h3>
        </div>

        <div className={classes["free-transfers"]}>
          <p>Free Transfers to other Banks</p> <h3>25</h3>
        </div>

        <div className={classes["pay-nav"]}>
          <p>Account Number</p>
          <p>Username</p>
        </div>

        <div className={classes["amount-details"]}>
          <p className={classes["amount-tag"]}>Amount</p>
          <div className={classes["input-container"]}>
            <p>₦</p>
            <input
              onChange={sendCtx.amountChange}
              value={sendCtx.amountInput}
              placeholder="How much?"
              type="number"
            />
          </div>
          <p className={classes["balance-tag"]}>
            Account Balance: ₦{sendCtx.currentAccountBalance}
          </p>

          <div
            style={{ marginTop: "1rem" }}
            className={classes["input-container"]}
          >
            <input
              maxLength={10}
              style={{ paddingLeft: "1rem" }}
              placeholder="Account Number"
              type="number"
              value={sendCtx.accNumInput}
              onChange={sendCtx.accNumInputChange}
            />
          </div>
          <p className={classes["beneficiary"]}>{sendCtx.beneficiary}</p>
        </div>

        {/* <div className={classes["send-details"]}>
        <p>Send To</p>
        <div>
          <FontAwesomeIcon icon={faAngleDown} />
          <p>Who?</p>
        </div>
      </div> */}

        <div className={classes["take-note"]}>
          <div className={classes["note-details"]}>
            <p>Add a Note</p>
            <p>{takeNote}</p>
          </div>
          <div className={classes["input-container"]}>
            <input
              maxLength={50}
              value={takeNoteInput}
              onKeyDown={(e) => {
                if (takeNote === 50) {
                  return;
                }

                if (e.key === "Backspace") {
                  setTakeNote(takeNote + 2);
                }
              }}
              onInput={(e) => {
                if (takeNote === 0) {
                  return;
                }

                setTakeNote(takeNote - 1);
              }}
              onChange={(e) => {
                setTakeNoteInput(e.target.value);
              }}
              placeholder="What's it For?"
              type="text"
            />
          </div>
        </div>

        <div className={classes["btn"]}>
          <button onClick={sendCtx.incraseBal}>Send Money</button>
        </div>
      </div>
    </>
  );
};

export default SendMoney;
