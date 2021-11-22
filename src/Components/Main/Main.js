import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Employee from '../Employee/Employee';
import './Main.css';

const Main = () => {

	//useState for state change
	const [employee, setEmployee] = useState([]);

	//useState for right side cart
	const [cart, setCart] = useState([]);

	//Load api
	useEffect(() => {
		fetch('./fakedata.json')
		.then(res => res.json())
		.then(data => setEmployee(data))
	}, [])

	//button handler
	const handleAddtoBtn = employee => {
		const newCart = [...cart, employee];
		setCart(newCart);
	}

	return (
		<div>
			<div className="container-fluid">
				<div className="row">
					<div className="col-9">
					<div className="card-group row row-cols-1 row-cols-md-3 g-4">
						{
							employee.map(employee => <Employee key={employee.balance}employee= {employee}
							handleAddtoBtn ={handleAddtoBtn}></Employee>)
						}
					</div>
				</div>
				<div className="col-3 text-white text-center">
						<Cart cart={cart}></Cart>
					</div>
			</div>
		</div>
		</div>
	);
};

export default Main;