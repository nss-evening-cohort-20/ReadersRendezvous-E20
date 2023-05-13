import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import "./AddAdminStyle.css";
import { NameCircle } from "./NameCircle";

export const AddAdmin = () => {
    const [addAdminProfile, setAddAdminProfile] = useState({
        firstName: "",
        lastName: "",
        email:"",
    })

    const navigate = useNavigate()




    const handleSaveButtonClick = (e) => {
        e.preventDefault();
    
        const eventToSendToAPI = {
          firstName: addAdminProfile.firstName,
          lastName: addAdminProfile.lastName,
          email: addAdminProfile.email,
        };
    
        return fetch(`https://localhost:7229/AddAdmin`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(eventToSendToAPI),
        })
          .then((response) => response.json())
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
                className="add-form-control"
                placeholder="First Name"
                value={addAdminProfile.firstName}
                onChange={(evt) => {
                  const copy = { ...addAdminProfile };
                  copy.firstName = evt.target.value;
                  setAddAdminProfile(copy);
                }}
              />
              </div>
              <div className="LName">
               <input
                  required
                  autoFocus
                  type="text"
                  className="add-form-control"
                  placeholder="Last Name"
                  value={addAdminProfile.lastName}
                  onChange={(evt) => {
                    const copy = { ...addAdminProfile };
                    copy.lastName = evt.target.value;
                    setAddAdminProfile(copy);
                  }}
                />
              </div>
              <div className="EditEmail">
                  <input
                      required
                      autoFocus
                      type="text"
                      className="add-form-control"
                      placeholder="Email"
                      value={addAdminProfile.email}
                      onChange={(evt) => {
                        const copy = { ...addAdminProfile };
                        copy.email = evt.target.value;
                        setAddAdminProfile(copy);
                      }}
                    />
              </div>
            </div>
          </div>
          <div className="EditButton" onClick={(clickEvent) => {
                handleSaveButtonClick(clickEvent);
              }}>
            Add
          </div>
        </div>
      </div>
      );
}




// <form className="AddAdminFormPageContainer">
// <div className="AddAdminFormContainer">

//   <fieldset>
//     <div className="form-group">
//       <label htmlFor="AddAdminLabel">First Name:</label>
//       <input
//         required
//         autoFocus
//         type="text"
//         className="add-form-control"
//         placeholder="First Name"
//         value={addAdminProfile.firstName}
//         onChange={(evt) => {
//           const copy = { ...addAdminProfile };
//           copy.firstName = evt.target.value;
//           setAddAdminProfile(copy);
//         }}
//       />
//     </div>
//   </fieldset>

//   <fieldset>
//     <div className="form-group">
//       <label htmlFor="AddAdminLabel">Last Name:</label>
//       <input
//         required
//         autoFocus
//         type="text"
//         className="add-form-control"
//         placeholder="Last Name"
//         value={addAdminProfile.lastName}
//         onChange={(evt) => {
//           const copy = { ...addAdminProfile };
//           copy.lastName = evt.target.value;
//           setAddAdminProfile(copy);
//         }}
//       />
//     </div>
//   </fieldset>

//   <fieldset>
//     <div className="form-group">
//       <label htmlFor="AddAdminLabel">Email:</label>
//       <input
//         required
//         autoFocus
//         type="text"
//         className="add-form-control"
//         placeholder="Email"
//         value={addAdminProfile.email}
//         onChange={(evt) => {
//           const copy = { ...addAdminProfile };
//           copy.email = evt.target.value;
//           setAddAdminProfile(copy);
//         }}
//       />
//     </div>
//   </fieldset>


//     <button
//       onClick={(clickEvent) => {
//         handleSaveButtonClick(clickEvent);
//       }}
//       className="AddAdminEvent"
//     >
//       Add Admin
//     </button>

// </div>
// </form>
