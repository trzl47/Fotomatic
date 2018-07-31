// libs
import React from 'react';
// components
// styles
import '../../css/features.css';

const Features = () => {
	return (
		<section className='features'>
			<article className='feature'>
				<img src={require('../../img/feature-1.png')} />
				<h2>Advanced, automatic, instant</h2>
				<h3>Shutter speed, apperture and flash output adjust automatically</h3>
			</article>
			<article className='feature'>
				<img src={require('../../img/feature-2.png')} />
				<h2>Beautifully crafted inside-out</h2>
				<h3>From the paint outside to the tiny screw inside, Fotomatic is crafted with love and 20-year of expertise</h3>
			</article>
		</section>
	);
};

export default Features;