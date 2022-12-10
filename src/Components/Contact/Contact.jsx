import React, { useState } from "react";
import Button from "../Button/Button";
import Drops from "../Drops/Drops";
import "./Contact.css";

const Contact = () => {
    //Handle change
    const [value, setValue] = useState({});
    const valueChanged = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setValue((values) => ({ ...values, [name]: value }));
    };
    //Submit data
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(value); //Form data
        setValue({});
    };
    return (
        <form method="POST" onSubmit={handleSubmit} className="contact-form">
            <Drops />
            <h2>Contact Us</h2>
            <div>
                <input
                    onChange={valueChanged}
                    placeholder="First name"
                    name="fname"
                    type="text"
                    value={value.fname || ""}
                />
                <input
                    onChange={valueChanged}
                    placeholder="Last name"
                    name="lname"
                    type="text"
                    value={value.lname || ""}
                />
            </div>
            <div>
                <input
                    onChange={valueChanged}
                    placeholder="Email"
                    name="email"
                    type="email"
                    value={value.email || ""}
                />
                <input
                    onChange={valueChanged}
                    placeholder="Phone"
                    name="phone"
                    type="text"
                    value={value.phone || ""}
                />
            </div>
            <textarea
                onChange={valueChanged}
                placeholder="Message"
                name="message"
                rows="3"
                value={value.message || ""}
            ></textarea>
            <div className="send-btn">
                <Button text="Send" type="submit" />
            </div>
        </form>
    );
};

export default Contact;
