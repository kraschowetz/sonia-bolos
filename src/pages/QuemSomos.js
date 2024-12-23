import React from "react";
import "./css/QuemSomos.css"

function QuemSomos() {
	return (
		<section id="quem-somos">
			<div className="conainer">
				<div className="content-div">
					<h1>Quem Somos</h1>
					<p>
						Tudo começou na pequena cozinha de casa,
						onde Sonia, uma apaixonada pela arte de
						fazer bolos começou a criar delícias para
						família e amigos. Desde o primeiro bolo,
						Sonia sabia que cada receita tinha o
						poder de transformar momentos em memórias 
						inesquecíveis. Com um toque especial em cada
						detalhe, sua paixão pela confeitaria cresceu
						, e logo as pessoas ao redor começaram a
						pedir mais e mais de suas criações.
					</p>
					<p>
						Assim nasceu a Sonia Bolos, com o objetivo
						de adoçar os momentos especiais de cada
						cliente, seja em aniversários, casamentos,
						ou qualquer ocasião que mereça um sabor
						inesquecível. Cada bolo é feito com 
						ingredientes de qualidade, muita dedicação 
						e um toque de carinho, garantindo o sabor
						caseiro que conquistou tantos paladares ao 
						longo dos anos.
					</p>
					<p>
						Hoje, Sonia Bolos é reconhecida pelo seu
						compromisso em oferecer bolos que são tão 
						lindos quanto deliciosos. Acreditamos que a
						confeitaria é uma arte, e que cada cliente 
						merece uma experiência única. Seja bem-vindo
						ao nosso mundo doce e recheado de amor.
					</p>
					<a href="#contato" className="contact-button">
						<div>
							<h2>entrar em contato</h2>
						</div>
					</a>
				</div>
				<div className="content-div">
					<img src="loja.png"/>
				</div>
			</div>
		</section>
	);
}

export default QuemSomos
