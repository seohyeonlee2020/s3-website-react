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
							<Link to="/">Home</Link>
							
							<Link to="/schedule">Schedule</Link>

							<Link to="/about">About Us</Link>
							
						
						</ul>
					</nav>
				</div>
			</header>
	);
}

export default Header;