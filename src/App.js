import SoniaHeader from './components/SoniaHeader.js'
import ContactButton from './components/ContactButton.js';
import Inicio from './pages/Inicio'
import QuemSomos from './pages/QuemSomos.js';

function App() {
return (
	<main>
		<SoniaHeader/>
		<ContactButton/>
		
		<Inicio/>
		<QuemSomos/>
	</main>
);
}

export default App;
