import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"
import LoginBackGroundPhoto from "../images/LoginBackGroundPhoto.jpg";

export const Login = () => {

  const [userName, setUserName] = useState("");
  const [passwordHash, setPasswordHash] = useState("");


  const navigate = useNavigate();



  const validateLogin = async () => {
    try {
      const response = await fetch(
        `https://localhost:7229/api/Login/loginvalidate`,
        {
          body: JSON.stringify({
            email: userName,
            password: passwordHash,
          }),
          credentials: "include",
          method: "post",
          headers: { "Content-Type": "application/json" },
        }
      );

      const loginResponse = await response.json();

      if (response.ok) {
        const userData = { ...loginResponse?.user };
        userData.isAdmin = userData.userType === "Admin" ? true : false;
        localStorage.setItem("app_user", JSON.stringify(userData));
        navigate("/home");
      } else {
        console.log(response);
        window.alert("Invalid login");
        throw new Error(`Error! status: ${response.status}`);
      }


    } catch (error) {
      console.log(error);
      // setErrors(error);
    }
  };
  const submissionHandler = (event) => {
    event.preventDefault();
    validateLogin();
  };

  return (
    <>
      <div className="Container">
        <div className="ImageContainer">
          <div className="shadow"></div>
          <h1 className="LoginHeader">Readers Rendezvous</h1>
          <img className="LoginImage" src={LoginBackGroundPhoto} />
          <div className="LoginQuote">"A Libarary is the delivery room for the birth of ideas, a place where history comes to life."<br /> -Norman Cousins</div>
        </div>
        <div className="InputContainer">
          <div className="emailInput">
            <h3>Email</h3>
            <input
              type="text"
              className='input'
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
            ></input>
          </div>
          <div className="buttonContainer">
            <div className="button" onClick={(e) => submissionHandler(e)}>
              Login
            </div>
          </div>
        </div>
      </div>

    </>
  );
};
