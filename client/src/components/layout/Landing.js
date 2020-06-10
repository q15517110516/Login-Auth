import React, { Component } from "react";
import { NavLink } from "react-router-dom";


class Landing extends Component {
    render() {
        return (
        <div className="container">
            <NavLink to="/register" style={{ width: "140px", borderRadius: "3px", letterSpacing: "1.5px" }}>
                <button type="button" className="btn btn-primary">Register</button>
                
            </NavLink>
            <NavLink to="/login" style={{ width: "140px", borderRadius: "3px", letterSpacing: "1.5px" }}>
                <button type="button" className="btn btn-light">Log In</button>
            </NavLink>
        </div>
        );
    }
}
export default Landing;