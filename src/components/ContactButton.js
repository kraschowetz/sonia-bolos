import React from "react";
import "./css/ContactButton.css"

function ContactButton() {
	return (
		< a href = "https://web.whatsapp.com/" target = "_blank" >
			<div id="contact-button">
				<img src="https://cdn.iconscout.com/icon/free/png-256/free-whatsapp-1722375-1466161.png?f=webp" />
			</div>
		</a >
	);
}

export default ContactButton;
