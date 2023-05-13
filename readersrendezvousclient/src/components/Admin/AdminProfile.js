import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import "./AdminProfileStyle.css";
import {NameCircle} from "./NameCircle"

export const AdminProfile = () => {
const [adminsProfile, setAdminProfile] = useState([])


const navigate = useNavigate()

var appUser = localStorage.getItem("app_user");
var appUserObject = JSON.parse(appUser);


useEffect(() => {
    fetch(`https://localhost:7229/api/Admin/GetById/${appUserObject.id}`)
      .then((response) => response.json())
      .then((adminsProfileArray) => {
        setAdminProfile(adminsProfileArray);
        console.log(adminsProfileArray)
      });
  }, []);


  return (
    // <div className = "AdminProfilePageContainer">
    //     <div className="AdminProfileContainer">

    //             <section className="adminProfileSection">
    //                 <div className="EditAdminButton" onClick={() => navigate(`/editAdmin/${adminsProfile.id}`)}>Edit Admin</div>
    //                 <div className="adminProfileDetail">Name: {adminsProfile.firstName} {adminsProfile.lastName}</div>
    //                 <div className="adminProfileDetail">Email: {adminsProfile.email}</div>
    //             </section>

    //     <div className="AddAdminButton" onClick={() => navigate("/addAdmin")}>Add Admin</div>
    //     </div>
    // </div>

    <div className="MainContainer">
      <div className="CenterContainer">
        <div className="Card">
          <div className="header">Library Card</div>
          <div className="img">
            <NameCircle />
          </div>
          <div className='footer'>
            <div className="Name">
            {adminsProfile.firstName} {adminsProfile.lastName}
            </div>
            <div className="Email">
            {adminsProfile.email}
            </div>
          </div>
        </div>
        <div className="EditButton" onClick={() => navigate(`/editAdmin/${adminsProfile.id}`)}>
          Edit
        </div>
        <div className="addAdminButton" onClick={() => navigate("/addAdmin")}>
        Add New
      </div>
      </div>
    </div>

      );


}
