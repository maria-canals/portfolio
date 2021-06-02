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
					<h1>Hi There, I'm Maria</h1>
					<Typed
						className='typed-text'
						strings={['A Front End Developer']}
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
					<a href='#contact' className='btn-contact'>
						Contact me
					</a>
				</div>
			</div>
		</div>
	);
};

export default Header;
