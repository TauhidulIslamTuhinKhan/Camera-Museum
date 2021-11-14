import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { useHistory } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const [loginData, setLoginData] = useState({});

    const history = useHistory()

    const { user, registerUser, loading, error } = useAuth();


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not Matched');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);

        e.preventDefault();
    }

    return (
        <div className="container">
            <h4 className="text-center">Please Register</h4>
            <div className="container register-page">
                {!loading && <form onSubmit={handleLoginSubmit}>
                    <input onBlur={handleOnBlur} type="text" name="name" placeholder="Your name" />
                    <br />
                    <input onBlur={handleOnBlur} type="email" name="email" placeholder="Your Email" />
                    <br />
                    <input onBlur={handleOnBlur} type="password" name="password" placeholder="Your Password" />
                    <br />
                    <input onBlur={handleOnBlur} type="password" name="password2" placeholder="Confirm Password" />
                    <br />
                    <input type="submit" value="Register" />
                </form>}
                {loading && <Spinner animation="grow" />}
                {user?.email && <p>Account Created Successfully</p>}
                {error && <p> {error} </p>}
                <p>Already have an Account? <Link to="/login">Please Login</Link></p>
            </div>
        </div>
    );
};

export default Register;