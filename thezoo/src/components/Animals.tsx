import axios from "axios";

interface iAnimals {
	id: number;
	imageUrl: string;
	isFed: boolean;
	lastFed: string;
	latinName: string;
	longDescription: string;
	medicine: string;
	name: string;
	shortDescription: string;
	yearOfBirth: number;
}
let animals: iAnimals[];

export const getAnimals = async () => {
	const res = await axios.get("https://animals.azurewebsites.net/api/animals");
};

export default function Animals() {
	return (
		<article className="container">
			<img src="" alt="" className="image" />
			<h2 className="name">${}</h2>
			<p className="descripton--short"></p>
		</article>
	);
}
