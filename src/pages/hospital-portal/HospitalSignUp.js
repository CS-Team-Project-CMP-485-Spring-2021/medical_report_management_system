import React from "react";
import { Link } from "react-router-dom";

import CustomButton from "../../components/CustomButton";
import FormInput from "../../components/FormInput";
import "../../styles/DoctorPortal.scss";

import "../../styles/SignInSignUp.scss";

class HospitalSignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nameOfHospital: "",
      adminFullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "", confirmPassword: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <div className="admin-login-page">
          <div className="login-page-form-container">
            <h2 className="sub-title">Hospital Admin Sign Up</h2>
            <span className="sub-title">Please create your account</span>
            <form onSubmit={this.handleSubmit}>
              <FormInput
                type="text"
                name="nameOfHospital"
                value={this.state.nameOfHospital}
                onChange={this.handleChange}
                label="Name of Hospital"
                required
              />
              <FormInput
                type="text"
                name="adminFullName"
                value={this.state.adminFullName}
                onChange={this.handleChange}
                label="Hospital Admin's Full Name "
                required
              />
              <FormInput
                type="email"
                value={this.state.email}
                name="email"
                onChange={this.handleChange}
                id="email"
                label="Email"
                required
              />
              <FormInput
                type="password"
                value={this.state.password}
                name="password"
                onChange={this.handleChange}
                id="password"
                label="Password"
                required
              />
              <FormInput
                type="password"
                name="confirmPassword"
                value={this.state.confirmPassword}
                onChange={this.handleChange}
                label="Confirm Password"
                required
              />
              <div className="buttons">
                <CustomButton type="submit"> Sign Up </CustomButton>
              </div>
              <p className="account">
                Already have an account?{" "}
                <Link className="link" to="/hospitallogin">
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default HospitalSignUp;
