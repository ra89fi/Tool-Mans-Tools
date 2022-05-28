import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Orders = ({ user }) => {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACK_URL}/orders?email=${user.email}`)
            .then((data) => data.json())
            .then((orders) => setOrders(orders))
            .catch((err) => setError(err.message));
    }, [user]);
    const deleteOrder = (id) => {
        const ans = window.confirm(
            'Are you sure you want to delete this order?'
        );
        if (!ans) return;
        fetch(`${process.env.REACT_APP_BACK_URL}/orders/${id}`, {
            method: 'DELETE',
        })
            .then((data) => data.json())
            .then((result) => {
                if (result.message === 'ok') {
                    const newOrders = orders.filter((item) => item._id !== id);
                    setOrders(newOrders);
                }
            })
            .catch((err) => console.log(err.message));
    };
    return (
        <div className="orders">
            {error && <p className="text-danger errTxt">{error.message}</p>}
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Unit Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total Price</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((el) => (
                        <tr key={el._id}>
                            <td>{el.productName}</td>
                            <td>{el.unitPrice}</td>
                            <td>{el.quantity}</td>
                            <td>{el.totalPrice}</td>
                            <td>{el.status}</td>
                            <td>
                                {!el.status || el.status === 'Pending' ? (
                                    <span>
                                        <Link
                                            className="btn btn-secondary btn-sm"
                                            to={`/payment/${el._id}`}
                                        >
                                            Payment
                                        </Link>{' '}
                                        &nbsp;
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => deleteOrder(el._id)}
                                        >
                                            Cancel
                                        </button>
                                    </span>
                                ) : (
                                    ''
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Orders;
