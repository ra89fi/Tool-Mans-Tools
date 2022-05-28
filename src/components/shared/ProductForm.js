import React, { useRef, useState } from 'react';

const ProductForm = ({ user }) => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const onProductSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        formRef.current.submit.disabled = true;
        setLoading(true);
        const data = {
            name: formRef.current.name.value,
            image: formRef.current.image.value,
            description: formRef.current.description.value,
            minOrder: formRef.current.minOrder.value,
            available: formRef.current.available.value,
            price: formRef.current.price.value,
        };
        fetch(`${process.env.REACT_APP_BACK_URL}/tools`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((data) => data.json())
            .then((result) => {
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
                onSubmit={onProductSubmit}
                ref={formRef}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '550px',
                    justifyContent: 'space-evenly',
                }}
            >
                Name :{' '}
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                />
                Image :{' '}
                <input
                    type="text"
                    className="form-control"
                    id="image"
                    required
                />
                Description :{' '}
                <input
                    type="text"
                    className="form-control"
                    id="description"
                    required
                />
                Minimum Order :{' '}
                <input
                    type="number"
                    className="form-control"
                    id="minOrder"
                    required
                />
                Available :{' '}
                <input
                    type="number"
                    className="form-control"
                    id="available"
                    required
                />
                Price :{' '}
                <input
                    type="number"
                    step="0.01"
                    className="form-control"
                    id="price"
                    required
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

export default ProductForm;
