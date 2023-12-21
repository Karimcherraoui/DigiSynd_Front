import {  Navigate, Outlet } from "react-router-dom";

const SuperAdminRoute = () => {
    const syndic = localStorage.getItem("syndic")
    const superAdmin = syndic && JSON.parse(syndic).admin.role === "superAdmin" ? true : false
    return (
        !superAdmin ? <Navigate to="/dashboard"/> : <Outlet /> 
    );
    }
export default SuperAdminRoute;