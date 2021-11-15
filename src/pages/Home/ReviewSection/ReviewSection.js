import React, { useEffect, useState } from 'react';
import CustomerReview from '../CustomerReview/CustomerReview';

const ReviewSection = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://powerful-sands-18483.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="container">
            <h2 className="my-5">Client Reviews</h2>
            <div className="row">
                {
                    reviews.map(review => <CustomerReview
                        key={review._id}
                        review={review}
                    ></CustomerReview>)

                }
            </div>
        </div>
    );
};

export default ReviewSection;