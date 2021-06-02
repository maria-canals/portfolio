import React from 'react';

export default function PortfolioList({ title, active, setSelected, id }) {
	return (
		<li
			key={id}
			className={active ? 'active' : 'portfolioList'}
			onClick={() => setSelected(id)}>
			{title}
		</li>
	);
}
