import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getLS, saveLS, fedGetLS, fedSaveLS } from "../components/LocalStorage";
import iAnimals from "../models/IAnimals";
import "../animalInfo.css";

export default function AnimalInfo() {
	const params = useParams() as { id: string };
	const [animals, setAnimals] = useState<iAnimals[]>([]);
	const [time, setTime] = useState("");

	useEffect(() => {
		const animalsLS = getLS();
		setAnimals(animalsLS);

		// const fedLS = fedGetLS();
		// setTime(fedLS);
	}, []);

	const currentAnimal = animals.find(
		(animal) => animal.id === Number(params.id)
	);

	const handleClick = () => {
		const time = Date.now();
		const now = new Date(time);
		const lastFedDate = new Date().toString();
		const today = now.toISOString();

		const updateAnimal = animals.map((animal) => {
			if (animal.id === currentAnimal?.id) {
				return {
					...animal,
					isFed: true,
					lastFed: today,
				};
			}

			setTime(lastFedDate);
			return animal;
		});

		saveLS(updateAnimal);
		setAnimals(updateAnimal);
	};

	return (
		<>
			<section className="animal-container">
				<img className="animal-image" src={currentAnimal?.imageUrl} alt="" />
				<h1 className="animal-name">{currentAnimal?.name}</h1>
				<p className="animal-desc">{currentAnimal?.longDescription}</p>
				<p className="animal-fedTime">Senast matad: {time}</p>
				<button
					className="animal-feed-btn"
					disabled={currentAnimal?.isFed}
					onClick={handleClick}
				>
					{`Mata ${currentAnimal?.name}`}
				</button>
			</section>
		</>
	);
}
