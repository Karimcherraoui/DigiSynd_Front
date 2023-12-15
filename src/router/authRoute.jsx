import {  Navigate, Outlet } from "react-router-dom";

const AuthRoute = () => {
    const syndic = localStorage.getItem("syndic")
    return (
       
        syndic ?<Navigate to="/dashboard"></Navigate> : <Outlet /> 
    );
    }
    export default AuthRoute;