import React from 'react';
import Orders from '../shared/Orders';
import ReviewForm from '../shared/ReviewForm';
import ProductForm from '../shared/ProductForm';

const Dashboard = ({ user }) => {
    return (
        <div className="dashboardpage">
            <div className="d-flex align-items-start">
                <div
                    className="nav flex-column nav-pills me-3"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                >
                    {!user.admin && <button
                        className="nav-link active"
                        id="v-pills-orders-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-orders"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-orders"
                        aria-selected="true"
                    >
                        My Orders
                    </button>}
                    {!user.admin && <button
                        className="nav-link"
                        id="v-pills-review-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-review"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-review"
                        aria-selected="false"
                    >
                        Add a Review
                    </button>}
                    <button
                        className="nav-link"
                        id="v-pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-profile"
                        aria-selected="false"
                    >
                        My Profile
                    </button>
                    {user.admin && <button
                        className="nav-link"
                        id="v-pills-allOrders-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-allOrders"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-allOrders"
                        aria-selected="false"
                    >
                        Manage All Orders
                    </button>}
                    {user.admin && <button
                        className="nav-link"
                        id="v-pills-addProduct-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-addProduct"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-addProduct"
                        aria-selected="false"
                    >
                        Add Product
                    </button>}
                    {user.admin && <button
                        className="nav-link"
                        id="v-pills-admin-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-admin"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-admin"
                        aria-selected="false"
                    >
                        Make Admin
                    </button>}
                    {user.admin && <button
                        className="nav-link"
                        id="v-pills-products-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-products"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-products"
                        aria-selected="false"
                    >
                        Manage Products
                    </button>}
                </div>
                <div className="tab-content" id="v-pills-tabContent">
                    <div
                        className="tab-pane fade show active"
                        id="v-pills-orders"
                        role="tabpanel"
                        aria-labelledby="v-pills-orders-tab"
                        tabIndex="0"
                    >
                        <h4>My Orders</h4>
                        <Orders user={user} />
                    </div>
                    <div
                        className="tab-pane fade"
                        id="v-pills-review"
                        role="tabpanel"
                        aria-labelledby="v-pills-review-tab"
                        tabIndex="0"
                    >
                        <h4>Add a Review</h4>
                        <ReviewForm user={user} />
                    </div>
                    <div
                        className="tab-pane fade"
                        id="v-pills-profile"
                        role="tabpanel"
                        aria-labelledby="v-pills-profile-tab"
                        tabIndex="0"
                    >
                        <h4>My Profile</h4>
                        <p>This is my profile</p>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="v-pills-allOrders"
                        role="tabpanel"
                        aria-labelledby="v-pills-allOrders-tab"
                        tabIndex="0"
                    >
                        <h4>All Orders</h4>
                        <p>This is all orders</p>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="v-pills-addProduct"
                        role="tabpanel"
                        aria-labelledby="v-pills-addProduct-tab"
                        tabIndex="0"
                    >
                        <h4>Add Product</h4>
                        <ProductForm user={user} />
                    </div>
                    <div
                        className="tab-pane fade"
                        id="v-pills-admin"
                        role="tabpanel"
                        aria-labelledby="v-pills-admin-tab"
                        tabIndex="0"
                    >
                        <h4>Make Admin</h4>
                        <p>This is make admin</p>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="v-pills-products"
                        role="tabpanel"
                        aria-labelledby="v-pills-products-tab"
                        tabIndex="0"
                    >
                        <h4>Manage Products</h4>
                        <p>This is manage products</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
