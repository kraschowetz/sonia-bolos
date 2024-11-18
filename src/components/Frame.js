import React from "react";
import "./css/Frame.css";

function Frame({img, name, price}) {
	return (
		<div id="frame">
			<img src={img} alt=''/>
			<div id="info">
				<h1>{name}</h1>
				<h2>R${price}</h2>
			</div>
		</div>
	);
}

export default Frame;
