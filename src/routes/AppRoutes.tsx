import { createBrowserRouter, RouterProvider } from "react-router";

import HomePage from "../pages/HomePage";
import AuthPage from "../pages/AuthPage";
import MyListPage from "../pages/MyListPage";
import Settings from "../pages/Settings";
import SelectAvatarPage from "../pages/SelectAvatarPage";
import SearchedResultsPage from "../pages/SearchedResultsPage";

const titlePaths = ["browse", "movie", "tv"];
const authPaths = ["login", "signup"];

const titleRoutes = titlePaths.map((path) => ({
  path,
  Component: HomePage,
}));

const authRoutes = authPaths.map((path) => ({
  path,
  Component: AuthPage,
}));

const router = createBrowserRouter([
  ...authRoutes,
  ...titleRoutes,
  {
    path: "/my-list",
    Component: MyListPage,
  },
  {
    path: "/settings",
    Component: Settings,
  },
  {
    path: "/settings/select-avatar",
    Component: SelectAvatarPage,
  },
  {
    path: "/search",
    Component: SearchedResultsPage,
  },
]);

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
