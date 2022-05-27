import React from 'react';
import { Link } from 'react-router-dom';
const tools = [
    {
        _id: 1,
        name: 'Axe',
        image: '/images/tools/Axe.jpg',
        description: '',
        minOrder: 2,
        available: 24,
        price: 13.99,
    },
];
const Tools = () => {
    return (
        <div className="tools">
            {tools.map((el) => (
                <div className="tool" key={el._id}>
                    <img src={el.image} alt={el.name} />
                    <div>
                        <h5>{el.name}</h5>
                        <p>Price: ${el.price}</p>
                        <p>Minimum Order: {el.minOrder}</p>
                        <p>Available: {el.available}</p>
                        <Link
                            to={`/purchase/${el._id}`}
                            className="btn btn-secondary"
                        >
                            Order Now
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Tools;
