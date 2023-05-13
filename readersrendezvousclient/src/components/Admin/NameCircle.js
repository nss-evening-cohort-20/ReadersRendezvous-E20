import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import "./NameCircle.css";


export const NameCircle = () => {

    const [firstLetter,setFirstLetter] = useState(null);

    useEffect(() => {
        var appUser = localStorage.getItem("app_user");
        var appUserObject = JSON.parse(appUser);

        setFirstLetter(appUserObject.firstName.charAt(0))

    },[])
    return (
        <div className="circle">
            <p>{firstLetter}</p>
        </div>
    )
}