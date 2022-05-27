import React from 'react';

const reviews = [
    {
        _id: 1,
        name: 'Mary Jane',
        review: 'Incidunt deleniti blanditiis quas aperiam recusandae consequatur ullam quibusdam cum libero illo rerum repellendus!',
        image: '/images/user.jpg',
    },
];

const Reviews = () => {
    return (
        <div className="reviews">
            {reviews.map((el) => (
                <div className="review" key={el._id}>
                    <img
                        src={el.image}
                        alt=""
                        style={{ float: 'left', marginRight: '20px' }}
                    />
                    <p>{el.review}</p>
                    <p style={{ textAlign: 'right' }}>- {el.name}</p>
                </div>
            ))}
        </div>
    );
};

export default Reviews;
