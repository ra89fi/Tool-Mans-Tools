import React, { useRef, useState } from 'react';

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
const Purchase = ({ user }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('purchase from submitted');
    };
    const onQuantityChange = (e) => {
        let qv = parseInt(e.target.value);
        if (qv < tools[0].minOrder || qv > tools[0].available) {
            formRef.current.submit.disabled = true;
            setError(
                'Quantity must be equal to or greater than minimum order quantity and less than or equal to available quantity.'
            );
        } else {
            formRef.current.submit.disabled = false;
            setError(null);
        }
        setQuantity(qv);
    };
    const formRef = useRef();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const [quantity, setQuantity] = useState(tools[0].minOrder);
    return (
        <div className="purchasepage">
            <div style={{ width: '35%' }}>
                <p>
                    {user?.displayName ? user.displayName + ', your' : 'Your'}{' '}
                    email is {user?.email}.
                </p>
                <form
                    onSubmit={handleSubmit}
                    ref={formRef}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight: '300px',
                        justifyContent: 'space-evenly',
                    }}
                >
                    Address :{' '}
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        required
                    />
                    Phone :{' '}
                    <input
                        type="text"
                        className="form-control"
                        id="phone"
                        required
                    />
                    Quantity :{' '}
                    <input
                        type="number"
                        className="form-control"
                        id="quantity"
                        value={quantity}
                        required
                        onChange={onQuantityChange}
                    />
                    <button
                        type="submit"
                        className="btn btn-secondary"
                        id="submit"
                    >
                        Order
                    </button>
                </form>
                {error && <p className="text-danger errTxt">{error}</p>}
                {loading && <p>loading...</p>}
            </div>
            {tools.map((el) => (
                <div className="tool" key={el._id}>
                    <img src={el.image} alt={el.name} />
                    <div>
                        <h5>{el.name}</h5>
                        <p>Price: ${el.price}</p>
                        <p>Minimum Order: {el.minOrder}</p>
                        <p>Available: {el.available}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Purchase;
