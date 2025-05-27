import { useState } from 'react'
import './App.css'
import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
	return (
			<div>
				<Header />
				<h1>Student Sustainability Summit</h1>
				<p>Bringing together students and professionals from around the world to showcase their work, connect with others in their areas of expertise, and discover life-changing sustainable solutions.</p>

				<h2>Volunteering Opportunities</h2>

				<h2>FAQs</h2>
				<Footer />
			</div>
	);
}

export default App;
