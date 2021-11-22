import React from 'react';
import './Cart.css';

const Cart = (props) => {

	//distructured props
	const {cart} = props;

	//declare default value
	let totalPerson = 0;

	//calculate total person
	for (const employee of cart) {
        if (!employee.quantity) {
            employee.quantity = 1;
        }
        totalPerson = totalPerson + employee.quantity;
    }

	//calculate total cost using reducer
	const totalReducer = (previous, employee) => previous + employee.balance;
	const total = cart.reduce(totalReducer, 0);


	return (
		<div className="cart-container">
			<h3>Total Person : {totalPerson}  </h3>
			<h2>Total Cost : <span className="cost">${total.toFixed(2)}</span> </h2>
			<h2 className="mt-4"> Name <i className="fas fa-arrow-down fs-4"></i> </h2>
			{
				cart.map((employee, index)=> <h5 className="names" key={index}>
						 <i className="far fa-user"></i> {employee.name}
						 </h5>)
			}
		</div>
	);
};

export default Cart;