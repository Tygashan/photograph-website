import React, { useState } from "react";
import "./Contact.css";
import Footer from "./Footer";


export default function Contact() {
    const [textarea, setTextarea] = useState('');

    const handTextarea = (e) => {
        setTextarea(e.target.value);
    }
    const ClearOutPuts = (event) => {
        Array.from(event.target).forEach((e) => e.value = "");
    }
    const handlesubmit = (event) => {
        event.preventDefault();
        ClearOutPuts(event);
        setTextarea('');
        console.log(textarea)
    }
    return (
        <div>
            <div className="Zeeshan">
                <br></br>
                <h3 style={{ fontSize: '1rem', }}>Contact us:</h3>
                <p>for any enquries or question that you would need assistance do not be afraid to ask</p>
                <br></br>
                <div id="entire-contact">
                    <div id="Contact">
                        <form onSubmit={handlesubmit}>
                            <div className="first">
                                <label htmlFor="Name"><h4>NAME</h4></label>
                                <input type="text" id="name"></input>
                                <label htmlFor="email address"><h4>EMAIL</h4></label>
                                <input type="text" id="email"></input>

                            </div>
                            <br></br>
                            <h4>MESSAGE</h4>
                            <textarea value={textarea} onChange={handTextarea}></textarea>
                            <br></br>
                            <button type="submit">Submit</button>
                            <br></br>
                        </form>
                    </div>
                    <div className="contact-">
                        <h4>EMAIL</h4>
                        <p>saisizeeshan990@gmail.com</p>
                        <h4>TELEPHONE</h4>
                        <p>+254798684649</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
