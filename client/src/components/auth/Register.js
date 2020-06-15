import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import './Style.css';




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

    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    };


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

        this.props.registerUser(newUser, this.props.history); 
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
                    <h3>Register</h3>
                    <p style={{fontSize: "20px"}}>Alreay have an account?<NavLink to="/login" style={{marginLeft: "10px"}}>Login</NavLink></p>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <span className="red-text">{errors.name}</span>
                            <input id="name"
                                type="text" 
                                className="form-control" 
                                placeholder="Name" 
                                onChange={this.onChange} 
                                value={this.state.name} 
                                error={errors.name}
                                />
                                
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <span className="red-text">{errors.email}</span>
                            <input id="email"
                                type="email" 
                                className="form-control" 
                                placeholder="Email"
                                onChange={this.onChange} 
                                value={this.state.email} 
                                error={errors.email}
                                />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <span className="red-text">{errors.password}</span>
                            <input id="password"
                                type="password" 
                                className="form-control" 
                                placeholder="Password"
                                onChange={this.onChange} 
                                value={this.state.password} 
                                error={errors.password}
                                />
                        </div>
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <span className="red-text">{errors.password2}</span>
                            <input id="password2"
                                type="password" 
                                className="form-control" 
                                placeholder="Confirm Password"
                                onChange={this.onChange} 
                                value={this.state.password2} 
                                error={errors.password2}
                                />
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
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
    { registerUser }
)(withRouter(Register));
