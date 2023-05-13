import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import "./Book.css";
import { Header } from "../header/Header";

export const BookDetails = () => {
  const appUser = localStorage.getItem("app_user");
  const appUserObject = JSON.parse(appUser);
  const { bookId } = useParams();
  const [book, updateBook] = useState({});
  const [saved, setSaved] = useState(false);
  const [disableHoldButton, setDisableHoldButton] = useState(false);

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

  const RequestHoldHandler = () => {
    const holdRequest = {
      id: 0,
      userId: appUserObject?.id,
      bookId: bookId,
      requestTS: new Date().toISOString(),
      requestTypeId: 1,
    };
    console.log(holdRequest);
    // TODO: Perform the fetch() to POST the object to the API
    const postHoldRequest = async () => {
      try {
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(holdRequest),
        };
        const response = await fetch(
          `https://localhost:7229/api/UserRequests/AddHoldRequest`,
          options
        );
        const result = await response.json();
        console.log("Success:", result);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    postHoldRequest();
    setDisableHoldButton(true);
  };

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
                    `Are you sure you want to delete ${book.title}?`
                  ) && handleDelete(click);
                }}
              >
                DELETE
              </button>
              &nbsp;
              <button
                onClick={(e) => handleSubmit(e)}
                type="button"
                className="btn btn-success"
              >
                ADDTOLIST
              </button>
              &nbsp;
              {!appUserObject?.isAdmin && (
                <button
                  onClick={RequestHoldHandler}
                  type="button"
                  className={
                    !disableHoldButton ? "btn btn-primary" : "btn btn-secondary"
                  }
                  disabled={disableHoldButton}
                >
                  Request Hold
                </button>
              )}
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
