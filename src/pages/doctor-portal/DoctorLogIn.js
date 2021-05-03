import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../components/CustomButton";
import FormInput from "../../components/FormInput";
import "../../styles/DoctorPortal.scss";
import "../../styles/SignInSignUp.scss";

class DoctorLogIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
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
            <h2 className="sub-title">Doctor's Sign In</h2>
            <span className="sub-title">
              Please log in with your credentials
            </span>
            <form onSubmit={this.handleSubmit}>
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
              <div className="buttons">
                <CustomButton type="submit"> Sign in </CustomButton>
                <CustomButton type="submit"> Forgot Password </CustomButton>
              </div>
              <p className="account">
                Don't have an account?{" "}
                <Link className="link" to="/doctorsignup">
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default DoctorLogIn;
