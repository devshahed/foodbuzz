import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Orange from "../../Assests/images/orange.png";
import Drops from "../Drops/Drops";
import "./Fruits.css";
import { v4 as uuidv4 } from "uuid";

const Fruits = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData([
            {
                id: uuidv4(),
                title: "Title",
                desc: "desc",
                price: "20$",
            },
            {
                id: uuidv4(),
                title: "Title",
                desc: "desc",
                price: "20$",
            },
            {
                id: uuidv4(),
                title: "Title",
                desc: "desc",
                price: "20$",
            },
            {
                id: uuidv4(),
                title: "Title",
                desc: "desc",
                price: "20$",
            },
            {
                id: uuidv4(),
                title: "Title",
                desc: "desc",
                price: "20$",
            },
            {
                id: uuidv4(),
                title: "Title",
                desc: "desc",
                price: "20$",
            },
            {
                id: uuidv4(),
                title: "Title",
                desc: "desc",
                price: "20$",
            },
            {
                id: uuidv4(),
                title: "Title",
                desc: "desc",
                price: "20$",
            },
            {
                id: uuidv4(),
                title: "Title",
                desc: "desc",
                price: "20$",
            },
            {
                id: uuidv4(),
                title: "Title",
                desc: "desc",
                price: "20$",
            },
            {
                id: uuidv4(),
                title: "Title",
                desc: "desc",
                price: "20$",
            },
            {
                id: uuidv4(),
                title: "Title",
                desc: "desc",
                price: "20$",
            },
            {
                id: uuidv4(),
                title: "Title",
                desc: "desc",
                price: "20$",
            },
            {
                id: uuidv4(),
                title: "Title",
                desc: "desc",
                price: "20$",
            },
            {
                id: uuidv4(),
                title: "Title",
                desc: "desc",
                price: "20$",
            },
            {
                id: uuidv4(),
                title: "Title",
                desc: "desc",
                price: "20$",
            },
            {
                id: uuidv4(),
                title: "Title",
                desc: "desc",
                price: "20$",
            },
        ]);
    }, []);
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
                {data.map((fruits) => (
                    <div key={fruits.id} className="fruit-card">
                        <h4>{fruits.title}</h4>
                        <p>{fruits.desc}</p>
                        <img src={Orange} alt="cardImg" />
                        <div className="card-footer">
                            <span>{fruits.price}</span>
                            <Link to="/cart">
                                <Button text="Buy" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Fruits;
