import React from "react";

import FormInput from "./FormInput";
import CustomButton from "./CustomButton";

import "../styles/SignInSignUp.scss";

class PatientSignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      nameOfHospital: "",
      nameOfDoctor: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      nameOfHospital,
      nameOfDoctor,
    } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">PATIENT SIGN UP</h2>
        <span>Sign up with a valid email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="firstName"
            value={firstName}
            onChange={this.handleChange}
            label="First Name"
            required
          />
          <FormInput
            type="text"
            name="lastName"
            value={lastName}
            onChange={this.handleChange}
            label="Last Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <FormInput
            type="text"
            name="nameOfHospital"
            value={nameOfHospital}
            onChange={this.handleChange}
            label="Name of Hospital"
            required
          />
          <FormInput
            type="text"
            name="nameOfDoctor"
            value={nameOfDoctor}
            onChange={this.handleChange}
            label="Name of Doctor"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default PatientSignUp;
