import React from 'react';
import Orders from '../shared/Orders';
import ReviewForm from '../shared/ReviewForm';

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
                    <button
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
                    </button>
                    <button
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
                    </button>
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
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
