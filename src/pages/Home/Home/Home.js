import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Popular from '../Popular/Popular';
import Products from '../Products/Products';
import ReviewSection from '../ReviewSection/ReviewSection';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <Popular></Popular>
            <ReviewSection></ReviewSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;