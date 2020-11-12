import './App.css';
import Header from './components/Header';
import Assisting from './components/Assisting';
import WeAre from './components/WeAre';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import OurMission from './components/OurMission';
library.add(fab);

document.title = 'Fichi';

function App() {
	return (
		<div className="App">
			<Header />
			<Assisting />
			<WeAre />
			<OurMission />
		</div>
	);
}

export default App;
