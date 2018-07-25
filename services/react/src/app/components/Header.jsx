// libs
import React from 'react';
// components
// styles
import '../../css/header.css';

const Header = () => (
	<header>
		<div className='content'>
			<a href='index.html' className='desktop logo'>Fotomatic</a>
			<nav className='desktop'>
				<ul>
					<li><a href='/#'>Product detail</a></li>
					<li><a href='/#'>About us</a></li>
					<li><a href='https://www.instagram.com/'>Follow us <img className='icon' src={require('../img/instagram.png')} /></a></li>
				</ul>
			</nav>
			<nav className='mobile'>
				<ul>
					<li><a href='/#'><img src={require('../../img/ic-logo.svg')} /></a></li>
					<li><a href='/#'><img src={require('../../img/ic-product-detail.svg')} /></a></li>
					<li><a href='/#'><img src={require('../../img/ic-about-us.svg')} /></a></li>
					<li><a href='/#' className='button'>Join us</a></li>
				</ul>
			</nav>
		</div>
	</header>
);

export default Header;