import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
	const pageRef = React.useRef(null);
	const goToRef = (id) => {
		pageRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
	};

	return (
		<div className="App">
			<Navbar goToRef={goToRef} />
			<Landing />
			<About ref={pageRef} id="about" />
			<Projects ref={pageRef} id="projects" />
			<Contact ref={pageRef} id="contact" />
		</div>
	);
}

export default App;
