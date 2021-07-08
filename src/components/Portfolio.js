import React, { useState, useEffect } from 'react';
import PortfolioList from './PortfolioList';
import {
	VuePortfolio,
	JavascriptPortfolio,
	NodejsExpress,
	ReactPortfolio,
} from '../data';
const Portfolio = () => {
	const [selected, setSelected] = useState('featured');
	const [data, setData] = useState([]);
	const list = [
		{ id: 'React', title: 'React' },
		{ id: 'Vue', title: 'Vue' },
		{ id: 'Nodejs/Express', title: 'Nodejs/Express' },
		{ id: 'Javascript', title: 'Javascript' },
	];

	useEffect(() => {
		switch (selected) {
			case 'React':
				setData(ReactPortfolio);
				break;
			case 'Nodejs/Express':
				setData(NodejsExpress);
				break;
			case 'Vue':
				setData(VuePortfolio);
				break;
			case 'Javascript':
				setData(JavascriptPortfolio);
				break;
			default:
				setData(VuePortfolio);
		}
	}, [selected]);
	return (
		<div className='portfolio' id='portfolio'>
			<h1 className='portfolio_title'>Recent Works</h1>
			<h5 className='portfolio_subtitle my-3'>
				Portfolio showcase of some of my work.
			</h5>
			<ul className='d-flex align-center my-3'>
				{list.map(item => (
					<PortfolioList
						key={item.id}
						className='portfolioList'
						title={item.title}
						active={selected === item.id}
						setSelected={setSelected}
						id={item.id}
					/>
				))}
			</ul>

			<div className='container'>
				{data.map(d => (
					<div className='item' key={d.id}>
						<div className='item-img'>
							<img src={d.img} alt={d.title} />
						</div>
						<div className='item-description'>
							<h3 className='item-desscription-title'>{d.title}</h3>
							<p className='item-description-text'>{d.description}</p>
							<p>{d.description_list}</p>
							<p>{d.techstack}</p>
							<p>{d.skills}</p>
						</div>
						<div className='item-links'>
							<a
								className='item-description-link'
								target='_blank'
								rel='noreferrer'
								href={d.demo_link}>
								See demo
							</a>
							<a
								className='item-description-link'
								target='_blank'
								rel='noreferrer'
								href={d.gitHub_link}>
								Github
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Portfolio;
