import './App.css';

import Header from './components/Header/Header';

import Apresentation from './pages/Apresentation/Apresentation';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';

import Footer from './components/Footer/Footer';


function App() {
	return(
		<>
			<Header />
			
			<Apresentation />
			
			<section className='body'>
				<About />
				<Services />
				<Portfolio />
				<Contact />
			</section>

			<Footer />
		</>
	);
}

export default App;
