import React from "react";
import "./css/SoniaHeader.css"

function SoniaHeader() {
	return (
		<header id="sonia-header">
			<img src="logo.png" alt=""/>
			<a href="/">
				<p>inicio</p>
			</a>
			<a href="/#quem-somos">
				<p>quem somos</p>
			</a>
			<a href="/#cardapio">
				<p>bolos</p>
			</a>
			<a href="/#contato">
				<p>contato</p>
			</a>
		</header>
	);
}

export default SoniaHeader;
