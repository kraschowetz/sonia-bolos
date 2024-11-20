import React from "react";
import "./css/FormReserva.css";

function limparForm() {
	document.getElementById('rua').value = '';
	document.getElementById('bairro').value = '';
        document.getElementById('cidade').value = '';
        document.getElementById('estado').value = '';
}

window.onload = function() {
	const form = document.getElementById('form-reserva');
	const cepInput = document.getElementById('cep-input');
	
	if(form == null || cepInput == null) {
		return;
	}

	cepInput.addEventListener('blur', function() {
		const cep = this.value.replace(/\D/g, '');

		if (cep.length !== 8) {
			alert("CEP inválido");
			limparForm();
			return;
		}

		const url = `https://viacep.com.br/ws/${cep}/json/`;
		fetch(url)
			.then(function(response) {
				if (!response.ok) {
                        		throw new Error('Erro na resposta da rede');
                		}
				return response.json();
			})
			.then(function(data) {
				if ('erro' in data) {
					alert('CEP não encontrado.');
					limparForm();
					return;
				}
				document.getElementById('rua').value = data.logradouro;
				document.getElementById('bairro').value = data.bairro;
				document.getElementById('cidade').value = data.localidade;
				document.getElementById('estado').value = data.uf;

			})
			.catch(function(error) {
				alert('Erro ao buscar o CEP: ' + error.message);
			});
	});

	form.addEventListener('submit', function(event) {
		event.preventDefault();
		form.reset();
	});
}


function FormReserva() {
	return (
		<section id="reserva">
			<form id="form-reserva">
				<div id="grid">
					<div>
						<input for="i_nome" id="nome-input" placeholder="Nome:" required />
						<input for="i_cpf" id="cpf-input" placeholder="CPF:" required />
						<input for="i_cep" id="cep-input" placeholder="CEP:" required />
						<input for="i_mail" type="email" id="email-input" placeholder="E-Mail:" required />
						<input for="i_fone" type="text" id="tel-input" placeholder="Telefone:" required />
					</div>
					<div>
						<input for="i_estado" id="estado" placeholder="Estado:" required />
						<input for="i_cidade" id="cidade" placeholder="Cidade:" required />
						<input for="i_bairro" id="bairro" placeholder="Bairro:" required />
						<input for="i_rua"id="rua" placeholder="Rua:" required />
						<input for="i_numero" id="numero" placeholder="Numero:" required />
					</div>
				</div>
				<button action="submit">reservar</button>
			</form>
		</section>
	);
}

export default FormReserva;
