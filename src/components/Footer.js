import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/components/footer.scss';

const Footer = () => (
    <div className="footer-basic">
        <footer>
            <div className="social">
                <Link to="#"><ion-icon name="logo-instagram" /></Link>
                <Link to="#"><ion-icon name="logo-googleplus" /></Link>
                <Link to="#"><ion-icon name="logo-twitter" /></Link>
                <Link to="#"><ion-icon name="logo-facebook" /></Link>
            </div>
            <ul className="list-inline">
                <li className="list-inline-item"><Link to="#">Home</Link></li>
                <li className="list-inline-item"><Link to="#">Products</Link></li>
            </ul>
            <p className="copyright">RaitaMitra © {new Date().getFullYear()}</p>
        </footer>
    </div>
);

export default Footer;