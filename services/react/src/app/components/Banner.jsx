// libs
import React from 'react';
// components
// styles
import '../../css/banner.css';

const Banner = () => {
	return (
		<section className='banner'>
			<section className='sign-up'>
				<div className='content'>
					<h2 className='cursive'>Instant</h2>
					<h1 className='striking'>FORMAT CAMERA</h1>
				</div>
				<div className='email'>
					<span>
						Email us to request a demo and be in our waiting list for the <strong>Febuary 2018</strong> release!
					</span>
					<button className='button'>Join the waiting list</button>
				</div>
			</section>
		</section>
	);
};

export default Banner;