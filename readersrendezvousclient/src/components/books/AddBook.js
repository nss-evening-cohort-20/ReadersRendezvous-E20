import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddBook = () => {
    /*     const [book, setAddBook] = useState({
        id: 0,
        imageUrl: "",
        ageRange: { id: 0, range: "" },
        genre: { id: 0, description: "" },
        title: "",
        coverType: { id: 0, description: "" },
        quantity: 0,
        author: "",
        publisher: "",
        language: "",
        description: "",
        isbN13: "",
    }); */

    const [book, setAddBook] = useState({
        //id: 0,
        imageUrl: "",
        ageRangeId: 0,
        genreId: 0,
        title: "",
        coverTypeId: 0,
        quantity: 0,
        author: "",
        publisher: "",
        language: "",
        description: "",
        isbN13: "",
    });

    const navigate = useNavigate();

    /* -------------Add Book----------------- */
    const sendNewBook = async (SendToAPI) => {
        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(SendToAPI),
        };
        const response = await fetch(
            `https://localhost:7229/AddBook`,
            fetchOptions
        );
        navigate("/books");
        const responseJson = await response.json();
        return responseJson;
    };
    /* ------------------------------ */
    const handleSubmit = (event) => {
        event.preventDefault();
        sendNewBook(book);
    };
    /* ------------------------------ */

    return (
        <>
            <div className="container">
                <div className=" col-lg-10">
                    {" "}
                    {/* col-sm-6  col-md-7 */}
                    <form id="bookForm" className="needs-validation" novalidate>
                        <div className="row g-3">
                            <h2 className="profile__title">Edit Book:</h2>
                            {/* <fieldset> */}

                            <div className="form-group">
                                <label htmlFor="name">ImageUrl:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="imageUrl"
                                    name="imageUrl"
                                    placeholder=""
                                    value={book.imageUrl}
                                    required
                                    autoFocus
                                    onChange={(evt) => {
                                        const copy = { ...book };
                                        copy.imageUrl = evt.target.value;
                                        setAddBook(copy);
                                    }}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="name">Title:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    name="title"
                                    placeholder=""
                                    value={book.title}
                                    required
                                    autoFocus
                                    onChange={(evt) => {
                                        const copy = { ...book };
                                        copy.title = evt.target.value;
                                        setAddBook(copy);
                                    }}
                                />
                            </div>

                            <div className="form-group col-sm-3">
                                <label htmlFor="name">AgeRange:</label>
                                <select
                                    value={book.ageRangeId}
                                    className="form-select"
                                    onChange={(evt) => {
                                        const copy = { ...book };
                                        copy.ageRangeId = parseInt(
                                            evt.target.value
                                        );
                                        setAddBook(copy);
                                    }}
                                >
                                    <option value={book.ageRangeId}>
                                        {book.ageRangeId}
                                    </option>
                                    <option value="1">Children</option>
                                    <option value="2">Teens</option>
                                    <option value="3">Adults</option>
                                </select>
                            </div>

                            <div className="form-group col-sm-3">
                                <label htmlFor="name">Genre:</label>
                                <select
                                    value={book.genreId}
                                    className="form-select"
                                    onChange={(evt) => {
                                        const copy = { ...book };
                                        copy.genreId = parseInt(
                                            evt.target.value
                                        );
                                        setAddBook(copy);
                                    }}
                                >
                                    <option value={book.genreId}>
                                        {book.genreId}
                                    </option>
                                    <option value="1">Fiction</option>
                                    <option value="2">Non-Fiction</option>
                                    <option value="3">Poetry</option>
                                    <option value="4">Drama</option>
                                    <option value="5">Comedy</option>
                                    <option value="6">Romance</option>
                                    <option value="7">Mystery</option>
                                    <option value="8">Science fiction</option>
                                    <option value="9">Fantasy</option>
                                    <option value="10">Horror</option>
                                </select>
                            </div>

                            <div className="form-group col-sm-3">
                                <label htmlFor="name">CoverType:</label>
                                {/*                                 <input
                            type="text"
                            className="form-control"
                            id="coverType"
                            name="coverType"
                            placeholder=""
                            value={book.coverType.description}
                            required
                            autoFocus
                            onChange={(evt) => {
                                const copy = { ...book };
                                copy.coverType.description =
                                    evt.target.value;
                                setAddBook(copy);
                            }}
                        /> */}

                                <select
                                    value={book.coverTypeId}
                                    className="form-select"
                                    onChange={(evt) => {
                                        const copy = { ...book };
                                        copy.coverTypeId = parseInt(
                                            evt.target.value
                                        );
                                        setAddBook(copy);
                                    }}
                                >
                                    <option value={book.coverTypeId}>
                                        {book.coverTypeId}
                                    </option>
                                    <option value="1">Hardcover</option>
                                    <option value="2">Paperback</option>
                                </select>
                            </div>

                            <div className="form-group col-sm-3">
                                <label htmlFor="name">Quantity:</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="quantity"
                                    name="quantity"
                                    placeholder=""
                                    value={book.quantity}
                                    min="1"
                                    max="100"
                                    required
                                    autoFocus
                                    onChange={(evt) => {
                                        const copy = { ...book };
                                        copy.quantity = evt.target.value;
                                        setAddBook(copy);
                                    }}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="name">Author:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="author"
                                    name="author"
                                    placeholder=""
                                    value={book.author}
                                    required
                                    autoFocus
                                    onChange={(evt) => {
                                        const copy = { ...book };
                                        copy.author = evt.target.value;
                                        setAddBook(copy);
                                    }}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="name">Publisher:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="publisher"
                                    name="publisher"
                                    placeholder=""
                                    value={book.publisher}
                                    required
                                    autoFocus
                                    onChange={(evt) => {
                                        const copy = { ...book };
                                        copy.publisher = evt.target.value;
                                        setAddBook(copy);
                                    }}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="name">Language:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="language"
                                    name="language"
                                    placeholder=""
                                    value={book.language}
                                    required
                                    autoFocus
                                    onChange={(evt) => {
                                        const copy = { ...book };
                                        copy.language = evt.target.value;
                                        setAddBook(copy);
                                    }}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="name">ISBN13:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="isbN13"
                                    name="isbN13"
                                    placeholder=""
                                    value={book.isbN13}
                                    required
                                    autoFocus
                                    onChange={(evt) => {
                                        const copy = { ...book };
                                        copy.isbN13 = evt.target.value;
                                        setAddBook(copy);
                                    }}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="description">
                                    Description:
                                </label>
                                <textarea
                                    required
                                    autoFocus
                                    type="textArea"
                                    rows="4"
                                    cols="50"
                                    maxlength="200"
                                    className="form-control"
                                    id="description"
                                    name="description"
                                    placeholder=""
                                    value={book.description}
                                    onChange={(evt) => {
                                        const copy = { ...book };
                                        copy.description = evt.target.value;
                                        setAddBook(copy);
                                    }}
                                />
                            </div>

                            {/* </fieldset> */}
                        </div>

                        <button
                            onClick={(e) => handleSubmit(e)}
                            className="btn btn-primary"
                        >
                            Add Book
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};
