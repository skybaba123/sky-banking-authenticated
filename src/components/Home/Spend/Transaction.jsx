import React from "react";
import {
  faAngleRight,
  faMoneyBillTransfer,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Spend.module.scss";

const Transaction = ({
  sender,
  time,
  date,
  amount,
  status,
  onClick,
  delay,
  arr,
}) => {
  return (
    <>
      <div
        style={{
          animation: "fadeInDown",
          animationDuration: "1s",
          animationDelay: `${delay / arr.length}s`,
        }}
        onClick={onClick}
        className={classes["single-transaction"]}
      >
        <div className={classes["left"]}>
          <FontAwesomeIcon icon={faMoneyBillTransfer} />
          <div>
            <h3>{sender}</h3>
            <p>
              {time} {date}
            </p>
          </div>
        </div>

        <div className={classes["right"]}>
          <p style={{ color: status }}>₦{amount} </p>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
    </>
  );
};

export default Transaction;
