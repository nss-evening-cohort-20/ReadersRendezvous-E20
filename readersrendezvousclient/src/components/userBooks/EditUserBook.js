import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import "./EditUserBookStyle.css";


export const EditUserBooks = () => {
const [editUserBook, setEditUserBook] = useState({
userId: 0,
bookId: 0,
rentalStartDate: new Date(),
returnDate: new Date(),
dueDate: new Date(),
lateFee: 0,
})

const navigate = useNavigate()
const { userBookId } = useParams()



useEffect(() => {
    fetch(`https://localhost:7229/api/UserBook/GetById/${userBookId}`)
      .then((response) => response.json())
      .then((editUserBookArray) => {
        setEditUserBook(editUserBookArray);
        console.log(editUserBookArray)
      });
  }, []);



  
  const handleSaveButtonClick = (e) => {
    e.preventDefault();

    console.log(JSON.stringify(editUserBook))
    return fetch(`https://localhost:7229/api/UserBook/${editUserBook.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editUserBook),
    })
      .then(() => {
        navigate("/userBooks");
      });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
  
    return `${year}-${month}-${day}`;
  }


return (
<form className="EditUserBookFormPageContainer">
      <div className="EditUserBookFormContainer">

        <fieldset>
          <div className="EditUserBookDetail">
            <label htmlFor="EditserBookLabel">Rental Start Date:</label>
            <input
              required
              autoFocus
              type="date"
              className="edit-form-control"
              placeholder="Rental Start Date"
              value={formatDate(editUserBook.rentalStartDate)}
              onChange={(evt) => {
                const copy = { ...editUserBook };
                console.log(evt.target.value)
                copy.rentalStartDate = evt.target.value;
                setEditUserBook(copy);
              }}
            />
          </div>
        </fieldset>
        
        <fieldset>
          <div className="EditUserBookDetail">
            <label htmlFor="EditserBookLabel">Return Date:</label>
            <input
              required
              autoFocus
              type="date"
              className="edit-form-control"
              placeholder="Return Date"
              value={formatDate(editUserBook.returnDate)}
              onChange={(evt) => {
                const copy = { ...editUserBook };
                copy.returnDate = evt.target.value;
                setEditUserBook(copy);
              }}
            />
          </div>
        </fieldset>

        <fieldset>
          <div className="EditUserBookDetail">
            <label htmlFor="EditserBookLabel">Due Date:</label>
            <input
              required
              autoFocus
              type="date"
              className="edit-form-control"
              placeholder="Due Date"
              value={formatDate(editUserBook.dueDate)}
              onChange={(evt) => {
                const copy = { ...editUserBook };
                copy.dueDate = evt.target.value;
                setEditUserBook(copy);
              }}
            />
          </div>
        </fieldset>

        <fieldset>
          <div className="EditUserBookDetail">
            <label htmlFor="EditserBookLabel">Late Fee:</label>
            <input
              required
              autoFocus
              type="text"
              className="edit-form-control"
              placeholder="Late Fee"
              value={editUserBook.lateFee}
              onChange={(evt) => {
                const copy = { ...editUserBook };
                copy.lateFee = evt.target.value;
                setEditUserBook(copy);
              }}
            />
          </div>
        </fieldset>

        <button
          onClick={(clickEvent) => {
            handleSaveButtonClick(clickEvent);
          }}
          className="EditAdminEvent"
        >
          Save User Book
        </button>
      </div>
    </form>
);


}