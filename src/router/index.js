import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import ApartmentForm from "../components/forms/ApartmentForm";
import ListApart from "../components/ListApart/ListApart";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./privateRoute";
import AuthRoute from "./authRoute";
import PDFfile from "../components/pdf/PDFfile";

/**
 * @type {import("react-router-dom").RouteObject[]}
 */

const routes = [
  {
    Component: PrivateRoute,
    children: [
      {
        Component: Dashboard,
        children: [
          {
            path: "/dashboard",
            Component: ListApart,
          },
          {
            path: "/add-apartment",
            Component: ApartmentForm,
          },
        ],
      },
    ],
  },
  {
    Component: AuthRoute,
    children:[
      {
        path: "/",
        Component: Login,
      },
    ]
    
   
  },
  {
    path: "/Register",
    Component: Register,
  },

];

const router = createBrowserRouter(routes);

export default router;
