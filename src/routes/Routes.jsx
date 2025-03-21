import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddTouristSpot from "../pages/touristSpots/AddTouristSpot";
import AllTouristSpots from "../pages/touristSpots/AllTouristSpots";
import TouristSpotDetails from "../pages/touristSpots/TouristSpotDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/add-tourist-spot",
        element: <AddTouristSpot />,
      },
      {
        path: "/tourist-spots",
        element: <AllTouristSpots />,
      },
      {
        path: "/tourist-spots/:id",
        element: <TouristSpotDetails />,
      },
    ],
  },
]);

export default router;
