import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-end">
        <Link className="navbar-brand" to="/">RaitaMitra</Link>
        {/* <button className="btn btn-success ml-auto mr-1">Always Show</button> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
            <ul className="navbar-nav text-right ml-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/products">Products</Link>
                </li>
            </ul>
        </div>
    </nav>
);

export default Header;