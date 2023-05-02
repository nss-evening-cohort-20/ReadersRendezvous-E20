import { Route, Routes } from "react-router-dom";
import { Authorized } from "./views/Authorized";
import { ApplicationViews } from "./views/ApplicationViews";
import { Navbar } from "./nav/Navbar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { Footer } from "./footer/Footer";
import "./ReadersRendezvousApp.css";
import React from "react";

export const ReadersRendezvousApp = () => {
    return (
        <>
        <Routes>
            {/* <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} /> */}
            <Route
                path="*"
                element={
                   // {/* <Authorized> */}
                        <>
                            <Navbar />
                            <ApplicationViews />
                        </>
                   // {/* </Authorized> */}
                }
            />
        </Routes> 
        </>
    );
};

