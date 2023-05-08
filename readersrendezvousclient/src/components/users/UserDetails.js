import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Header } from "../header/Header"
import { User } from "./User"
import React from "react";

export const UserDetails = () => {
    const { userId } = useParams()
    const [user, updateUser] = useState()



    const navigate = useNavigate();
    useEffect(
        () => {
            const fetchData = async () => {
                const response = await fetch(`https://localhost:7229/api/User/GetById/${userId}`)
                const singleUser = await response.json()
                updateUser(singleUser[0])
            }
            fetchData()

        },
        [userId]
    )


    const handleDelete = () => {
        fetch(`https://localhost:7229/api/User/${userId}`, {
            method: "DELETE",
        }).then();
        navigate("/users");
    };

    const handleUpdate = () => {
        navigate(`/users/edit/${userId}`);
    };

    return (
        <>
            <div>
                <Header />
                <section
                    key={`user--${user.id}`}
                    className="userContainerDetails  col-12 background container-primary"
                >
                    <div className="">

                        <div className="userDetails">
                            <h4>firstName: {user?.firstName}</h4>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={(click) => {
                                    handleUpdate(click);
                                }}
                            >
                                UPDATE
                            </button>
                            &nbsp;
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={(click) => {
                                    window.confirm(
                                        `Are you sure you want to delete ${user.firstName}?`
                                    ) && handleDelete(click);
                                }}
                            >
                                DELETE
                            </button>
                            &nbsp;
                            <button
                                type="button"
                                className="btn btn-success"
                            >
                                ADDTOLIST
                            </button>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <hr />
                        <h5> FirstName={user?.firstName}</h5>
                        <h5>LastName={user?.lastName}</h5>
                        <h5> Email={user?.email}</h5>
                        <h5> LibraryCardNumber={user?.libraryCardNumber}</h5>
                        <h5> IsActive={user?.isActive}</h5>
                        <h5>PhoneNumber={user?.phoneNumber}</h5>
                        <h5>AddressLineOne={user?.addressLineOne}</h5>
                        <h5>AddressLineTwo={user?.addressLineTwo}</h5>
                        <h5> City={user?.city}</h5>
                        <h5>State={user?.state}</h5>
                        <h5>  Zip={user?.zip}</h5>







                        <hr />
                    </div>
                </section>
            </div>
        </>
    );
};
