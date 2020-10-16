import React from 'react';
import Product from './Product';
import '../App.css';

function Body() {
	return (
		<div className="Container">
			{[1, 2, 3, 4, 5].map(n => (<Product key={n} number={n}></Product>))}
		</div>
	);
}

export default Body;
