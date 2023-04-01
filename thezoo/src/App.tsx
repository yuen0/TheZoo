import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
function App() {
	return (
		<>
			<section className="app">
				<Link to={`/`}>
					<header className="header">Hem</header>
				</Link>

				<Outlet />
			</section>
		</>
	);
}

export default App;
