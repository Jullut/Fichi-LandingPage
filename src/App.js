import './App.css';
import Header from './components/Header';
import Assisting from './components/Assisting';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);

document.title = 'Fichi';

function App() {
	return (
		<div className="App">
			<Header />
			<Assisting />
		</div>
	);
}

export default App;
