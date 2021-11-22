import React from 'react';
import './Header.css';
import img from '../../logo.png';

const Header = () => {
	return (
		<div>
			{/* navbar start */}
			<section>
			<div className="container">
			<nav className="navbar navbar-light bg-transparent">
 			 <div className="container-fluid">
   				<img src={img} className="logo" alt="logo" />
    		<div className="d-flex">
    	  		<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
     	 		<button className="btn btn-success btn-color" 	type="submit">Search</button>
   		 	</div>
 			 </div>
			</nav>
			</div>
			</section>
			{/* heading start */}
			<section>
				<div className="container text-center mt-5">
					<div className="row">
						<div className="col-12">
							<div className="heading">
							<h1 className="text-white text-uppercase">Innweb Technologies</h1>
					<h2 className="text-white mt-4">Employees Information</h2>
					<h3 className="text-white ">Total Budget : $1 Million</h3>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Header;