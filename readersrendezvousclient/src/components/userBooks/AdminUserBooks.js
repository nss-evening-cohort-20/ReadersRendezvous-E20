import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import { UserBookSearch } from "./UserBookSearch";
import "./AdminUserBooksStyle.css"


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
        <div className="AdminUserBooksPageContainer">
          <UserBookSearch searchClicked={e => fetchSearchByLibraryCard(e) }/>
          <div className="AdminUserBooksCardContainer">

          {adminUserBooks.map((adminUserBook) => {
              return (

                <div className="AdminUserBooksParent">

                    <div className="AdminUserBooksCard">
                      <div className="AdminUserBooksHeader">
                        Pride and Prejudice
                      </div>
                      <div className="AdminUserBooksBody">
                        <div className="AdminUserBooksImageContainer">
                          <img src={adminUserBook.bookImageUrl}/>
                        </div>
                        <div className="AdminUserBooksAuthorContainer">
                          By {adminUserBook.bookAuthor}
                        </div>
                      </div>
                      <div className="AdminUserBooksFooter">
                        <div className="AdminUserBooksFooterDetail">
                          <div className="AdminUserBooksFooterDetailHeader">Rental Start Date</div>
                          <div className="AdminUserBooksFooterDetailFooter">{formatDate(adminUserBook.rentalStartDate)}</div>
                        </div>
                        <div className="AdminUserBooksFooterDetail">
                          <div className="AdminUserBooksFooterDetailHeader">Rental Due Date</div>
                          <div className="AdminUserBooksFooterDetailFooter">{formatDate(adminUserBook.dueDate)}</div>
                        </div>
                        <div className="AdminUserBooksFooterDetail">
                          <div className="AdminUserBooksFooterDetailHeader">Returned</div>
                          <div className="AdminUserBooksFooterDetailFooter">{formatDate(adminUserBook.returnDate)}</div>
                        </div>
                        <div className="AdminUserBooksFooterDetail">
                          <div className="AdminUserBooksFooterDetailHeader">Late Fee</div>
                          <div className="AdminUserBooksFooterDetailFooter">${adminUserBook.lateFee}</div>
                        </div>
                      </div>
                    </div>
                    <div className="AdminUserBooksEditButtonContainer" onClick={() => navigate(`/editUserBook/${adminUserBook.id}`)}>
                      <div className="AdminUserBooksEditButton">Edit</div>
                    </div>

                </div>



                );
            })}




          </div>
        </div>







        // <article className="UserBooksPageContainer">
        //   <UserBookSearch searchClicked={e => fetchSearchByLibraryCard(e) }/>
        //   {adminUserBooks.map((adminUserBook) => {
        //     return (
        //       <section className="UserBooksContainer">

        //         <button onClick={() => navigate(`/editUserBook/${adminUserBook.id}`)}>
        //             Edit User Book
        //         </button>

        //         <img src={adminUserBook.bookImageUrl}/>
        //         <div>Name: {adminUserBook.bookTitle}</div>
        //         <div>By {adminUserBook.bookAuthor}</div>


        //         <div>Rental Start Date : {formatDate(adminUserBook.rentalStartDate)}</div>


        //         <div>Rental Due Date : {formatDate(adminUserBook.dueDate)}</div>


        //         <div>Return Date : {formatDate(adminUserBook.returnDate)}</div>

        //         <div>Late Fee : ${adminUserBook.lateFee}</div>
        //       </section>
        //     );
        //   })}
        // </article>
      );
}
