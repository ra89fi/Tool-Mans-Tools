import React, { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = ({ user }) => {
    const params = useParams();
    const [tool, setTool] = useState({});
    const formRef = useRef();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [quantity, setQuantity] = useState(tool?.minOrder || 0);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACK_URL}/tools/${params.id}`)
            .then((data) => data.json())
            .then((tool) => {
                setTool(tool);
                setQuantity(tool.minOrder);
            })
            .catch((err) => setError(err.message));
    }, [params]);
    useEffect(() => {
        setTotalPrice(tool.price * quantity);
    }, [tool, quantity]);
    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        formRef.current.submit.disabled = true;
        setLoading(true);
        const data = {
            email: user.email,
            address: formRef.current.address.value,
            phone: formRef.current.phone.value,
            productName: tool.name,
            unitPrice: tool.price,
            quantity: quantity,
            totalPrice: totalPrice,
            status: 'Pending',
        };
        fetch(`${process.env.REACT_APP_BACK_URL}/orders`, {
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
                    setQuantity(0);
                }
            })
            .catch((err) => setError(err.message))
            .finally(() => {
                formRef.current.submit.disabled = false;
                setLoading(false);
            });
    };
    const onQuantityChange = (e) => {
        let qv = parseInt(e.target.value);
        if (qv < tool.minOrder || qv > tool.available) {
            formRef.current.submit.disabled = true;
            setError(
                'Quantity must be equal to or greater than minimum order quantity and less than or equal to available quantity.'
            );
        } else {
            formRef.current.submit.disabled = false;
            setError(null);
        }
        setQuantity(qv);
        setTotalPrice(qv * tool?.price || 0);
    };
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
                        minHeight: '400px',
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
                    <h4>Total Price : ${totalPrice}</h4>
                    <button
                        type="submit"
                        className="btn btn-secondary"
                        id="submit"
                    >
                        Order
                    </button>
                </form>
                {error && <p className="text-danger errTxt">{error}</p>}
                {loading && <p>Loading...</p>}
            </div>
            <div className="tool" key={tool._id}>
                <img src={tool.image} alt={tool.name} />
                <div>
                    <h5>{tool.name}</h5>
                    <p>Price: ${tool.price}</p>
                    <p>Minimum Order: {tool.minOrder}</p>
                    <p>Available: {tool.available}</p>
                </div>
            </div>
        </div>
    );
};

export default Purchase;
