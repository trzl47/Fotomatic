// libs
import React from 'react';
// components
import Header from './components/Header.jsx';
import Banner from './components/Banner.jsx';
import Features from './components/Features.jsx';
import Filters from './components/Filters.jsx';
import Quotes from './components/Quotes.jsx';
import Footer from './components/Footer.jsx';
// styles
import '../css/homepage.css';

const HomePage = () => {
	return (
		<section className='homepage'>
			<Header />
			<Banner />
			<Features />
			<Filters />
			<Quotes />
			<Footer />
		</section>
	);
};

export default HomePage;