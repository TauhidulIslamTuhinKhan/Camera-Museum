import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark py-5">
            <div className="container text-white">
                <div className="row">
                    <div className="col-lg-3">
                        <h4>About Us</h4>
                        <p>A camera is an optical instrument that captures a visual image. At a basic level, cameras are sealed boxes with a small hole that allows light through to capture an image on a light-sensitive surface.</p>
                        <h4>Follow Us</h4>
                    </div>
                    <div className="col-lg-3">
                        <h4>Information</h4>
                        <p>About us</p>
                        <p>Services</p>
                        <p>Privacy policy</p>
                    </div>
                    <div className="col-lg-3">
                        <h4>My Account</h4>
                        <p>My account</p>
                        <p>Cart</p>
                        <p>Validation</p>
                    </div>
                    <div className="col-lg-3">
                        <h4>Get In Touch</h4>
                        <p>Address</p>
                        <p>Phone</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;