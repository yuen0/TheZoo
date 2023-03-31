import iAnimals from "../models/IAnimals";
import iFed from "../models/iFed";

export const getLS = (): iAnimals[] => {
	let get = localStorage.getItem("animals") || "[]";
	return JSON.parse(get);
};

export const saveLS = (data: iAnimals[]) => {
	localStorage.setItem("animals", JSON.stringify(data));
};

export const fedSaveLS = (data: iFed[]) => {
	localStorage.setItem("lastFed", JSON.stringify(data));
};

export const fedGetLS = (): iFed[] => {
	let getFed = localStorage.getItem("lastFed") || "";
	return JSON.parse(getFed);
};
