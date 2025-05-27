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
								<li><a href=""><img src="" alt="instagram"></img></a></li>
								<li><a href=""><img src="" alt="facebook"></img></a></li>
								<li><a href=""><img src="" alt="linkedin"></img></a></li>
								<li><a href=""><img src="" alt="X"></img></a></li>
							</ul>
						</nav>
					</div>

					<div className='middle'>Placeholder in the middle</div>

					<div className='right-blocks'>
						<span>Designed by UF Gator User Design</span>
					</div>
				</div>
			</footer>
	);
}

export default Footer;
