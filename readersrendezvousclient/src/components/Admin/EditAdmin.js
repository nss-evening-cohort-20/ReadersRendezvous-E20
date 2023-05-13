import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import "./EditAdminStyle.css";
import {NameCircle} from "./NameCircle"

export const EditAdmin = () => {
const [editAdminsProfile, setEditAdminProfile] = useState({
    firstName: "",
    lastName: "",
    email:"",
})
const navigate = useNavigate()
const { adminId } = useParams()



useEffect(() => {
    fetch(`https://localhost:7229/api/Admin/GetById/${adminId}`)
      .then((response) => response.json())
      .then((EditAdminsProfileArray) => {
        setEditAdminProfile(EditAdminsProfileArray);
        console.log(EditAdminsProfileArray)
      });
  }, []);

  const handleSaveButtonClick = (e) => {
    e.preventDefault();

    console.log(JSON.stringify(editAdminsProfile))
    return fetch(`https://localhost:7229/api/Admin/${editAdminsProfile.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editAdminsProfile),
    })
      .then(() => {
        navigate("/adminProfile");
      });
  };



    return (
    <div className="MainContainer">
    <div className="CenterContainer">
      <div className="Card">
        <div className="header">Library Card</div>
        <div className="img">
          <NameCircle />
        </div>
        <div className='footer'>
          <div className="FName">
          <input
              required
              autoFocus
              type="text"
              className="edit-form-control"
              placeholder="First Name"
              value={editAdminsProfile.firstName}
              onChange={(evt) => {
                const copy = { ...editAdminsProfile };
                copy.firstName = evt.target.value;
                setEditAdminProfile(copy);
              }}
            />
          </div>
          <div className="LName">
          <input
              required
              autoFocus
              type="text"
              className="edit-form-control"
              placeholder="Last Name"
              value={editAdminsProfile.lastName}
              onChange={(evt) => {
                const copy = { ...editAdminsProfile };
                copy.lastName = evt.target.value;
                setEditAdminProfile(copy);
              }}
            />
          </div>
          <div className="EditEmail">
          <input
              required
              autoFocus
              type="text"
              className="edit-form-control"
              placeholder="Email"
              value={editAdminsProfile.email}
              onChange={(evt) => {
                const copy = { ...editAdminsProfile };
                copy.email = evt.target.value;
                setEditAdminProfile(copy);
              }}
            />
          </div>
        </div>
      </div>
      <div className="EditButton" onClick={(clickEvent) => {
            handleSaveButtonClick(clickEvent);
          }}>
        Save
      </div>
    </div>
  </div>
    )
}


{/* <form className="EditAdminFormPageContainer">
      <div className="EditAdminFormContainer">

        <fieldset>
          <div className="EditAdminDetail">
            <label htmlFor="EditAdminLabel">First Name:</label>
            <input
              required
              autoFocus
              type="text"
              className="edit-form-control"
              placeholder="First Name"
              value={editAdminsProfile.firstName}
              onChange={(evt) => {
                const copy = { ...editAdminsProfile };
                copy.firstName = evt.target.value;
                setEditAdminProfile(copy);
              }}
            />
          </div>
        </fieldset>
        
        <fieldset>
          <div className="EditAdminDetail">
            <label htmlFor="EditAdminLabel">Last Name:</label>
            <input
              required
              autoFocus
              type="text"
              className="edit-form-control"
              placeholder="Last Name"
              value={editAdminsProfile.lastName}
              onChange={(evt) => {
                const copy = { ...editAdminsProfile };
                copy.lastName = evt.target.value;
                setEditAdminProfile(copy);
              }}
            />
          </div>
        </fieldset>

        <fieldset>
          <div className="EditAdminDetail">
            <label htmlFor="EditAdminLabel">Email:</label>
            <input
              required
              autoFocus
              type="text"
              className="edit-form-control"
              placeholder="Email"
              value={editAdminsProfile.email}
              onChange={(evt) => {
                const copy = { ...editAdminsProfile };
                copy.email = evt.target.value;
                setEditAdminProfile(copy);
              }}
            />
          </div>
        </fieldset>

        <button
          onClick={(clickEvent) => {
            handleSaveButtonClick(clickEvent);
          }}
          className="EditAdminEvent"
        >
          Save Admin
        </button>
      </div>
    </form> */}