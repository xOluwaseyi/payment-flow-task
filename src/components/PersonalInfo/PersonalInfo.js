import React from "react";
import Button from "../UI/Button";
import classes from "./PersonalInfo.module.css";

const PersonalInfo = ({ nextStep, prevStep }) => {
  const NextStep = (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <>
      <form className={classes.form}>
        <label htmlFor="name" className={classes.form_label}>
          Name
        </label>
        <input
          type="text"
          className={classes.form_input}
          id="name"
          placeholder="Opara Linus Ahmed"
          required
        />

        <label htmlFor="email" className={classes.form_label}>
          Email Address <span style={{ color: "red" }}>*</span>
        </label>
        <p
          style={{
            marginBottom: "15px",
            fontSize: "0.7rem",
            color: "gray",
          }}
        >
          The purchase receipt will be sent to this address.
        </p>
        <input
          type="name"
          className={classes.form_input}
          id="name"
          placeholder="OparaLinusAhmed@devmail.com"
          required
        />

        <label htmlFor="address1" className={classes.form_label}>
          Address 1
        </label>
        <input
          type="text"
          className={classes.form_input}
          id="address1"
          placeholder="The address of the user goes here"
          required
        />

        <label htmlFor="address2" className={classes.form_label}>
          Address 2
        </label>
        <input
          type="text"
          className={classes.form_input}
          id="address2"
          placeholder="and here"
          required
        />

        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <div>
            <label
              htmlFor="lg"
              className={classes.form_label}
              style={{ display: "block" }}
            >
              Local Government
            </label>
            <input
              type="text"
              style={{ width: "400px" }}
              className={classes.form_input}
              id="lg"
              placeholder="Surulere"
              required
            />
          </div>

          <div>
            <label
              htmlFor="states"
              className={classes.form_label}
              style={{ display: "block" }}
            >
              State
            </label>
            <select id="states" className={classes.form_input} required>
              <option value="Abia">Abia</option>
              <option value="Adamawa">Adamawa</option>
              <option value="Akwa Ibom">Akwa Ibom</option>
              <option value="Anambra">Anambra</option>
              <option value="Bauchi">Bauchi</option>
              <option value="Bayelsa">Bayelsa</option>
              <option value="Benue">Benue</option>
              <option value="Borno">Borno</option>
              <option value="Cross River">Cross River</option>
              <option value="Delta">Delta</option>
              <option value="Ebonyi">Ebonyi</option>
              <option value="Edo">Edo</option>
              <option value="Ekiti">Ekiti</option>
              <option value="Enugu">Enugu</option>
              <option value="FCT">Federal Capital Territory</option>
              <option value="Gombe">Gombe</option>
              <option value="Imo">Imo</option>
              <option value="Jigawa">Jigawa</option>
              <option value="Kaduna">Kaduna</option>
              <option value="Kano">Kano</option>
              <option value="Katsina">Katsina</option>
              <option value="Kebbi">Kebbi</option>
              <option value="Kogi">Kogi</option>
              <option value="Kwara">Kwara</option>
              <option value="Lagos">Lagos</option>
              <option value="Nasarawa">Nasarawa</option>
              <option value="Niger">Niger</option>
              <option value="Ogun">Ogun</option>
              <option value="Ondo">Ondo</option>
              <option value="Osun">Osun</option>
              <option value="Oyo">Oyo</option>
              <option value="Plateau">Plateau</option>
              <option value="Rivers">Rivers</option>
              <option value="Sokoto">Sokoto</option>
              <option value="Taraba">Taraba</option>
              <option value="Yobe">Yobe</option>
              <option value="Zamfara">Zamfara</option>
            </select>
          </div>
        </div>

        <div className={classes.form_bottom}>
          <Button text="Next" NextStep={NextStep} />
          <p style={{ fontWeight: "bold", color: "#4E598C " }}>
            Cancel Payment
          </p>
        </div>
      </form>
    </>
  );
};

export default PersonalInfo;
