import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../components/CustomButton";
import FormInput from "../../components/FormInput";
import "../../styles/DoctorPortal.scss";

import "../../styles/SignInSignUp.scss";

class DoctorSignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
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
            <h2 className="sub-title">Doctor Sign Up</h2>
            <span className="sub-title">Please create your account</span>
            <form onSubmit={this.handleSubmit}>
              <FormInput
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
                label="First Name"
                required
              />
              <FormInput
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
                label="Last Name"
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
                <Link className="link" to="/doctorlogin">
                  Log In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default DoctorSignUp;
