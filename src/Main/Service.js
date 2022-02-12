import React,{Fragment} from "react";
import "./Service.css";

const Service =(props) =>{
    return(
        <Fragment>
           <div className="services">
               <img className="service_image" src={props.service.image} />
               <h2 className="service_title">{props.service.name}</h2>
               <p className="service_description">{props.service.description}</p>
           </div>
        </Fragment>
    )
}

export default Service;