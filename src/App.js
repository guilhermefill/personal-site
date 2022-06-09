import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Landing />
			<About id="about" />
			<Projects id="projects" />
			<Contact id="contact" />
		</div>
	);
}

export default App;
