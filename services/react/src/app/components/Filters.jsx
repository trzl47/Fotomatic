// libs
import React from 'react';
// components
// styles
import '../../css/filters.css';

const Features = () => {
	return (
		<section id='filters-section'>
			<div className='content center'>
				<h2>Over 20+ filters to choose from</h2>
				<h3>Feed your creativity with 20 different filter designed by our eclectic in-house photographers!</h3>
			</div>
			<div className='images-container'>
				<div className='image-container'>
					<img src={require('../../img/filter-1.png')} />
				</div>
				<div className='image-container'>
					<img src={require('../../img/filter-2.png')} />
				</div>
				<div className='image-container'>
					<img src={require('../../img/filter-3.png')} />
				</div>
				<div className='image-container extra'>
					<img src={require('../../img/filter-4.png')} />
				</div>
			</div>
		</section>
	);
};

export default Features;