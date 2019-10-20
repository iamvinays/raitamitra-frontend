import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import $ from 'jquery'; 
import '../styles/components/header.scss';

class Header extends Component {
    componentDidMount() {
		const showHeaderAt = 150;
		const win = $(window), body = $('body');

		if(win.width() > 600){
			win.on('scroll', function(e){
				if(win.scrollTop() > showHeaderAt) {
					body.addClass('fixed');
				} else {
					body.removeClass('fixed');
				}
			});
		}
    }
    render() {
        return (
            <header className="header-fixed">
                <div className="header-limiter">
                    <h1><Link to="#">Raita<span>Mitra</span></Link></h1>
                    <nav>
                        <Link to="#" className="selected">Home</Link>
                        <Link to="#">Products</Link>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header;