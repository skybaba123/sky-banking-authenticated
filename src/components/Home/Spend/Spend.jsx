import React from "react";
import classes from "./Spend.module.scss";
import { faSearch, faSimCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import balance from "./images/balance.svg";
import HomeNav from "../HomeNav/HomeNav";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../../store/LoginContext";
import Transaction from "./Transaction";
import Popup from "../../popup/Popup";
import { useState, useEffect } from "react";

const Spend = () => {
  const users = useContext(LoginContext);
  const accountBal = new Intl.NumberFormat().format(
    users.currentAccountBalance
  );
  const [transName, setTransName] = useState("");
  const [transAmount, setTransAmount] = useState("");
  const [transId, setTransId] = useState("");
  const [transStatus, setTransStatus] = useState("");
  const [transDate, setTransDate] = useState("");
  const [transTime, setTransTime] = useState("");
  const [displayTrans, setDisplayTrans] = useState([]);
  const [transactionInput, setTransactionInput] = useState("");

  useEffect(() => {
    // eslint-disable-next-line
    const search = displayTrans.filter((each) =>
      each.sender.includes(
        transactionInput.charAt(0).toUpperCase() + transactionInput.slice(1)
      )
    );

    if (transactionInput.trim().length > 0) {
      setDisplayTrans(search);
    } else if (transactionInput.trim().length === 0) {
      setDisplayTrans(users?.currentUserTran);
    }
    // eslint-disable-next-line
  }, [users?.currentUserTran, transactionInput]);

  const transactionInputChangeHandler = (e) => {
    setTransactionInput(e.target.value);
  };

  const transactions = displayTrans?.map((tran, id) => (
    <Transaction
      style={{ animation: "fadeIn", animationDuration: "1s" }}
      onClick={() => {
        setTransName(tran.sender);
        setTransAmount(tran.amount);
        setTransId(tran.id);
        setTransStatus(tran.status);
        setTransDate(tran.date);
        setTransTime(tran.time);
        users.transHandler();
      }}
      arr={users.currentUserTran}
      sender={tran.sender}
      time={tran.time}
      date={tran.date}
      amount={tran.amount}
      status={tran.status}
      key={id}
      id={tran.id}
      delay={id}
    />
  ));

  return (
    <>
      {users.transDetails && (
        <Popup>
          <h1>{transName}</h1>
          <h3>
            You {transStatus === "red" ? "Sent" : "Received"}{" "}
            <span style={{ color: transStatus === "red" ? "red" : "green" }}>
              {transAmount}
            </span>
          </h3>
          <h3>Transaction Id: {transId}</h3>
          <p>Transaction Made on:</p>
          <p>
            {transDate} at {transTime}
          </p>
        </Popup>
      )}
      <div className={classes.spend}>
        <div
          style={{ animation: "fadeIn", animationDuration: "1s" }}
          className={classes["balance-container"]}
        >
          <div className={classes["left"]}>
            <img className={classes["bal-image"]} src={balance} alt="" />
            <div>
              <small>Account Balance</small>
              <h1>
                <span>₦</span>
                {accountBal}
              </h1>
            </div>
          </div>

          <div className={classes["right"]}>
            <div>
              <FontAwesomeIcon onClick={users.incraseBal} icon={faSimCard} />
            </div>
            <Link to="/add">
              <button>Add Money</button>
            </Link>
          </div>
        </div>

        <HomeNav spend="#dd4f05" />

        <div className={classes["search-container"]}>
          <FontAwesomeIcon icon={faSearch} />
          <input
            value={transactionInput}
            onChange={transactionInputChangeHandler}
            placeholder="Search Transaction"
            type="text"
          />
        </div>

        <div className={classes["transaction-container"]}>
          {transactions.length > 0 ? (
            transactions
          ) : (
            <h1 style={{ animation: "fadeIn", animationDuration: "1s" }}>
              No Transaction Found
            </h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Spend;
