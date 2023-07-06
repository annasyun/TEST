import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Landing from "../pages/Landing";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: "/", element: <Landing /> },
      { path: "/login", element: <Login /> },
      { path: "/home", element: <Home /> },
      { path: "/cafe/:id", element: <Detail /> },
    ],
  },
]);

export default router;
