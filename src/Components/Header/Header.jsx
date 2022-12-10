import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assests/images/logo.png";
import Button from "../Button/Button";
import ThemeToggle from "../../Assests/mode.svg";
import "./Header.css";
import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <div className="header">
            <Link className="logo" to="/">
                <img src={Logo} alt="logo" />
                <h3>FoodBuzz</h3>
            </Link>
            <ul className="nav">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/fruits">Fruits</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact Us</NavLink>
                </li>
            </ul>
            <div className="about">
                <Button text="Get A Quote" />
            </div>
        </div>
    );
};

export default Header;
