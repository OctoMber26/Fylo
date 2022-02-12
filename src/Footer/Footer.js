import React,{Fragment} from "react";
import logo from "../images/logo.svg";
import email from "../images/icon-email.svg";
import phone from "..//images/icon-phone.svg";
import "./Footer.css";

const Footer = () =>{
    return(
        <Fragment>
            <div className="Footer">
            <img className="footer_logo" src={logo} />
            <img className="email" src={email} />
            <img className="phone" src={phone} />
            <ul className="footer_list">
                <li>About Us</li>
                <li>Contact</li>
                <li>Jobs</li>
                <li>Terms</li>
                <li>Privacy</li>
            </ul>
            </div>
        </Fragment>
    )
}

export default Footer;