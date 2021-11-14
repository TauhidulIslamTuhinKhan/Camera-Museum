import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';
import './Login.css'

const Login = () => {
    const [loginData, setLoginData] = useState({});


    const { user, loginUser, loading, error } = useAuth();

    const location = useLocation()
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault()
    }

    return (
        <div>
            <Navigation></Navigation>
            <h2>Please Login</h2>
            <div className="container login-page">
                <form onSubmit={handleLoginSubmit}>
                    <input onBlur={handleOnBlur} type="email" name="email" placeholder="Your Email" />
                    <br />
                    <input onBlur={handleOnBlur} type="password" name="password" placeholder="Your Password" />
                    <br />
                    <input type="submit" value="Login" />
                </form>
                {loading && <Spinner animation="grow" />}
                {user?.email && <p>Login Successfully</p>}
                {error && <p> {error} </p>}
                <p>New to Nobarun Camera Museum? <Link to="/register">Create Account</Link></p>
            </div>
        </div>
    );
};

export default Login;