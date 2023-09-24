import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
export const Header = () => {

    const [btnName, setBtnName] = useState("Login")

    return(
        <>
        <div class="container">
            <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            {/* <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg> */}
                <span class="fs-4"><img className="logo" src={LOGO_URL} /></span>
            </a>

      <ul class="nav nav-pills">
        <li class="nav-item"><Link to="/" class="nav-link active" aria-current="page">Home</Link></li>
        <li class="nav-item"><Link to="about" class="nav-link">About us</Link></li>
        <li class="nav-item"><Link to="contact" class="nav-link">Contact</Link></li>
        <button type="button" class="btn btn-light text-dark me-2" onClick={()=>{
                    btnName === 'Login' ? setBtnName("LogOut") : setBtnName("Login")
                }}>{btnName}</button>
      </ul>
            </header>
        </div>
        
        </>
    )
}

//export default Header;