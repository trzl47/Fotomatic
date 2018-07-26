// libs
import React from 'react';
// components
// styles
import '../../css/features.css';

const Features = () => {
	return (
		<section id='features-section'>
			<div className='feature'>
				<div className='center'>
					<div className='image-container'>
						<img src={require('../../img/feature-1.png')} />
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
						<img src={require('../../img/feature-2.png')} />
					</div>
					<div className='content'>
						<h2>Beautifully crafted inside-out</h2>
						<h3>From the paint outside to the tiny screw inside, Fotomatic is crafted with love and 20-year of expertise</h3>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;