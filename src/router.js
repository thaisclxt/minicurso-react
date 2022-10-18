import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootPage from "./pages/RootPage";
import AvatarPage from "./pages/AvatarPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/avatar",
		element: <AvatarPage />,
	},
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
