import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import './Style.css';



export class Login extends Component {
    constructor(){
        super();
        this.state = {
            email: "",
            password: "",
            errors: {},
        };
    }

    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
          this.props.history.push("/dashboard"); // push user to dashboard when they login
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
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
        this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
    };

    render() {

        const { errors } = this.state;

        return (
            <div className="container">
            <div className="back">
                <NavLink to="/" >
                    <i><KeyboardBackspaceIcon/></i>Back to Home
                </NavLink>
            </div>
            <div className="registerform">
                <h3>Login</h3>
                <p style={{fontSize: "20px"}}>Don't have an account?<NavLink to="/register" style={{marginLeft: "10px"}}>Register</NavLink></p>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <span className="red-text">
                            {errors.email}
                            {errors.emailnotfound}
                        </span>
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
                        <span className="red-text">
                            {errors.password}
                            {errors.passwordincorrect}
                        </span>
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


const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(
    mapStateToProps,
    { loginUser }
)(Login);
