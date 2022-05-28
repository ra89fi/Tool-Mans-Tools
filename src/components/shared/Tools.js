import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACK_URL}/tools`)
            .then((data) => data.json())
            .then((tools) => setTools(tools))
            .catch((err) => console.log(err.message));
    }, []);
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
