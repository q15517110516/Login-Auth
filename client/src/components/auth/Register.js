import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import connect from 'react-redux/lib/connect/connect';
import mapStateToProps from 'react-redux/lib/connect/mapStateToProps';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { registerUser } from '../../actions/authActions';

export class Register extends Component {
    constructor(){
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        };
    }

    // registerUser = (userData, history) => {
    //     axios.post("/api/users/register", userData)
    //         .then(res => history.push("/login"))
    //         .catch(err => console.log(err));
    // };


    onChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();
        
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }

        // this.props.registerUser(newUser, this.props.history); 
    };



    render() {

        const { errors } = this.state;

        return (
            <div className="container">
                <div className="back">
                    <NavLink to="/" >
                        <i className="material-icons">keyboard_backspace</i>Back to Home
                    </NavLink>
                </div>
                <div className="registerform">
                    <h4>Register</h4>
                    <p>Alreay have an account?<NavLink to="/login">Login</NavLink></p>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <input id="name"
                                type="text" 
                                className="form-control" 
                                placeholder="Name" 
                                onChange={this.onChange} 
                                value={this.state.name} 
                                error={errors.name}/>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input id="email"
                                type="email" 
                                className="form-control" 
                                placeholder="Email"
                                onChange={this.onChange} 
                                value={this.state.email} 
                                error={errors.email}/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input id="password"
                                type="password" 
                                className="form-control" 
                                placeholder="Password"
                                onChange={this.onChange} 
                                value={this.state.password} 
                                error={errors.password}/>
                        </div>
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input id="password2"
                                type="password" 
                                className="form-control" 
                                placeholder="Confirm Password"
                                onChange={this.onChange} 
                                value={this.state.password2} 
                                error={errors.password2}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                    </form>
                </div>
                
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(Register));
