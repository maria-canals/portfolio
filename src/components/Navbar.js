import React from 'react';
import Logo from '../../src/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
	return (
		<nav className='navbar sticky-top navbar-expand-lg navbar-light bg-dark'>
			<div className='container-fluid'>
				<a className='navbar-brand' href='#header'>
					<img className='logo' src={Logo} alt='logo' />
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<FontAwesomeIcon icon={faBars} style={{ color: '#fff' }} />
				</button>
				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav ms-auto mb-2 mb-g-0'>
						<li className='nav-item'>
							<a className='nav-link' aria-current='page' href='#header'>
								Home
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' aria-current='page' href='#portfolio'>
								Portfolio
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#contact'>
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
