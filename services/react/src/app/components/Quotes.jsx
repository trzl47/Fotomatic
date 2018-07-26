// libs
import React from 'react';
// components
// styles
import '../../css/quotes.css';

const Quotes = () => {
	return (
		<section id='quotes-section'>
			<div className='content center'>
				<span className='quote'>“It’s truly something that could create a brand new photography Renaissance”</span>
				<img className='quote-citation' src={require('../../img/photography-logo.png')} />
			</div>
		</section>


	);
};

export default Quotes;