import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<>
			<section className="app">
				<header className="header"></header>
				<Outlet />
			</section>
		</>
	);
}

export default App;
