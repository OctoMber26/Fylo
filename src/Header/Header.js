import React,{Fragment} from "react";
import logo from "../images/logo.svg";
import menu from "../images/menu.png";
import "./Header.css";

const Header = () =>{
    return(
        <Fragment>
<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <img className="logo" src={logo}/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"> <img className="menu" src={menu} /></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">Features</a>
        <a className="nav-link" href="#">Pricing</a>
      </div>
    </div>
  </div>
</nav>
        </Fragment>
    )
}

export default Header;