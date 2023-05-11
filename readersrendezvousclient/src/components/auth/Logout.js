import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, redirect } from "react-router-dom";

export const Logout = () => {
  const [errors, setErrors] = useState("");
  const [logedIn, setLoggedIn] = useState(true);
  const navigate = useNavigate();

  const deleteLocalStorage = () => {
    try {
      localStorage.removeItem("libraryUser");
    } catch (error) {
      console.log(error);
      //setErrors(error);
    }
  };

  const deletWithClick = () => {
    deleteLocalStorage();
    navigate("../Login");
  };
  return (
    <>
      <input type='button' value={"logout"} onClick={deletWithClick}></input>
    </>
  );
};
