import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import PatientLogInSignUp from "./pages/patient-portal/PatientLogInSignUp";
import DoctorLogIn from "./pages/doctor-portal/DoctorLogIn";
import DoctorSignUp from "./pages/doctor-portal/DoctorSignUp";
import HospitalLogIn from "./pages/hospital-portal/HospitalLogIn";
import HospitalSignUp from "./pages/hospital-portal/HospitalSignUp";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={PatientLogInSignUp} />
          <Route path="/doctorlogin" component={DoctorLogIn} />
          <Route path="/hospitallogin" component={HospitalLogIn} />
          <Route path="/hospitalsignup" component={HospitalSignUp} />
          <Route path="/doctorsignup" component={DoctorSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
