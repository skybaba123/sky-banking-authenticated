import {
  faBagShopping,
  faMobileScreen,
  faMoneyBillTransfer,
  faPaperPlane,
  faTableList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Nav from "../Nav/Nav";
import Airtime from "./Airtime/Airtime";
import AtmPos from "./AtmPos/AtmPos";
import GiftCards from "./GiftCards/GiftCards";
import classes from "./Pay.module.scss";
import PayBill from "./PayBill/PayBill";
import SendMoney from "./SendMoney/SendMoney";

const Pay = () => {
  const [sendMoney, setSendMoney] = useState(true);
  const [airtime, setAirtime] = useState(false);
  const [payBill, setPayBill] = useState(false);
  const [giftCard, setGiftCard] = useState(false);
  const [atmPos, setAtmPos] = useState(false);

  const showSendMoney = () => {
    setSendMoney(true);
    setAirtime(false);
    setPayBill(false);
    setGiftCard(false);
    setAtmPos(false);
  };

  const showAirtime = () => {
    setSendMoney(false);
    setAirtime(true);
    setPayBill(false);
    setGiftCard(false);
    setAtmPos(false);
  };

  const showPayBill = () => {
    setSendMoney(false);
    setAirtime(false);
    setPayBill(true);
    setGiftCard(false);
    setAtmPos(false);
  };

  const showGiftCard = () => {
    setSendMoney(false);
    setAirtime(false);
    setPayBill(false);
    setGiftCard(true);
    setAtmPos(false);
  };

  const showAtmPos = () => {
    setSendMoney(false);
    setAirtime(false);
    setPayBill(false);
    setGiftCard(false);
    setAtmPos(true);
  };

  return (
    <>
      <Nav />
      <div className={classes.pay}>
        <h1>Payments</h1>
        <div className={classes["payment-nav"]}>
          <div
            className={classes[sendMoney ? "active" : "inactive"]}
            onClick={showSendMoney}
          >
            <FontAwesomeIcon icon={faPaperPlane} />
            <p>Send Money</p>
          </div>

          <div
            className={classes[airtime ? "active" : "inactive"]}
            onClick={showAirtime}
          >
            <FontAwesomeIcon icon={faMobileScreen} /> <p>Airtime</p>
          </div>

          <div
            className={classes[payBill ? "active" : "inactive"]}
            onClick={showPayBill}
          >
            <FontAwesomeIcon icon={faTableList} /> <p>Pay a Bil</p>
          </div>

          <div
            className={classes[giftCard ? "active" : "inactive"]}
            onClick={showGiftCard}
          >
            <FontAwesomeIcon icon={faBagShopping} /> <p>Gift Cards</p>
          </div>

          <div
            className={classes[atmPos ? "active" : "inactive"]}
            onClick={showAtmPos}
          >
            <FontAwesomeIcon icon={faMoneyBillTransfer} /> <p>ATM & POS</p>
          </div>
        </div>

        {sendMoney && <SendMoney />}
        {airtime && <Airtime />}
        {payBill && <PayBill />}
        {giftCard && <GiftCards />}
        {atmPos && <AtmPos />}
      </div>
    </>
  );
};

export default Pay;
