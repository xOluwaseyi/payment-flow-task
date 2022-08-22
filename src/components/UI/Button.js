import React from "react";
import classes from "./Button.module.css";

const Button = ({ text, NextStep }) => {
  return (
    <>
      <button className={classes.btn} onClick={NextStep}>
        {text}
      </button>
    </>
  );
};

export default Button;
