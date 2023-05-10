import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";


export const UserBooks = () => {
const [userBooks, setUserBooks] = useState([])


    useEffect(() => {
        fetch(`https://localhost:7229/api/UserBook/GetTByUserId/1`)
          .then((response) => response.json())
          .then((userBooksArray) => {
            setUserBooks(userBooksArray);
            console.log(userBooksArray)
          });
      }, []);


    


    return (
        <h1> User Books Page</h1>
    );
}