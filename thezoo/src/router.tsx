import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import Animals from "./components/Animals/Animals";
import AnimalInfo from "./pages/AnimalInfo";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Animals />,
			},
			{
				path: "/animals/:id",
				element: <AnimalInfo />,
			},
		],
	},
]);
