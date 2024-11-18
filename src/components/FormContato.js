import React from "react";
import "./css/FormContato.css";

function FormContato() {
	return(
		<form>
			<input type="text" for="nome" placeholder="Nome:" required/>
			<input type="email" for="mail" placeholder="E-mail:" required/>
			<input type="text" for="telefone" placeholder="Telefone:" required/>
			<input type="text" for="endereco" placeholder="Endereço com numero:" required/>
			<input type="text" for="cep" placeholder="CEP:" required/>
			<button type="submit">Pedir</button>
		</form>
	);
}

export default FormContato;
