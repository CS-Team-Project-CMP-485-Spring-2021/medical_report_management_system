import React from "react";

import PatientSignIn from "../../components/PatientSignIn";
import PatientSignUp from "../../components/PatientSignUp";
import "../../styles/SignInSignUp.scss";

const PatientLogInSignUp = () => (
  <div className="sign-in-and-sign-up">
    <PatientSignIn />
    <PatientSignUp />
  </div>
);

export default PatientLogInSignUp;
