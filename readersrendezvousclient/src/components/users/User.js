import React from "react";
import { Link } from "react-router-dom"
import { UserDetails } from "./UserDetails";





export const User = ({ userObj }) => {


    return <div>
        {/* <section className="user">


            <div>
                <Link to={`/users/${id}`}>Name: {firstName}</Link>
            </div>

        </section> */}
        <section>
            <div>
                <Link to={`/users/${userObj.id}`}>Name:{`${userObj.firstName} ${userObj.lastName}`}</Link>
            </div>
            <div>Email: {userObj.email}</div>
            <div>LibraryCardNumber: {userObj.libraryCardNumber}</div>
            <div>IsActive: {userObj.isActive}</div>
            <div>PhoneNumber: {userObj.phoneNumber}</div>
            <div>AddressLineOne: {userObj.addressLineOne}</div>
            <div>AddressLineTwo: {userObj.addressLineTwo}</div>
            <div>City: {userObj.city}</div>
            <div>State: {userObj.state}</div>
            <div>Zip: {userObj.zip}</div>
        </section>



    </div >

};





