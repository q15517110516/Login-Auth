import React, { Component } from "react";
import { NavLink } from "react-router-dom";


class Landing extends Component {
    render() {
        return (
        <div className="container">
            <h1>Welcome!</h1>
            <div className="registerBtn" style={{marginBottom: "20px"}}>
                <NavLink to="/register" style={{ borderRadius: "3px", letterSpacing: "1.5px"}}>
                    <button type="button" className="btn btn-primary" style={{ width: "140px", height: "50px", fontSize: "20px"}}>Register</button>
                    
                </NavLink>
            </div>
            <div className="loginBtn">
                <NavLink to="/login" style={{ borderRadius: "3px", letterSpacing: "1.5px"}}>
                    <button type="button" className="btn btn-light" style={{ width: "140px", height: "50px", fontSize: "20px"}}>Log In</button>
                </NavLink>
            </div>
        </div>
        );
    }
}
export default Landing;