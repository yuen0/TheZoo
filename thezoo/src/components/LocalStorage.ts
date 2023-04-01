import iAnimals from "../models/IAnimals";

export const getLS = (): iAnimals[] => {
	let get = localStorage.getItem("animals") || "[]";
	return JSON.parse(get);
};

export const saveLS = (data: iAnimals[]) => {
	localStorage.setItem("animals", JSON.stringify(data));
};
