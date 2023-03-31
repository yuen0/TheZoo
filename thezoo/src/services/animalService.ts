import axios from "axios";
import iAnimals from "../models/IAnimals";

export const getAnimals = async (): Promise<iAnimals[]> => {
	let res = await axios.get("https://animals.azurewebsites.net/api/animals");
	return res.data;
};
