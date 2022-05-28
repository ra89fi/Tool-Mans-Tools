import React from 'react';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth(app);

const Header = ({ user }) => {
    const logOut = () => signOut(auth);
    return (
        <header>
            <h1>Tool Man's Tools</h1>
            <p>{user?.displayName ? `Hi, ${user.displayName}` : ''}</p>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/blogs">Blogs</Link>
                </li>
                <li>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                {user && (
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                )}
                {!user && (
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                )}
                <li>
                    {!user && <Link to="/login">Login</Link>}
                    {user && (
                        <button className="btn btn-secondary" onClick={logOut}>
                            Log Out
                        </button>
                    )}
                </li>
            </ul>
        </header>
    );
};

export default Header;
