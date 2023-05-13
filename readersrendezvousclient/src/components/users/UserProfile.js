import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";

export const UsersProfile = () => {
  const [usersProfile, setUsersProfile] = useState([]);

  const navigate = useNavigate();

  var appUser = localStorage.getItem("app_user");
  var appUserObject = JSON.parse(appUser);

  useEffect(() => {
    fetch(`https://localhost:7229/api/User/GetById/${appUserObject.id}`)
      .then((response) => response.json())
      .then((usersProfileArray) => {
        setUsersProfile(usersProfileArray);
        console.log(usersProfileArray);
      });
  }, []);

  return (
    <div className="UsersProfilePageContainer">
      <div
        className="UsersProfileContainer"
        style={{
          color: "#ffffff",
          marginLeft: "90%",
          marginTop: "20%",
          width: "70%",
          height: "80%",
        }}
      >
        <section className="UsersProfileSection">
          <div className="UsersProfileDetail">
            Name: {usersProfile.firstName} {usersProfile.lastName}
          </div>
          <div className="UsersProfileDetail">Email: {usersProfile.email}</div>
          <div className="UsersProfileDetail">
            Library Card Number: {usersProfile.libraryCardNumber}
          </div>
          <div className="UsersProfileDetail">
            Address Line One: {usersProfile.addressLineOne}
          </div>
          <div className="UsersProfileDetail">
            Address Line Two: {usersProfile.addressLineTwo}
          </div>
          <div className="UsersProfileDetail">City: {usersProfile.city}</div>
          <div className="UsersProfileDetail">State: {usersProfile.state}</div>
          <div className="UsersProfileDetail">Zip Code: {usersProfile.zip}</div>
        </section>
      </div>
    </div>
  );
};
