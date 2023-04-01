import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getLS, saveLS } from "../components/LocalStorage";
import iAnimals from "../models/IAnimals";
import "../animalInfo.css";

export default function AnimalInfo() {
	const params = useParams() as { id: string };
	const [animals, setAnimals] = useState<iAnimals[]>([]);

	useEffect(() => {
		setAnimals(getLS());
	}, []);

	const current = animals.find((animal) => animal.id === +params.id) || null;

	if (!current) {
		return <article>Djuret är inte tillgängligt</article>;
	}

	const handleClick = () => {
		const time = Date.now();
		const now = new Date(time);
		const today = now.toISOString();

		const updateAnimal = animals.map((animal) => {
			if (animal.id === current!.id) {
				return {
					...animal,
					isFed: true,
					lastFed: today,
				};
			}
			return animal;
		});
		saveLS(updateAnimal);
		setAnimals(updateAnimal);
	};

	return (
		<>
			<section className="animal-container">
				<img className="animal-image" src={current.imageUrl} alt="not found" />
				<h1 className="animal-name">{current.name}</h1>
				<p className="animal-desc">{current.longDescription}</p>
				<p className="animal-fedTime">Senast matad: {current.lastFed}</p>

				{current.isFed ? (
					<button
						className="animal-feed-btn"
						onClick={handleClick}
						disabled={current.isFed}
					>
						Nyligen matad
					</button>
				) : (
					<button className="animal-feed-btn" onClick={handleClick}>
						{" "}
						{`Mata ${current.name}`}
					</button>
				)}
			</section>
		</>
	);
}
