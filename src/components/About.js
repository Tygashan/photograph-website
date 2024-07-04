import React from "react";
import "./About.css";
import zeeshan from "./zeeshan.jpg"
import Footer from "./Footer";
const About = () => {
    return (
        <div>
            <div className="About">
                <div className="about">
                    <h1>Nature lover,</h1>
                    <p>Photography is one of the skills that comes with an adantage when you learn example over sudden you start being tourist simply because you ought to visit new place to get the beauty scenes </p>
                    <p>taking pictures to me its a hobby and i didnt know that it could go on and be a career for me to be bringing food on the table</p>
                    <div className="btn">
                        <button>Explore more</button>
                    </div>
                </div>
                <div className="my-pic">
                    <img src={zeeshan} alt="gallery" height="90%" width="95%"/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About;