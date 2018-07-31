// libs
import React from 'react';
// components
// styles
import '../../css/quotes.css';

const Quotes = () => {
	return (
		<section className='quotes'>
			<span className='quote'>“It’s truly something that could create a brand new photography Renaissance”</span>
			<img className='citation' src={require('../../img/photography-logo.png')} />
		</section>
	);
};

export default Quotes;