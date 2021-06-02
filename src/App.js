import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
	return (
		<>
			<Navbar />
			<Header />
			<Portfolio />
			<Contact />
		</>
	);
}

export default App;
