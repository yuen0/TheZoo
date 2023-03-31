import iAnimals from "../models/IAnimals";

const key = "animals";

export const getLS = (): iAnimals[] => {
	let get = localStorage.getItem(key) || "[]";
	return JSON.parse(get);
};

export const saveLS = (data: iAnimals[]) => {
	localStorage.setItem(key, JSON.stringify(data));
};
