import React from "react";
import Card from "../UI/Card";
import classes from "./Confirmation.module.css";

const Confirmation = ({ homeStep }) => {
  return (
    <div className={classes.confirmation}>
      <Card>
        <div className={classes.confirmation_card}>
          <h1 style={{ margin: "20px 0", color: " #4E598C" }}>
            Purchase Completed
          </h1>
          <p style={{ margin: "20px 0" }}>
            Please check your email for details concerning this transaction.
          </p>
          <p
            className={classes.return}
            onClick={() => {
              homeStep();
            }}
          >
            Return Home
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Confirmation;
