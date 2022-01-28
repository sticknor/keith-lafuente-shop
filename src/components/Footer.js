// React
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <div className='footer-shape' />
            <div className="footer-name">keith lafuente 2021</div>
            <Link to="/about" className='footer-link footer-link-1'>
                <div>
                    about
                </div>
            </Link>
            <Link to="/stocklists" className='footer-link footer-link-2'>
                <div>
                    stocklists
                </div>
            </Link>
            <Link to="/faq" className='footer-link footer-link-3'>
                <div>
                    faq
                </div>
            </Link>
        </footer>
    );

}