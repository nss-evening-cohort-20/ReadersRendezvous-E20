import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import "./AdminProfileStyle.css";


export const AdminProfile = () => {
const [adminsProfile, setAdminProfile] = useState([])


const navigate = useNavigate()

var userId = localStorage.getItem("libraryUser")


useEffect(() => {
    fetch(`https://localhost:7229/api/Admin/GetById/1`)
      .then((response) => response.json())
      .then((adminsProfileArray) => {
        setAdminProfile(adminsProfileArray);
        console.log(adminsProfileArray)
      });
  }, []);


  return (
    <div className = "AdminProfilePageContainer">
        <div className="AdminProfileContainer">

                <section className="adminProfileSection">
                    <div className="EditAdminButton" onClick={() => navigate(`/editAdmin/${adminsProfile.id}`)}>Edit Admin</div>
                    <div className="adminProfileDetail">Name: {adminsProfile.firstName} {adminsProfile.lastName}</div>
                    <div className="adminProfileDetail">Email: {adminsProfile.email}</div>
                </section>

        <div className="AddAdminButton" onClick={() => navigate("/addAdmin")}>Add Admin</div>
        </div>
    </div>
      );


}
