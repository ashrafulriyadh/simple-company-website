import React from 'react';
import { useState } from 'react';
import './Employee.css';

const Employee = (props) => {

	//distructuring
	const {name, gender, age, email, balance, picture, position} = props.employee;

	//useState for button disable
	const [double, setDouble] = useState(false);

	return (
		<div>
				<div className="card d-flex align-items-center text-center">
						<img src={picture} className="card-img-top w-50 p-2" alt="card profile pic"/>
						<div className="card-body">
						<h5 className="card-title text-primary fw-bold">{name}</h5>
						<p className="card-text"> <span className="fw-bold">Position : </span> {position}</p>
						<p className="card-text"><span className="fw-bold"><i className="far fa-envelope"></i> Email : </span>  {email}</p>
						<p className="card-text"><span className="fw-bold"><i className="fas fa-venus-mars"></i> Gender : </span>  {gender}</p>
						<p className="card-text"><span className="fw-bold">Age : </span>  {age}</p>

						<p className="card-text"><span className="fw-bold">Balance :</span>  ${balance}</p>
						</div>
						<div className="mb-4">
						<button  disabled={double} className="btn btn-primary" onClick={() => { props.handleAddtoBtn(props.employee); setDouble(true);} }><i className="fas fa-shopping-cart me-2"></i> Add to Right</button>
						</div>
						</div>
		</div>
	);
};

export default Employee;