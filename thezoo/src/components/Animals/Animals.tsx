import iAnimals from "../../models/IAnimals";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getLS, saveLS } from "../LocalStorage";
import { getAnimals } from "../../services/animalService";
import "./animals.css";

export default function Animals() {
	const [animals, setAnimals] = useState<iAnimals[]>([]);

	useEffect(() => {
		const data = async () => {
			let animalsData: iAnimals[] = await getAnimals();
			setAnimals(animalsData);
		};

		if (animals.length <= 0) {
			data();
		}
	});

	if (getLS().length <= 0) {
		getLS();
		saveLS(animals);
	}

	let animalsLS: iAnimals[] = getLS();

	const renderAnimals = animalsLS.map((animal) => (
		<article key={animal.id} className="container">
			<img className="image" src={animal.imageUrl} alt="not found" />
			<p className="name">{animal.name}</p>
			<p className="short-desc">{animal.shortDescription}</p>
			<p className="birth">Född: {animal.yearOfBirth}</p>

			<Link to={`/animals/${animal.id}`}>
				<button className="info-btn">Mer om {animal.name}</button>
			</Link>
		</article>
	));

	return <>{renderAnimals}</>;
}
