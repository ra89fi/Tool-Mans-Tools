import React, { useState, useEffect } from 'react';

const Orders = ({ user }) => {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACK_URL}/orders?email=${user.email}`)
            .then((data) => data.json())
            .then((orders) => setOrders(orders))
            .catch((err) => setError(err.message));
    }, [user]);
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
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((el) => (
                        <tr>
                            <td>{el.productName}</td>
                            <td>{el.unitPrice}</td>
                            <td>{el.quantity}</td>
                            <td>{el.totalPrice}</td>
                            <td>
                                <button className="btn btn-secondary btn-sm">
                                    Cancel
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Orders;
