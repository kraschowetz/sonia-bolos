import React from "react";
import FormContato from "../components/FormContato";
import "./css/Contato.css";

function Contato() {
	return ( 
		<section id="contato">
			<h1>CONTATO</h1>

			<div id="ctt-grid">
				<div>
					<h3>Av. Bernadino de Campos, 98</h3>
					<h3>São Paulo, SP 12345-678</h3>
					<h3>Tl: (11) 3456-7890</h3>
					<h3>contato@soniabolos.com</h3>
				</div>
				<FormContato/>
			</div>

			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1627.7477106653214!2d-46.69987512195503!3d-23.669879301702323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce515bb231b5ed%3A0x327b78892baef8e6!2zU2VuYWMgTmHDp8O1ZXMgVW5pZGFz!5e0!3m2!1spt-BR!2sbr!4v1731875390580!5m2!1spt-BR!2sbr" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="mapa"/>
		</section>
	);
}

export default Contato;
