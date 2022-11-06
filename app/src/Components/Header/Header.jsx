import React from "react";
import './Header.scss'
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
    <h1>Bekzod.uz</h1>
    
    <ul>
      <li>
        <Link to="/" className="link">Home</Link>
      </li>
      <li>
        <Link to="" className="link"></Link>
      </li>
      <li>
        <Link to="" className="link"></Link>
      </li>
      <li>
        <Link to="" className="link"></Link>
      </li>
      <li>
        <Link to="form" className="link">Form</Link>
      </li>
    </ul></div>
  );
};

export default Header;
