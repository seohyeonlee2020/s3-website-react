import { useState } from 'react'
import './App.css'
import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import { Link } from "react-router-dom";
import Home from './components/pages/Home'
import Schedule from './components/pages/Schedule'
import About from './components/pages/About'

import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
		<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="schedule" element={<Schedule />} />
					<Route path="about" element={<About />} />
				</Routes>
		<Footer />
	  </div>
	);
}

export default App;
