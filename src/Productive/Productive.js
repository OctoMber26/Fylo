import React, {Fragment} from "react";
import stay_productive from "../images/illustration-stay-productive.png";
import "./Productive.css";
import arrow from "../images/icon-arrow.svg"

const Productive = (props)=>{
    return(
        <Fragment>
         <div className="productive">
             <img className="productive_team" src={stay_productive} />
             <div className="about_productive">
             <h2>Stay productive!</h2>
             <p className="productive_description">Let us do the work but be carefoul to not let your location discovered! Fylo has you covered all the time.
                 Securely share files, we will crypt your location and api keys.
             </p>
             <span onClick={props.ShowReviews}>See some reviews <img className="span_icon" src={arrow} /></span>
             </div>
         </div>
        </Fragment>
    )
}

export default Productive;