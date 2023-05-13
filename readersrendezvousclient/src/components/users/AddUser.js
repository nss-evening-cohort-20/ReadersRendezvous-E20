import React, { Children } from "react";
import "./User.css";
import { User } from "./User";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


//================================

export const AddUser = () => {

    const [user, addUser] = useState({
        //id: 0,
        firstName: "",
        lastName: "",
        email: "",
        libraryCardNumber: 0,
        isActive: true,
        phoneNumber: "",
        addressLineOne: "",
        addressLineTwo: "",
        city: "",
        state: "",
        zip: 0,
    });
    const navigate = useNavigate();
    // const handleSaveButtonClick = (e) => {
    //     e.preventDefault();

    //     const orderToSendAPI = {
    //         FirstName: user.firstName,
    //         LastName: user.lastName,
    //         Email: user.email,
    //         LibraryCardNumber: user.libraryCardNumber,
    //         IsActive: user.isActive,
    //         PhoneNumber: user. phoneNumber,
    //         AddressLineOne: user.addressLineOne,
    //         AddressLineTwo: user.addressLineTwo,
    //         City: user.city,
    //         State: user. state,
    //         Zip:user.zip,

    //     };

    // return fetch(`https://localhost:7229/api/User/AddUsers`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(orderToSendAPI),
    //   })
    //     .then((response) => response.json())
    //     .then(() => {
    //       navigate("/user");
    //     });
    // };









    // const navigate = useNavigate();




    /* -------------Add User----------------- */
    const sendNewUser = async (SendToAPI) => {
        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(SendToAPI),
        };
        const response = await fetch(
            `https://localhost:7229/api/User/AddUsers`,
            fetchOptions
        );
        navigate("/users");
        const responseJson = await response.json();
        console.log(responseJson);
        return responseJson;
    };


    /* ------------------------------ */
    const handleSubmit = (event) => {
        event.preventDefault();
        sendNewUser(user);
    };


    /* ------------------------------ */



    return (
        <>
            <div className="container" >
                <div className=" col-lg-11">
                
                    <form id="userForm" >
                        <div className="row g-4" >
                            <h2 className="profile__User" > Add User: </h2>

                       
                            < div className="form-group" >
                                <label htmlFor="firstName" > FirstName: </label>
                                < input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    name="firstName"
                                    placeholder=""
                                    value={user.firstName}
                                    required
                                    autoFocus
                                    onChange={(evt) => {
                                        const copy = { ...user };
                                        copy.firstName = evt.target.value;
                                        addUser(copy);
                                    }}
                                />
                            </div>

                            < div className="form-group" >
                                <label htmlFor="lastName" > LastName: </label>
                                < input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    name="lastName"
                                    placeholder=""
                                    value={user.lastName}
                                    required
                                    autoFocus
                                    onChange={(evt) => {
                                        const copy = { ...user };
                                        copy.lastName = evt.target.value;
                                        addUser(copy);
                                    }}
                                />
                            </div>



                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder=""
                                    value={user.email}
                                    required
                                    autoFocus
                                    onChange={(evt) => {
                                        const copy = { ...user };
                                        copy.email = evt.target.value;
                                        addUser(copy);
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="libraryCardNumber">LibraryCardNumber:</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="libraryCardNumber"
                                    name="libraryCardNumber"
                                    placeholder=""
                                    value={user.libraryCardNumber}
                                    required
                                    autoFocus
                                    onChange={(evt) => {
                                        const copy = { ...user };
                                        copy.libraryCardNumber = evt.target.value;
                                        addUser(copy);
                                    }}
                                />
                            </div>
                            {/* <div className="form-group">
                                <label htmlFor="isActive">IsActive:</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="isActive"
                                    name="isActive"
                                    placeholder=""
                                    value={user.isActive}
                                    required
                                    autoFocus
                                    onChange={(evt) => {
                                        const copy = { ...user };
                                        copy.isActive = evt.target.value;
                                        addUser(copy);
                                    }}
                                />
                            </div> */}
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneNumber">PhoneNumber:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="phoneNumber"
                                name="phoneNumber"
                                placeholder=""
                                value={user.phoneNumber}
                                required
                                autoFocus
                                onChange={(evt) => {
                                    const copy = { ...user };
                                    copy.phoneNumber = evt.target.value;
                                    addUser(copy);
                                }}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="addressLineOne">AddressLineOne:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="addressLineOne"
                                name="addressLineOne"
                                placeholder=""
                                value={user.addressLineOne}
                                required
                                autoFocus
                                onChange={(evt) => {
                                    const copy = { ...user };
                                    copy.addressLineOne = evt.target.value;
                                    addUser(copy);
                                }}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="addressLineTwo">AddressLineTwo:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="addressLineTwo"
                                name="addressLineTwo"
                                placeholder=""
                                value={user.addressLineTwo}
                                required
                                autoFocus
                                onChange={(evt) => {
                                    const copy = { ...user };
                                    copy.addressLineTwo = evt.target.value;
                                    addUser(copy);
                                }}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">City:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="city"
                                name="city"
                                placeholder=""
                                value={user.city}
                                required
                                autoFocus
                                onChange={(evt) => {
                                    const copy = { ...user };
                                    copy.city = evt.target.value;
                                    addUser(copy);
                                }}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="state">State:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="state"
                                name="state"
                                placeholder=""
                                value={user.state}
                                required
                                autoFocus
                                onChange={(evt) => {
                                    const copy = { ...user };
                                    copy.state = evt.target.value;
                                    addUser(copy);
                                }}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="zip">Zip:</label>
                            <input
                                type="number"
                                className="form-control"
                                id="zip"
                                name="zip"
                                placeholder=""
                                value={user.zip}
                                required
                                autoFocus
                                onChange={(evt) => {
                                    const copy = { ...user };
                                    copy.zip = evt.target.value;
                                    addUser(copy);
                                }}
                            />
                        </div>

                        {/* <button
        onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
        className="btn btn-primary"
      >
       Add User
      </button> */}

                        <button
                            onClick={(e) => handleSubmit(e)}
                            className="btn btn-primary"
                            type="submit"
                        >
                            Add User
                        </button>

                    </form>
                </div>
            </div>
        </>

    );
};