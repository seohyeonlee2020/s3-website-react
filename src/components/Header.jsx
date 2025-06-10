import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
			<header>
				<div className='header-container'>
					<img id="logo" src="src/assets/images/logo_s3.png" alt="s3 logo"></img>
					<nav>
						<ul>
							<li><Link to="/">Home</Link></li>
							<li><Link to="/schedule">Schedule</Link></li>
							<li><Link to="/about">About Us</Link></li>
						</ul>
					</nav>
				</div>
			</header>
	);
}

export default Header;
