import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import { UserBookSearch } from "./UserBookSearch";


export const AdminUserBooks = () => {
const [adminUserBooks, setAdminUserBooks] = useState([])
const navigate = useNavigate()

var appUser = localStorage.getItem("app_user");
var appUserObject = JSON.parse(appUser);


    useEffect(() => {
        fetch(`https://localhost:7229/api/UserBook/GetAllUserBooksDTO`)
          .then((response) => response.json())
          .then((adminUserBooksArray) => {
            setAdminUserBooks(adminUserBooksArray);
            console.log(adminUserBooksArray)
          });
      }, []);


const fetchSearchByLibraryCard = (e) => {
  fetch(`https://localhost:7229/api/UserBook/GetTByLibraryCardNumber/${e}`)
  .then((response) => response.json())
  .then((adminUserBooksArray) => {
    setAdminUserBooks(adminUserBooksArray);
    console.log(adminUserBooksArray)
  });
}


      const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const year = date.getFullYear();
      
        return `${month}/${day}/${year}`;
      }


      return (
        <article className="UserBooksPageContainer">
          <UserBookSearch searchClicked={e => fetchSearchByLibraryCard(e) }/>
          {adminUserBooks.map((adminUserBook) => {
            return (
              <section className="UserBooksContainer">

                <button onClick={() => navigate(`/editUserBook/${adminUserBook.id}`)}>
                    Edit User Book
                </button>

                <img src={adminUserBook.bookImageUrl}/>
                <div>Name: {adminUserBook.bookTitle}</div>
                <div>By {adminUserBook.bookAuthor}</div>


                <div>Rental Start Date : {formatDate(adminUserBook.rentalStartDate)}</div>


                <div>Rental Due Date : {formatDate(adminUserBook.dueDate)}</div>


                <div>Return Date : {formatDate(adminUserBook.returnDate)}</div>

                <div>Late Fee : ${adminUserBook.lateFee}</div>
              </section>
            );
          })}
        </article>
      );
}
