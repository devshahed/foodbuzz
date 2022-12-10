import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Orange from "../../Assests/images/orange.png";
import Drops from "../Drops/Drops";
import "./Fruits.css";

const Fruits = () => {
    return (
        <div className="fruits">
            <Drops />
            <div className="fruits-header">
                <h2>Fresh Fruits</h2>
                <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have
                </p>
            </div>
            <div className="fruit-cards">
                <div className="fruit-card">
                    <h4>Best Fresh Orange</h4>
                    <p>
                        but the majority have suffered alteration in some form,
                        by injected humour, or randomised words which don't look
                        even slightly believable. If you are going to use a
                        passage of Lorem Ipsum, you need to be
                    </p>
                    <img src={Orange} alt="cardImg" />
                    <div className="card-footer">
                        <span>27$</span>
                        <Link to="/cart">
                            <Button text="Buy" />
                        </Link>
                    </div>
                </div>
                <div className="fruit-card">
                    <h4>Best Fresh Orange</h4>
                    <p>
                        but the majority have suffered alteration in some form,
                        by injected humour, or randomised words which don't look
                        even slightly believable. If you are going to use a
                        passage of Lorem Ipsum, you need to be
                    </p>
                    <img src={Orange} alt="cardImg" />
                    <div className="card-footer">
                        <span>27$</span>
                        <Link to="/cart">
                            <Button text="Buy" />
                        </Link>
                    </div>
                </div>
                <div className="fruit-card">
                    <h4>Best Fresh Orange</h4>
                    <p>
                        but the majority have suffered alteration in some form,
                        by injected humour, or randomised words which don't look
                        even slightly believable. If you are going to use a
                        passage of Lorem Ipsum, you need to be
                    </p>
                    <img src={Orange} alt="cardImg" />
                    <div className="card-footer">
                        <span>27$</span>
                        <Link to="/cart">
                            <Button text="Buy" />
                        </Link>
                    </div>
                </div>
                <div className="fruit-card">
                    <h4>Best Fresh Orange</h4>
                    <p>
                        but the majority have suffered alteration in some form,
                        by injected humour, or randomised words which don't look
                        even slightly believable. If you are going to use a
                        passage of Lorem Ipsum, you need to be
                    </p>
                    <img src={Orange} alt="cardImg" />
                    <div className="card-footer">
                        <span>27$</span>
                        <Link to="/cart">
                            <Button text="Buy" />
                        </Link>
                    </div>
                </div>
                <div className="fruit-card">
                    <h4>Best Fresh Orange</h4>
                    <p>
                        but the majority have suffered alteration in some form,
                        by injected humour, or randomised words which don't look
                        even slightly believable. If you are going to use a
                        passage of Lorem Ipsum, you need to be
                    </p>
                    <img src={Orange} alt="cardImg" />
                    <div className="card-footer">
                        <span>27$</span>
                        <Link to="/cart">
                            <Button text="Buy" />
                        </Link>
                    </div>
                </div>
                <div className="fruit-card">
                    <h4>Best Fresh Orange</h4>
                    <p>
                        but the majority have suffered alteration in some form,
                        by injected humour, or randomised words which don't look
                        even slightly believable. If you are going to use a
                        passage of Lorem Ipsum, you need to be
                    </p>
                    <img src={Orange} alt="cardImg" />
                    <div className="card-footer">
                        <span>27$</span>
                        <Link to="/cart">
                            <Button text="Buy" />
                        </Link>
                    </div>
                </div>
                <div className="fruit-card">
                    <h4>Best Fresh Orange</h4>
                    <p>
                        but the majority have suffered alteration in some form,
                        by injected humour, or randomised words which don't look
                        even slightly believable. If you are going to use a
                        passage of Lorem Ipsum, you need to be
                    </p>
                    <img src={Orange} alt="cardImg" />
                    <div className="card-footer">
                        <span>27$</span>
                        <Link to="/cart">
                            <Button text="Buy" />
                        </Link>
                    </div>
                </div>
                <div className="fruit-card">
                    <h4>Best Fresh Orange</h4>
                    <p>
                        but the majority have suffered alteration in some form,
                        by injected humour, or randomised words which don't look
                        even slightly believable. If you are going to use a
                        passage of Lorem Ipsum, you need to be
                    </p>
                    <img src={Orange} alt="cardImg" />
                    <div className="card-footer">
                        <span>27$</span>
                        <Link to="/cart">
                            <Button text="Buy" />
                        </Link>
                    </div>
                </div>
                <div className="fruit-card">
                    <h4>Best Fresh Orange</h4>
                    <p>
                        but the majority have suffered alteration in some form,
                        by injected humour, or randomised words which don't look
                        even slightly believable. If you are going to use a
                        passage of Lorem Ipsum, you need to be
                    </p>
                    <img src={Orange} alt="cardImg" />
                    <div className="card-footer">
                        <span>27$</span>
                        <Link to="/cart">
                            <Button text="Buy" />
                        </Link>
                    </div>
                </div>
                <div className="fruit-card">
                    <h4>Best Fresh Orange</h4>
                    <p>
                        but the majority have suffered alteration in some form,
                        by injected humour, or randomised words which don't look
                        even slightly believable. If you are going to use a
                        passage of Lorem Ipsum, you need to be
                    </p>
                    <img src={Orange} alt="cardImg" />
                    <div className="card-footer">
                        <span>27$</span>
                        <Link to="/cart">
                            <Button text="Buy" />
                        </Link>
                    </div>
                </div>
                <div className="fruit-card">
                    <h4>Best Fresh Orange</h4>
                    <p>
                        but the majority have suffered alteration in some form,
                        by injected humour, or randomised words which don't look
                        even slightly believable. If you are going to use a
                        passage of Lorem Ipsum, you need to be
                    </p>
                    <img src={Orange} alt="cardImg" />
                    <div className="card-footer">
                        <span>27$</span>
                        <Link to="/cart">
                            <Button text="Buy" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fruits;
