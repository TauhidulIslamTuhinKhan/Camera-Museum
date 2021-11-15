import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css'

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://powerful-sands-18483.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully');
                    reset();
                }
            })
        // console.log(data);
    }
    return (
        <>
            <div className="container">
                <h2>Add New Product</h2>
            </div>
            <div className="add-product my-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("product", { required: true, maxLength: 20 })} placeholder="Product Name" />
                    <input type="number" {...register("price")} placeholder="Price" />
                    <input {...register("img")} placeholder="Image url" />
                    <textarea {...register("description")} placeholder="description" />
                    <input type="submit" />
                </form>
            </div>
        </>
    );
};

export default AddProduct;