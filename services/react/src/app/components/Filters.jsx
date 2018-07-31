// libs
import React from 'react';
// components
// styles
import '../../css/filters.css';

const Features = () => {
	return (
		<section className='filters'>
			<h2>Over 20+ filters to choose from</h2>
			<h3>Feed your creativity with 20 different filter designed by our eclectic in-house photographers!</h3>
			<section className='filter-images'>
				<img src={require('../../img/filter-1.png')} />
				<img src={require('../../img/filter-2.png')} />
				<img src={require('../../img/filter-3.png')} />
				<img src={require('../../img/filter-4.png')} />
			</section>
		</section>
	);
};

export default Features;