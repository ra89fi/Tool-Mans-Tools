import React from 'react';

const Footer = () => {
    return (
        <footer>
            <p style={{ textAlign: 'center' }}>
                Copyright &copy; {new Date().getFullYear()}
            </p>
        </footer>
    );
};

export default Footer;
