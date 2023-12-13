import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import ApartmentForm from "../components/forms/ApartmentForm";
import ListApart from "../components/ListApart/ListApart";
import Login from "../pages/Login";
import Register from "../pages/Register";

const routes = [
    {
        element: <Dashboard />,
        children: [
            {
                path: "/Dashboard",
                element: <ListApart />                ,
            },
           
            {
                path: "/add-apartment",
                element: <ApartmentForm/>,
            },
         
        ],
    },

    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/Register",
        element: <Register />,
    }
  
];

          


     
          




const router = createBrowserRouter(routes);

export default router;
