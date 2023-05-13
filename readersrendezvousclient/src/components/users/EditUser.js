
import React, { Children } from "react";
import "./User.css";
import { User } from "./User";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


//================================

export const EditUser = () => {
    const { userId } = useParams();
    const [user, setUpdateUser] = useState({
        id: 0,
        firstName: "",
        lastName: "",
        email: "",
        libraryCardNumber: 0,
        isActive: 0,
        phoneNumber: "",
        addressLineOne: "",
        addressLineTwo: "",
        city: "",
        state: "",
        zip: 0,
    });

    const navigate = useNavigate();




    /* -------------Display----------------- */
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `https://localhost:7229/api/User/${userId}`
            );
            //console.log(userEditId);
            const data = await response.json();
            setUpdateUser(data);
            console.log(data);
        };
        fetchData();
    }, []);


    /* -------------Edit----------------- */
    const updateUser = async (SendToAPI) => {
        const fetchOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(SendToAPI),
        };
        const response = await fetch(
            `https://localhost:7229/api/User/${userId}`,
            fetchOptions
        );
        //navigate(`/users`);
        const responseJson = await response.json();
        console.log(responseJson);
        return responseJson;
    };

    /* ------------------------------ */
    const handleSaveButtonClick = (e) => {
        e.preventDefault();
        updateUser(user);
        // navigate(`/users/${userEditId}`);
    };
    /* ------------------------------ */



    return (
        <>
            <div className="container" >
                <div className=" col-lg-11">
                    {" "}
                    <form id="userForm" >
                        <div className="row g-4" >
                            <h2 className="profile__User" > Edit User: </h2>


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
                                        setUpdateUser(copy);
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
                                            setUpdateUser(copy);
                                        }}
                                    />
                                </div>

                                    <div className="form-group">
                                        <label htmlFor="name">Title:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="title"
                                            name="title"
                                            placeholder=""
                                            value={user.title}
                                            required
                                            autoFocus
                                            onChange={(evt) => {
                                                const copy = { ...user };
                                                copy.title = evt.target.value;
                                                setUpdateUser(copy);
                                            }}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email:</label>
                                        <input
                                            type="text"
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
                                                setUpdateUser(copy);
                                            }}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email:</label>
                                        <input
                                            type="text"
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
                                                setUpdateUser(copy);
                                            }}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="libraryCardNumber">LibraryCardNumber:</label>
                                        <input
                                            type="text"
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
                                                setUpdateUser(copy);
                                            }}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="isActive">IsActive:</label>
                                        <input
                                            type="text"
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
                                                setUpdateUser(copy);
                                            }}
                                        />
                                    </div>
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
                                            setUpdateUser(copy);
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
                                            setUpdateUser(copy);
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
                                            setUpdateUser(copy);
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
                                            setUpdateUser(copy);
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
                                            setUpdateUser(copy);
                                        }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="zip">Zip:</label>
                                    <input
                                        type="text"
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
                                            setUpdateUser(copy);
                                        }}
                                    />
                                </div>
                        
                            <button
                                onClick={(e) => handleSaveButtonClick(e)}
                                className="btn btn-primary"
                                type="submit"
                            >
                                Update User
                            </button>
                      
                            </form>
                  </div>
                </div>
            </>

            );
};