import React from "react";
import FormReserva from "../components/FormReserva";
import SoniaHeader from "../components/SoniaHeader";
import Cardapio from "./Cardapio";
import "./css/Reserva.css";

function Reserva() {
	return (
		<main id="reserva">
			<SoniaHeader/>
			<h1>
				Fazer pedido
			</h1>
			<FormReserva/>
			<Cardapio/>
		</main>
	);
}

export default Reserva;
