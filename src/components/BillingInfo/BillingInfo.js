import React from "react";
import Button from "../UI/Button";
import classes from "./BillingInfo.module.css";

const BillingInfo = ({ prevStep, nextStep }) => {
  const PrevStep = (e) => {
    e.preventDefault();
    prevStep();
  };

  const NextStep = (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <>
      <form className={classes.form}>
        <label htmlFor="name" className={classes.form_label}>
          Name on card <span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="text"
          className={classes.form_input}
          id="name"
          placeholder="Opara Linus Ahmed"
          required
        />

        <label htmlFor="card-type" className={classes.form_label}>
          Card Type <span style={{ color: "red" }}>*</span>
        </label>
        <select id="card-type" className={classes.form_input} required>
          <option value="Visa" selected>
            Visa
          </option>
          <option value="Mastercard">Mastercard</option>
        </select>

        {/* card details */}
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <div>
            <label
              htmlFor="ccn"
              className={classes.form_label}
              style={{ display: "block" }}
            >
              Card details <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="tel"
              className={classes.form_input}
              id="ccn"
              placeholder="xxxx xxxx xxxx xxxx"
              required
              style={{ width: "270px" }}
            />
          </div>

          <div>
            <label
              htmlFor="expirydate"
              className={classes.form_label}
              style={{ display: "block" }}
            >
              Expiry date <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="tel"
              className={classes.form_input}
              id="expirydate"
              placeholder="xx / xx"
              required
            />
          </div>

          <div>
            <label
              htmlFor="cvv"
              className={classes.form_label}
              style={{ display: "block" }}
            >
              CVV <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="tel"
              className={classes.form_input}
              id="cvv"
              placeholder="xxx"
              required
            />
          </div>
        </div>

        <div className={classes.form_bottom}>
          <Button text="Next" NextStep={NextStep} />
          <p
            onClick={PrevStep}
            style={{ fontWeight: "bold", color: "#4E598C " }}
          >
            Cancel Payment
          </p>
        </div>
      </form>
    </>
  );
};

export default BillingInfo;
