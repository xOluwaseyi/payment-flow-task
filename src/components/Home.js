import React, { useState } from "react";
import classes from "./Home.module.css";
import BillingInfo from "./BillingInfo/BillingInfo";
import ConfirmPayment from "./ConfirmPayment/ConfirmPayment";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import Confirmation from "./Confirmation/Confirmation";

const Home = () => {
  const [step, setStep] = useState(1);

  const prevStep = () => {
    setStep(step - 1);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const homeStep = () => {
    setStep(step - 3);
  };

  return (
    <>
      <main className={classes.mainpage}>
        {step === 4 ? (
          ""
        ) : (
          <div>
            <h1 className={classes.mp__header}>Complete your purchase</h1>
            <div className={classes.payment_forms}>
              <h3 className={step === 1 ? classes.active : classes.not_active}>
                Personal Info
              </h3>
              <h3 className={step === 2 ? classes.active : classes.not_active}>
                Billing Info
              </h3>
              <h3 className={step === 3 ? classes.active : classes.not_active}>
                Confirm Payment
              </h3>
            </div>

            {step === 1 && <PersonalInfo nextStep={nextStep} />}
            {step === 2 && (
              <BillingInfo prevStep={prevStep} nextStep={nextStep} />
            )}
            {step === 3 && (
              <ConfirmPayment prevStep={prevStep} nextStep={nextStep} />
            )}
          </div>
        )}
      </main>

      {step === 4 && <Confirmation homeStep={homeStep} />}
    </>
  );
};

export default Home;
