import { useSelector } from "react-redux";
import {  Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const syndic = localStorage.getItem("syndic")
    return (
       
        syndic ? <Outlet /> : <Navigate to="/"></Navigate>
    );
    }
    export default PrivateRoute;