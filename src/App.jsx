
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import AboutUs from './pages/AboutUs';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";



function App() {
	return (
			<Router>
				<Header/>

				<div className="page-content">
					<Routes>
						 <Route path="/" element={<Home />} />
						 <Route path="/schedule" element={<Schedule />} />
                        <Route path="/about" element={<AboutUs />} />
					</Routes>
				</div>

				<Footer/>
			</Router>
	);
}

export default App;
