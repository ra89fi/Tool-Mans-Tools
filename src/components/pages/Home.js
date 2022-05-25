import React from 'react';
import Footer from '../shared/Footer';
import Reviews from '../shared/Reviews';
import Summary from '../shared/Summary';
import Tools from '../shared/Tools';

const Home = () => {
    return (
        <div className="homepage">
            <div className="banner">
                <div>
                    <h1>Tool Man's Tools</h1>
                </div>
                <img
                    src="https://engineersbible.b-cdn.net/wp-content/uploads/elementor/thumbs/physical-engineer-tools-owd7dyisu89h7n11x0cx8prytt0kkmpqn1c0nuuiby.png"
                    alt=""
                />
            </div>
            <h3 style={{ textAlign: 'center' }}>Our Reknowned Tools</h3>
            <Tools />
            <Summary />
            <Reviews />
            <Footer />
        </div>
    );
};

export default Home;
