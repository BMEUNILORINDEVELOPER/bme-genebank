import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../navbar.css";
import bmegenebank from "../images/BME GENEBANK.png";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [showTimesIcon, setShowTimesIcon] = useState(false);
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    setShowTimesIcon(!showTimesIcon);
  };

  return (
    <nav className="nav">
      <Link to="/" className="nav__brand">
        <img className="bmegenebankimage" src={bmegenebank} alt="bmegenebank" />
      </Link>
      <ul className={active}>
        <li className="nav__item">
          <Link to="/" className="nav__link">
            Home
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/research" className="nav__link">
            Research
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/our-publications" className="nav__link">
            Publication
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/who-we-are" className="nav__link">
            About
          </Link>
           <div className="extension">
           <i className="fas fa-angle-down px10 ffi mg-3"></i>
           <div className="nav-extentions">
            <div className="my-col-10 off-1 down-8">
              <Link to="/who-we-are">
                <div className="ex-links">Who We Are</div>
              </Link>
              <Link to="/our-team">
                <div className="ex-links">Our Team</div>
              </Link>

            </div>

           </div>

           </div>
        </li>
      </ul>
      <div onClick={navToggle} className="nav__toggler">
        {showTimesIcon ? <FaTimes className="menu-icon" /> : <FaBars className="menu-icon" />}
      </div>
    </nav>
  );
}

export default Navbar;
