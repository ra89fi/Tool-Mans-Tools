import React, { useState, useEffect } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACK_URL}/reviews`)
            .then((data) => data.json())
            .then((reviews) => setReviews(reviews))
            .catch((err) => console.log(err.message));
    }, []);
    return (
        <div className="reviews">
            {reviews.map((el) => (
                <div className="review" key={el._id}>
                    <img
                        src={el.image.length || '/images/user.jpg'}
                        alt=""
                        style={{ float: 'left', marginRight: '20px' }}
                    />
                    <p>{el.review}</p>
                    <p style={{ textAlign: 'right' }}>
                        {el.rating} <em>by</em> {el.name}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Reviews;
