import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Login extends Component {
    constructor(){
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }

    onChange = e => {
        this.setState({ 
            [e.target.id]: e.target.value 
        });
    };

    onSubmit = e => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        console.log(userData);
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
                <h4>Login</h4>
                <NavLink to="/login">Don't have an account?</NavLink>
                <form onSubmit={this.onSubmit}>
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
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
            
        </div>
        )
    }
}

export default Login
