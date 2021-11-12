import React from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Faq from '../Faq/Faq';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';
import ReviewShow from '../ReviewShow/ReviewShow';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <ReviewShow></ReviewShow>
            <Faq></Faq>
            <Footer></Footer>
        </div>
    );
};

export default Home;