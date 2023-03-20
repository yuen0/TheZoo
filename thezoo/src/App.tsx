import React from "react";
import "./App.css";
import { getAnimals } from "./components/Animals";

function App() {
	return <button onClick={getAnimals}>Get Animals</button>;
}

export default App;
