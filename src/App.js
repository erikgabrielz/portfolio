import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
	return(
		<>
			<Header />

			<section className='apresentation'>
				
			</section>

			<section className='body'>
				<div id="about">
					<div className='container'>
						Sobre
					</div>
				</div>

				<div id="services">
					<div className='container'>
						Serviços
					</div>
				</div>

				<div id="portfolio">
					<div className='container'>
						Portfólio
					</div>
				</div>

				<div id="contact">
					<div className='container'>
						Contato
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}

export default App;
