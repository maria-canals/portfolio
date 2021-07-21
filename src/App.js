import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
	return (
		<div className='background-image'>
			<Navbar />
			<Header />
			<Portfolio />
			<Contact />
		</div>
	);
}

export default App;
