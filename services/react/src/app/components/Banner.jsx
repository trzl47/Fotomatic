// libs
import React from 'react';
// components
// styles
import '../../css/header.css';

const Banner = () => {
	return (
		<section className='banner'>
			<div id='sign-up-section' className='banner'>
				<div id='sign-up-cta'>
					<div className='content center'>
						<div className='header'>
							<h2 className='cursive'>Instant</h2>
							<h1 className='striking'>FORMAT CAMERA</h1>
						</div>
						<div className='email'>
							<span>
								Email us to request a demo and be in our waiting list for the <strong>Febuary 2017</strong> release!
							</span>
							<div className='button'>Join the waiting list</div>
						</div>
					</div>
				</div>
			</div>
			</section>

	);
};

export default Banner;