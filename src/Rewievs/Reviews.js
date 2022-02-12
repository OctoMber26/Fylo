import React, {Fragment, useEffect} from "react";
import profile_1 from "../images/profile-1.jpg";
import profile_2 from "../images/profile-2.jpg";
import profile_3 from "../images/profile-3.jpg";
import quotes from "../images/bg-quotes.png";
import "./Reviews.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Reviews =() =>{
    useEffect(()=>{
        Aos.init({duration: 2000})
        }, [])

    return(
        <Fragment>
            <img className="quotes_up" src={ quotes} />
            <div data-aos="flip-left" className="rewievs">
                <div className="Satish">
                    <p className="rewies">Fylo has improoved our team activity bi 50% and this improovment managed to switch our team as a well-olled colab machine!</p>
                    <img className="ceos" src={profile_1} />
                    <h3 className="ceos_name">Satish Patel</h3>
                    <p className="status">Founder and CEO</p>
                </div>
                <div className="Bruce">
                    <p className="rewies">Fylo has improoved our team activity bi 50% and this improovment managed to switch our team as a well-olled colab machine!</p>
                    <img className="ceos" src={profile_2} />
                    <h3 className="ceos_name">Bruce McKenzie</h3>
                    <p className="status">Founder and CEO</p>
                </div>
                <div className="Iva">
                    <p className="rewies">Fylo has improoved our team activity bi 50% and this improovment managed to switch our team as a well-olled colab machine!</p>
                    <img className="ceos" src={profile_3} />
                    <h3 className="ceos_name">Iva Boyd</h3>
                    <p className="status">Founder and CEO</p>
                </div>
            </div>
            <img className="quotes_down" src={ quotes} />
        </Fragment>
    )
}

export default Reviews;