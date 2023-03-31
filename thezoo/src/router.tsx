import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import Animals from "./components/Animals";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Animals />,
			},
		],
	},
]);
