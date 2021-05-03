import React from "react";
import { Link } from "react-router-dom";
import mdlogo from "../assets/mdblockchain.jpeg";
import "../styles/Header.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link to="/">
      <img className="logo" src={mdlogo} alt="logo" />{" "}
    </Link>
    <div className="options">
      <Link className="option" to="/">
        PATIENT PORTAL
      </Link>
      <Link className="option" to="/hospitallogin">
        HOSPITAL PORTAL
      </Link>
      <Link className="option" to="/doctorlogin">
        DOCTOR PORTAL
      </Link>
    </div>
  </div>
);

export default Header;
