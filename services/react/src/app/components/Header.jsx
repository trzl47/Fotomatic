// libs
import React from 'react';
// components
// styles
import '../../css/header.css';

const Header = () => {
	return (
		<header className='header'>
			<a href='/#' className='brand'>
				<img className='icon' src={require('../../img/ic-logo.svg')} />
				<span className='desktop logo'>otomatic</span>
			</a>
			<nav className='nav'>
				<a href='/#' className='product'>
					<img className='mobile icon' src={require('../../img/ic-product-detail.svg')} />
					<span className='desktop'>Product detail</span>
				</a>
				<a href='/#' className='about'>
					<img className='mobile icon' src={require('../../img/ic-about-us.svg')} />
					<span className='desktop'>About us</span>
				</a>
				<a href='https://www.instagram.com/' className='social'>
					<img className='icon mobile' src={require('../../img/instagram.png')} />
					<span className='desktop button'>Follow us</span>
				</a>
			</nav>
		</header>
	);
};

export default Header;