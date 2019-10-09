import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => (
    <nav className="navbar navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">Fixed bottom</Link>
    </nav>
);

export default Footer;