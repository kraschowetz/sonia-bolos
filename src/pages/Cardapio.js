import React from "react";
import Frame from "../components/Frame";
import "./css/Cardapio.css";

function Cardapio() {
	return (
		<section id="cardapio">
			<h1 id="cardapio-titulo">
				Nossos Bolos
			</h1>
			<div id="cardapio-inner">
				<Frame img="bolo-1.jpeg" name="BOLO DE CHOCOLATE" price="32,48"/>
				<Frame img="bolo-1.jpeg" name="BOLO DE CHOCOLATE" price="32,48"/>
				<Frame img="bolo-1.jpeg" name="BOLO DE CHOCOLATE" price="32,48"/>

				<Frame img="bolo-1.jpeg" name="BOLO DE CHOCOLATE" price="32,48"/>
				<Frame img="bolo-1.jpeg" name="BOLO DE CHOCOLATE" price="32,48"/>
				<Frame img="bolo-1.jpeg" name="BOLO DE CHOCOLATE" price="32,48"/>
			</div>
			
			<a href="reserva">
				reservar
			</a>

		</section>
	);
}

export default Cardapio;
