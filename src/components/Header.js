import Typed from 'react-typed';
import Particles from 'react-particles-js';
import ProfileImage from '../../src/assets/images/headerimg.JPG';
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
						strings={['Front end developer']}
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
						<li className='social_item'>
							<a
								href='https://github.com/maria-canals'
								target='_blank'
								rel='noreferrer'>
								<i className='fab fa-github'></i>
							</a>
						</li>
						<li className='social_item'>
							<a
								href='https://www.linkedin.com/in/maria-canals-miranda'
								target='_blank'
								rel='noreferrer'>
								<i className='fab fa-linkedin-in'></i>
							</a>
						</li>

						<li className='social_item'>
							<a href='mailto:mariacanals23@gmail.com'>
								<i className='far fa-envelope-open'></i>
							</a>
						</li>
					</ul> */}
				</div>
			</div>
		</div>
	);
};

export default Header;
