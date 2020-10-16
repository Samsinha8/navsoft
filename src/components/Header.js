import React from 'react';
import cart from '../global'
import '../App.css';

function Head() {
	return (
		<div className="Header">
			<h2>Navsoft E-Commerce</h2>
			<h2>{cart.count}</h2>
		</div>
	);
}

export default Head;
