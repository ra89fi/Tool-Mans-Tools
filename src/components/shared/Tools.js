import React from 'react';
import { Link } from 'react-router-dom';

const Tools = () => {
    return (
        <div className="tools">
            {'abcdef'.split('').map((el) => (
                <div className="tool">
                    <img src="/images/tools/Tool1.jpg" alt="" />
                    <div>
                        <h5>Name Tool1</h5>
                        <Link to="/purchase" className="btn btn-secondary">
                            Order Now
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Tools;
