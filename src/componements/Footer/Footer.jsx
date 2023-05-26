import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <Container>
            <footer className="footer">
                <div className="social-icons">
                    <a href="https://twitter.com"><FaTwitter /></a>
                    <a href="https://facebook.com"><FaFacebook /></a>
                    <a href="https://instagram.com"><FaInstagram /></a>
                </div>
                <p>&copy; 2023 Flavors of Bangladesh. All rights reserved.</p>
            </footer>
        </Container>
    );
};

export default Footer;