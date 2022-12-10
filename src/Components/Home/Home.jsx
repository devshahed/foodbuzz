import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Button from "../Button/Button";
import HomeImage from "../../Assests/images/slide-img.png";
import Drops from "../Drops/Drops";
const Home = () => {
    return (
        <div className="home">
            <Drops />
            <div className="left">
                <h1>Welcome to Our Fruits Shop</h1>
                <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                </p>
                <Link to="/fruits" className="btn-box">
                    <Button text="Shop Now" />
                </Link>
            </div>
            <div className="right">
                <img src={HomeImage} alt="home" />
            </div>
        </div>
    );
};

export default Home;
