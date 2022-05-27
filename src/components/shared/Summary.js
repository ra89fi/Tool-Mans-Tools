import React from 'react';

const Summary = () => {
    return (
        <div className="summary">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">100+</h5>
                    <p>Customers Served</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">120M+</h5>
                    <p>Annual Revenue</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">33K+</h5>
                    <p>Reviews</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">50+</h5>
                    <p>Tools</p>
                </div>
            </div>
        </div>
    );
};

export default Summary;
