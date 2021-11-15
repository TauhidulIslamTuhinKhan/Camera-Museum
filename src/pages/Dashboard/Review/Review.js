import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';
import './Review.css'

const Review = () => {
    const { user } = useAuth()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Review Added Successfully');
                    reset();
                }

            })

        console.log(data);
    }
    return (
        <div className="container review-page">
            <h2>Review</h2>
            <form className="review-form" onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name")} />
                <textarea placeholder="Write somethings about our product" defaultValue="" {...register("coment", { required: true })} />
                <input placeholder="Rating out of 5" defaultValue="" {...register("rating", { required: true })} />
                <input className="bg-primary" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Review;