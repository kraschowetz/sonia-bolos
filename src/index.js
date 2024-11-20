import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Reserva from './pages/Reserva';
import Erro from './pages/Erro';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<BrowserRouter>
		<Routes>
			<Route index element={<App/>}/>
			<Route path="/reserva" element={<Reserva/>}/>
			<Route path="*" element={<Erro/>}/>
		</Routes>
	</BrowserRouter>
);
