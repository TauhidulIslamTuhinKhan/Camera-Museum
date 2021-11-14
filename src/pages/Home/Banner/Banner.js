import React from 'react';

const Banner = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 bg-dark m-0 p-0 d-flex justify-content-center align-items-center flex-column">
                    <h2 className="text-white mb-3">Capture Your <br />Beautiful Moments</h2>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
                <div className="col-lg-6 m-0 p-0">
                    <img className="img-fluid" src="https://i.ibb.co/z87NDYJ/banner-img.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;