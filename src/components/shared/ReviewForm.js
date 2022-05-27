import React, { useRef } from 'react';

const ReviewForm = ({ user }) => {
    const onReviewSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
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
                    class="form-range"
                    min="0"
                    max="5"
                    step="0.5"
                    id="rating"
                />
                <button type="submit" className="btn btn-secondary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ReviewForm;
