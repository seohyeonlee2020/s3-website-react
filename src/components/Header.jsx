import React from 'react';
import './Header.css';

const Header = () => {
	return (
			<header>
				<div className='header-container'>
					<img id="logo" src="src/assets/images/logo_s3.png" alt="s3 logo"></img>
					<nav>
						<ul>
							<li><a href="#">Home</a></li>
							<li><a href="#">Schedule</a></li>
							<li><a href="#">About Us</a></li>
						</ul>
					</nav>
				</div>
			</header>
	);
}

export default Header;
