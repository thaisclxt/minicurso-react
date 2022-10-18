import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootPage from "./pages/RootPage";
import AvatarPage from "./pages/AvatarPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootPage />,
	},
	{
		path: "/avatar",
		element: <AvatarPage />,
	},
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
