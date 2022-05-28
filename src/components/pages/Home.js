import React from 'react';
import Footer from '../shared/Footer';
import Reviews from '../shared/Reviews';
import Summary from '../shared/Summary';
import Tools from '../shared/Tools';

const Home = () => {
    return (
        <div className="homepage">
            <div
                className="banner"
                style={{
                    backgroundImage: `url('/images/banner.jpg')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}
            ></div>
            <h3 style={{ textAlign: 'center' }}>Our Reknowned Tools</h3>
            <Tools />
            <h3 style={{ textAlign: 'center' }}>Our Progress</h3>
            <Summary />
            <h3 style={{ textAlign: 'center' }}>Testimonials</h3>
            <Reviews />
            <Footer />
        </div>
    );
};

export default Home;
