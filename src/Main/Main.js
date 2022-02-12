import React, {Fragment, useEffect} from "react";
import "./Main.css";
import products from "../productsData";
import Service from "./Service";
import Aos from "aos";
import "aos/dist/aos.css";

const Main =() =>{
    useEffect(()=>{
        Aos.init({duration: 2000})
        }, [])
    return(
        <Fragment>
            <div data-aos="fade-up" className="main">
                {products.map((service)=>(
                    <Service key={service.id} service={service} />
                ))}
            </div>
           
        </Fragment>
    )
}

export default Main;