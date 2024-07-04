import React from "react";
import"./Footer.css";

const Footer = () => {
    return(
        <div className="footer">


            <div className="icon">
                <a href="/"><i class="fa-solid fa-user">Home</i></a>
                <a href="#about"><i class="fa-solid fa-address-card">About</i></a>
                <a href="#gallery"><i class="fa-brands fa-servicestack"></i>Gallery</a>
                <a href="#service"><i class="fa-duotone fa-comments"></i>Service</a>
                <a href="#contact"><i class="fa-duotone fa-phone-volume"></i>Contact</a>

            </div>
        </div>
    )
}

export default Footer;