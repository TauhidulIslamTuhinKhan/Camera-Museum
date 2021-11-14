import React, { useEffect, useState } from 'react';
import AllProduct from '../AllProduct/AllProduct';
import Navigation from '../Shared/Navigation/Navigation';


const AllProducts = () => {
    const [allProducts, setAllProducs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setAllProducs(data))
    }, [])
    return (
        <>
            <Navigation></Navigation>
            <div className="container my-5">
                <div className="row">
                    {
                        allProducts.map(allProduct => <AllProduct
                            key={allProduct._id}
                            allProduct={allProduct}
                        ></AllProduct>)
                    }
                </div>
            </div>
        </>
    );
};

export default AllProducts;