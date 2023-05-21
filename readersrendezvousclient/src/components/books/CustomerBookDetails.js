import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import "./Book.css";
import { Header } from "../header/Header";

export const CustomerBookDetails = () => {
  const { bookId } = useParams();
  const [book, updateBook] = useState({});
  const [saved, setSaved] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://localhost:7229/api/Book/GetById/${bookId}`
      );
      const singleBook = await response.json();
      updateBook(singleBook);
      //console.log(singleBook);
      //console.log(singleBook.CoverType);
    };

    fetchData();
  }, []);
  //---------------------------DeleteBook------------------------------
  const handleDelete = () => {
    fetch(`https://localhost:7229/api/Book/DeleteById/${book.id}`, {
      method: "DELETE",
    }).then();
    navigate("/books");
  };

  const handleUpdate = () => {
    navigate(`/books/edit/${bookId}`);
  };

  //---------------------------SaveToFavorite------------------------------
  const sendToFavoriteBook = async (sendToApi) => {
    // const fetchOptions = {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(sendToApi),
    // };
    // const response = await fetch(
    //     `https://localhost:7229/addToFavorite`,
    //     fetchOptions
    // );
    // navigate("/favoriteBooks");
    // const responseJson = await response.json();
    // responseJson.bookId = `${book.id}`;
    // responseJson.userId = 1;
    // console.log(responseJson);
    // //responseJson={id: 146, bookId: 0, userId: 0}
    // return responseJson;
  };

  /* ------------------------------ */
  const handleSubmit = (event) => {
    //event.preventDefault();
    sendToFavoriteBook(book);
  };
  /* ------------------------------ */

  return (
    <>
      <div>
        <Header />
        <section
          key={`book--${book.id}`}
          className="bookContainerDetails  col-12 background container-primary"
        >
          <div className="">
            {/* <hr /> */}
            <img src={book?.imageUrl} className="bookImgDetails" />
            <div className="bookDetails">
              <h4>Title: {book?.title}</h4>
              <div>
                <button
                  onClick={(e) => handleSubmit(e)}
                  type="button"
                  className="btn btn-success"
                >
                  ADDTOLIST
                </button>
                &nbsp;
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <hr />
            <h5>AgeRange: {book?.ageRange?.range}</h5>
            <h5>Genre: {book?.genre?.description}</h5>
            <h5>CoverType: {book?.coverType?.description}</h5>
            <h5>Quantity: {book?.quantity}</h5>
            <h5>Author: {book?.author}</h5>
            <h5>Publisher: {book?.publisher}</h5>
            <h5>Language: {book?.language}</h5>
            <h5>ISBN13: {book.isbN13}</h5>
            <hr />
            <h5>Description: {book?.description}</h5>
            <hr />
          </div>
        </section>
      </div>
    </>
  );
};
