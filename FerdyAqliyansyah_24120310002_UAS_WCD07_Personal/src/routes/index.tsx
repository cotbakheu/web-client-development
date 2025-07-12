import { createBrowserRouter } from "react-router";

// Page Imports
import Home from "../pages/Home";
import AppLayout from "../layouts/App/AppLayout";
import Blog from "../pages/Blog";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

export default router;
