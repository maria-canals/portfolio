import React from 'react';
import Typed from 'react-typed';
import Particles from 'react-particles-js';
import ProfileImage from '../../src/headerimg.JPG';
const Header = () => {
	return (
		<div className='header-wraper' id='header'>
			<div className='left'>
				<div className='imgContainer'>
					<img src={ProfileImage} alt='profile' />
				</div>
			</div>
			<div className='right'>
				<div className='main-info'>
					<h1>Maria Canals</h1>
					<Typed
						className='typed-text'
						strings={['Front End Developer']}
						typeSpeed={50}
						backSpeed={60}
						loop
					/>
					<Particles
						className='particles'
						params={{
							particles: {
								number: {
									value: 30,
									density: { enable: true, value_area: 900 },
								},
							},
							color: {
								value: '#0000',
							},
							shape: {
								type: 'square',
								stroke: {
									width: 10,
									color: '#ffff',
								},
							},
						}}
					/>
					{/* <ul className='social-media-links'>
						<li
							href='https://github.com/maria-canals'
							target='_blank'
							rel='noreferrer'
							className='social_item'>
							<i className='fab fa-github'></i>
						</li>
						<li
							href='https://www.linkedin.com/in/maria-canals-miranda/'
							target='_blank'
							rel='noreferrer'
							className='social_item'>
							<i className='fab fa-linkedin-in'></i>
						</li>
						<li
							href='mailto:mariacanals23@gmail.com'
							target='_blank'
							rel='noreferrer'
							className='social_item'>
							<i className='fas fa-envelope-square'></i>
						</li>
					</ul> */}
				</div>
			</div>
		</div>
	);
};

export default Header;
