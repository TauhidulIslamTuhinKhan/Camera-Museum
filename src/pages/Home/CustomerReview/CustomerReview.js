import React from 'react';
import Rating from 'react-rating';

const CustomerReview = (props) => {
    const { name, coment, rating } = props.review;
    return (
        <div className="col-lg-4 mb-5">
            <h5>{name}</h5>
            <p>{coment}</p>
            {/* <p>{rating}</p> */}
            <Rating
                initialRating={rating}
                emptySymbol="far fa-star icon-color"
                fullSymbol="fas fa-star icon-color"
                readonly></Rating>

        </div>
    );
};

export default CustomerReview;