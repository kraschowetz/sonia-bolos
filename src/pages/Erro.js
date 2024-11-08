import React from "react";
import SoniaHeader from '../components/SoniaHeader.js'

function Erro() {
	return (
		<div>
			<style>
				{` 
					.err-msg { color:  black; } 
					.err-div { 
							width: 100%;
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
						}
				`}
			</style>
			
			<SoniaHeader />
			<div className="err-div">
				<h1>
					ERRO 404
				</h1>
				<p className="err-msg">
					página não encontrada
				</p>
			</div>
		</div>
	);
}

export default Erro;
