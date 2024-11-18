import SoniaHeader from './components/SoniaHeader.js'
import ContactButton from './components/ContactButton.js';
import Inicio from './pages/Inicio';
import QuemSomos from './pages/QuemSomos.js';
import Cardapio from './pages/Cardapio.js';
import Contato from './pages/Contato.js';
import SoniaFooter from './components/SoniaFooter.js';

function App() {
return (
	<main>
		<SoniaHeader/>
		<ContactButton/>
		
		<Inicio/>
		<QuemSomos/>
		<Cardapio/>
		<Contato/>
		<SoniaFooter/>
		
	</main>
);
}

export default App;
