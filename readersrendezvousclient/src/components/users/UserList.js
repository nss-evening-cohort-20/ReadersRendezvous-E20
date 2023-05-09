import { useEffect, useState } from "react"
import { User } from "./User"
// import { Header } from "../headder/Headder"
import "./Users.css"
import { UserDetails } from "./UserDetails";

export const UserList = () => {
    const [users, setUsers] = useState([])

    /* ------------GetAllUsers--------------- */
    useEffect(
        () => {
            const fetchData = async () => {
                const response = await fetch(`https://localhost:7229/api/User/GetAllUsers`)
                const UserArray = await response.json()
                setUsers(UserArray)
                console.log(UserArray);

            };
            fetchData();
        },
        []);


    return (
        <>
            <div className="userContainer ">

                <section key={`users`} className="users">
                    {users.map((user) => {
                        return (
                            <>
                                <User
                                    userObj={user}

                                />
                            </>
                        );
                    })}
                </section>
            </div>
        </>
    );
};
