import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  // const [errors, setErrors] = useState("");
  // const [userData, setUserData] = useState([]);
  const [userName, setUserName] = useState("");
  const [passwordHash, setPasswordHash] = useState("");
  // const [userType, setUserType] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   isStaff: false,
  // });

  const navigate = useNavigate();

  // const navigateDashboard = () => navigate("/dashboard");

  // const setLocalStorage = (data) => {
  //   console.log(data);
  //   const transitoryobject = {
  //     firstName: data.firstName,
  //     lastName: data.lastName,
  //     Email: data.email,
  //     UserType: data.userType,
  //   };

  //   console.log(transitoryobject);

  //   try {
  //     if (transitoryobject.UserType === "Admin") {
  //       let libraryUser = "libraryUser";

  //       localStorage.setItem(
  //         libraryUser,
  //         JSON.stringify({
  //           FirstName: transitoryobject.firstName,
  //           LastName: transitoryobject.lastName,
  //           Email: transitoryobject.email,
  //           UserType: transitoryobject.UserType,
  //         })
  //       );
  //     } else {
  //       new Error(
  //         console.log(`There was an error loggin in error message: ${Error}`)
  //       );
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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

      // console.log(data);
      // console.log(data["user"]);
      // setLocalStorage(data["user"]);
      // setUserType(data);

      // if (
      //   response.ok &&
      //   response.headers.get("Content-Type").includes("application/json")
      // ) {
      //   console.log(data);
      //   console.log(response);
      // } else {
      //   console.log("not valid JSON");
      // }

      // if (
      //   response.status === 200 ||
      //   response.status === 201 ||
      //   response.status === 202
      // ) {
      //   setUserData(data);
      //   navigateDashboard();
      // } else {
      //   throw new Error("Database call failed, data could not be retrieved.");
      // }
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
      <h1>ReadersRendezvous-E20</h1>
      <h3>Please Login</h3>
      <form onSubmit={submissionHandler}>
        <label>
          Username:
          <input
            type="text"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          ></input>
        </label>
        Password:
        <input
          type="password"
          value={passwordHash}
          onChange={(event) => setPasswordHash(event.target.value)}
        ></input>
        <label>
          <input type="submit" value="submit"></input>
        </label>
      </form>
    </>
  );
};
