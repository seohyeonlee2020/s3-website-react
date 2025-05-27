import React from 'react';
import './Footer.css'

const Footer = () => {
	return (
			<footer>
				<div className='footer-container'>
					<div className='left-blocks'>
						<strong>Student Sustainability Summit</strong>
						<nav>
							<ul className='social-handles'>
								<li><a href=""><img src="src/assets/images/insta_logo.avif" alt="instagram" ></img></a></li>
								<li><a href=""><img src="src/assets/images/facebook_logo.avif" alt="facebook"></img></a></li>
								<li><a href=""><img src="src/assets/images/linkedin_logo.avif" alt="linkedin"></img></a></li>
								<li><a href=""><img src="src/assets/images/x_logo.avif" alt="X"></img></a></li>
							</ul>
						</nav>
					</div>

					<div className='middle'></div>

					<div className='right-blocks'>
						<span>Designed by UF Gator User Design</span>
					</div>
				</div>
			</footer>
	);
}

export default Footer;
