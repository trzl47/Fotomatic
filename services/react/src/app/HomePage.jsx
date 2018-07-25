// libs
import React from 'react';
// components
import Header from './components/Header.jsx';
// styles
import '../css/homepage.css';

const HomePage = () => {
	return (
		<section className='homepage'>
			<Header />
			<div className='main-content'>

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

				<div id='features-section'>
					<div className='feature'>
						<div className='center'>
							<div className='image-container'>
								<img src={require('../img/feature-1.png')} />
							</div>
							<div className='content'>
								<h2>Advanced, automatic, instant</h2>
								<h3>Shutter speed, apperture and flash output adjust automatically</h3>
							</div>
						</div>
					</div>
					<div className='feature'>
						<div className='center'>
							<div className='image-container'>
								<img src={require('../img/feature-2.png')} />
							</div>
							<div className='content'>
								<h2>Beautifully crafted inside-out</h2>
								<h3>From the paint outside to the tiny screw inside, Fotomatic is crafted with love and 20-year of expertise</h3>
							</div>
						</div>
					</div>
				</div>

				<div id='filters-section'>
					<div className='content center'>
						<h2>Over 20+ filters to choose from</h2>
						<h3>Feed your creativity with 20 different filter designed by our eclectic in-house photographers!</h3>
					</div>
					<div className='images-container'>
						<div className='image-container'>
							<img src={require('../img/filter-1.png')} />
						</div>
						<div className='image-container'>
							<img src={require('../img/filter-2.png')} />
						</div>
						<div className='image-container'>
							<img src={require('../img/filter-3.png')} />
						</div>
						<div className='image-container extra'>
							<img src={require('../img/filter-4.png')} />
						</div>
					</div>
				</div>

				<div id='quotes-section'>
					<div className='content center'>
						<span className='quote'>“It’s truly something that could create a brand new photography Renaissance”</span>
						<img className='quote-citation' src={require('../img/photography-logo.png')} />
					</div>
				</div>

				<footer>
					<div className='content'>
						<span className='copyright'>© 2016  Fotomatic, All Rights Reserved</span>
						<span className='location'>Designed in NYC</span>
					</div>
				</footer>

			</div>

		</section>
	);
};

export default HomePage;