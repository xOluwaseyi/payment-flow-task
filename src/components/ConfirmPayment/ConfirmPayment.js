import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./ConfirmPayment.module.css";

const ConfrimPayment = ({ prevStep, nextStep }) => {
  const PrevStep = (e) => {
    e.preventDefault();
    prevStep();
  };

  const NextStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className={classes.confirmation}>
      <Card>
        <div className={classes.cardHead}>
          <p># Item Name</p>
          <p>Item price</p>
        </div>
        <div className={classes.cardDetails}>
          <p style={{ color: "#4E598C" }}>Data science and usability</p>
          <p style={{ color: "#4E598C" }}>50,000.00</p>
        </div>
        <div className={classes.cardDetails}>
          <p style={{ color: "#4E598C" }}>Shipping</p>
          <p>00.0</p>
        </div>
        <hr />
        <div className={classes.cardTotal}>
          <p>Total</p>
          <p style={{ color: "#4E598C", fontWeight: "bold" }}>50,000.00</p>
        </div>
      </Card>
      <div className={classes.form_bottom}>
        <Button text="Pay" NextStep={NextStep} />
        <p onClick={PrevStep} style={{ fontWeight: "bold", color: "#4E598C " }}>
          Cancel Payment
        </p>
      </div>
    </div>
  );
};

export default ConfrimPayment;
