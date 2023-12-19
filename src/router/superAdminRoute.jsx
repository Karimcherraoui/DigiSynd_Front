import {  Navigate, Outlet } from "react-router-dom";

const superAdminRoute = () => {
    const syndic = localStorage.getItem("syndic")
    const superAdmin = syndic && JSON.parse(syndic).admin.role === "superAdmin" ? true : false
    return (
       
        superAdmin ?<Navigate to="/Register"></Navigate> : <Outlet /> 
    );
    }
    export default superAdminRoute;