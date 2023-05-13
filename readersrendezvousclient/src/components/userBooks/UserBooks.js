import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";


export const UserBooks = () => {
const [userBooks, setUserBooks] = useState([])
const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://localhost:7229/api/UserBook/GetTByUserId/1`)
          .then((response) => response.json())
          .then((userBooksArray) => {
            setUserBooks(userBooksArray);
            console.log(userBooksArray)
          });
      }, []);


      const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const year = date.getFullYear();
      
        return `${month}/${day}/${year}`;
      }


      return (
        <article className="UserBooksPageContainer">
          {userBooks.map((userBook) => {
            return (
              <section className="UserBooksContainer">

                <button onClick={() => navigate(`/editUserBook/${userBook.id}`)}>
                    Edit User Book
                </button>

                <img src={userBook.bookImageUrl}/>
                <div>Name: {userBook.bookTitle}</div>
                <div>By {userBook.bookAuthor}</div>


                <div>Rental Start Date : {formatDate(userBook.rentalStartDate)}</div>


                <div>Rental Due Date : {formatDate(userBook.dueDate)}</div>


                <div>Return Date : {formatDate(userBook.returnDate)}</div>


                <div>Late Fee : ${userBook.lateFee}</div>
              </section>
            );
          })}
        </article>
      );
}
