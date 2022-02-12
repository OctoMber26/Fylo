import React,{Fragment, useState} from "react";
import "./Register.css";

const Register =() =>{
    const[input, setInput]= useState();

    const ValidInput= (event) =>{
        setInput(event.target.value)
    }

    return(
        <Fragment>
            <div className="register">
                <p className="ready">Get early access today</p>
                <div className="input_section">
                    <input 
                    value={input}
                    type="email"
                    placeholder="enter your email"
                    onChange={ValidInput}
                    />
                    <button className="start">GET STARTED FOR FREE</button>
                </div>
            </div>
        </Fragment>
    )
}

export default Register;