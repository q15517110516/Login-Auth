import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ud from './UDEL.jpg';


class Navbar extends Component {
    render() {
        return (
        <div>
            <nav className="navbar navbar-light">
                <NavLink className="navbar-brand" to="/" >
                    <img src={ud} width={100} height={100} alt="ud-logo"/>
                </NavLink>
                
            </nav>

        </div>
        );
    }
}
export default Navbar;