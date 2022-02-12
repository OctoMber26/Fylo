import React, {Fragment, useState, useEffect} from "react";
import "./Intro.css";
import intro from "../images/illustration-intro.png";
import Main from "../Main/Main";
import Productive from "../Productive/Productive";
import Reviews from "../Rewievs/Reviews";
import Register from "../Register/Register";
import Footer from "../Footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
 
const Intro= () =>{
    useEffect(()=>{
        Aos.init({duration: 2000})
        }, [])

    const [showReviews, setShowReviews]= useState(false);

    const ShowReviews=() =>{
        setShowReviews(true)
    } 

    return(
        <Fragment>
       <div className="intro">
           <img className="intro-img" src={intro} />
           <h1  data-aos="fade-right" className="title">All your files in one secure location, accessible enywhere.</h1>
           <p  data-aos="fade-right" className="about">While large nationwide super stores carry clothing, housewares, and food products, Woodman's is solely focused on providing the widest variety of grocery items at the best prices.</p>
           <button  data-aos="fade-right" type="button" className="btn">Get started</button>
           <Main />
           <Productive 
           ShowReviews={ShowReviews}
           />
           {showReviews &&<Reviews />}
           <Register />
       </div>
       <Footer />
        </Fragment>
    )
}

export default Intro;