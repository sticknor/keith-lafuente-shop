// React
import React from 'react';
import { Link } from 'react-router-dom';

import FooterShape from './../assets/footer_shape.png';
import FooterShell1 from './../assets/footer_shell_1.png';
import FooterShell2 from './../assets/footer_shell_2.png';
import FooterShell3 from './../assets/footer_shell_3.png';

export default function Footer() {
    return (
        <footer>
            <img src={FooterShape} className='footer-shape' />
            <div className="footer-name">keith lafuente 2021</div>
            <Link to="/about" className='footer-link footer-link-1'>
                <img src={FooterShell1} />
                <div>
                    about
                </div>
            </Link>

            <a href="https://wayawaya.co/" target="_blank" rel="noreferrer" className='footer-link footer-link-2'>
                <img src={FooterShell2} />
                <div>
                    stocklists
                </div>
            </a>
            <Link to="/faq" className='footer-link footer-link-3'>
                <img src={FooterShell3} />
                <div>
                    faq
                </div>
            </Link>
        </footer>
    );

}