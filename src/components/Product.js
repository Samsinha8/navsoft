import React from 'react';
import cart from '../global'
import '../App.css';
var cart2 = cart;

function Product() {
	return (
		<div className="product">
			<div className="nameCont">Product 1</div>
			<div className="btnCont">
				<div className="addBtn" onClick={() => {cart2 = cart2 + 1}}>Add to Cart</div>
			</div>
		</div>
	);
}

export default Product;
