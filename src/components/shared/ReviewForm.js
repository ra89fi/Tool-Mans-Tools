import React, { useRef, useState } from 'react';

const ReviewForm = ({ user }) => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const onReviewSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        formRef.current.submit.disabled = true;
        setLoading(true);
        const data = {
            name: user.displayName || 'Anonymous',
            review: formRef.current.review.value,
            rating: formRef.current.rating.value,
            image: user.photoURL || '',
        };
        fetch(`${process.env.REACT_APP_BACK_URL}/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((data) => data.json())
            .then((result) => {
                console.log(result);
                if (result.message === 'ok') {
                    e.target.reset();
                }
            })
            .catch((err) => setError(err))
            .finally(() => {
                formRef.current.submit.disabled = false;
                setLoading(false);
            });
    };
    const formRef = useRef();
    return (
        <div style={{ width: '400px', margin: '0 auto' }}>
            <form
                onSubmit={onReviewSubmit}
                ref={formRef}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '200px',
                    justifyContent: 'space-evenly',
                }}
            >
                <textarea
                    className="form-control"
                    id="review"
                    placeholder="Write here ..."
                    required
                />
                <input
                    type="range"
                    className="form-range"
                    min="0"
                    max="5"
                    step="0.5"
                    id="rating"
                />
                <button type="submit" className="btn btn-secondary" id="submit">
                    Submit
                </button>
                {error && <p className="text-danger errTxt">{error.message}</p>}
                {loading && <p>Loading...</p>}
            </form>
        </div>
    );
};

export default ReviewForm;
