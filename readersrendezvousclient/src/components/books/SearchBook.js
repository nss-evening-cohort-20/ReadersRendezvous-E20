import { useEffect, useState } from "react";
import React from "react";
import "./Book.css";
import { Book } from "./Book";

export const SearchBook = (title) => {
    const [books, setBooks] = useState([]);
    const [searchTerms, setSearchTerms] = useState("");
    const [dropDown1, setDropDown1] = useState([]);
    const [dropDown2, setDropDown2] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);

    /* ------------GetAllBooks--------------- */
    useEffect(() => {
        //console.log(" useEffect 1");
        const fetchData = async () => {
            const response = await fetch(
                `https://localhost:7229/api/Book/GetAllBooksInfo`
            );
            const BooksData = await response.json();
            setBooks(BooksData);
            //searchByTitle------------------------------------------
            const searchByTitle = BooksData.filter((book) =>
                book.title.toLowerCase().startsWith(searchTerms.toLowerCase())
            );
            setBooks(searchByTitle);

            //searchByAuthor------------------------------------------
            // const searchByAuthor = BooksData.filter((book) =>
            //     book.author.toLowerCase().startsWith(searchTerms.toLowerCase())
            // );
            // setBooks(searchByAuthor);
            //searchByBoth------------------------------------------
        };
        fetchData();
    }, [searchTerms]);

    /* -------filter1------- */
    useEffect(() => {
        //console.log(" useEffect 2");
        if (dropDown1 > 0) {
            const selectBook = books.filter(
                (book) => book.ageRange.id === dropDown1
            );
            setFilteredBooks(selectBook);
        } else {
            setFilteredBooks(books);
        }
    }, [dropDown1, books]);

    /* -------filter2------- */
    useEffect(() => {
        //console.log(" useEffect 2");
        if (dropDown2 > 0) {
            const selectBook = books.filter(
                (book) => book.genre.id === dropDown2
            );
            setFilteredBooks(selectBook);
        } else {
            setFilteredBooks(books);
        }
    }, [dropDown2, books]);

    return (
        <>
            <div>
                {/* ---------------------------HEAD---------------------------------- */}
                <nav className="navbar navbar-light bg-light navbar-expand-lg bg-body-tertiary">
                    <a href="#">
                        {" "}
                        <img
                            src={require(`../images/Header2_Logo.jpg`)}
                            alt=""
                            style={{ width: "250px" }}
                            className="navbar-brand"
                        />
                    </a>

                    <form className="d-flex ">
                        <input
                            className="form-control me-2 col-sm-5"
                            type="search"
                            placeholder="Search by Title"
                            aria-label="Search"
                            onChange={(e) => setSearchTerms(e.target.value)}
                        />

                        {/* --------------------By AgeRange---------------- */}
                        <div className="form-group col-sm-5">
                            <select
                                className="form-select"
                                name="ageRange"
                                required
                                onChange={(e) => {
                                    const select = parseInt(e.target.value);
                                    console.log(select);
                                    setDropDown1(select);
                                }}
                            >
                                <option id="ageRange--default" value={0}>
                                    All books By Age Range
                                </option>
                                <option value={1}>Children</option>
                                <option value={2}>Teens</option>
                                <option value={3}>Adults</option>
                            </select>
                        </div>

                        {/* --------------------By Genre---------------- */}
                        <div className="form-group col-sm-5">
                            <select
                                className="form-select"
                                name="genre"
                                required
                                onChange={(e) => {
                                    const select = parseInt(e.target.value);
                                    console.log(select);
                                    setDropDown2(select);
                                }}
                            >
                                <option id="genre--default" value={0}>
                                    All books By Genre
                                </option>
                                <option value={1}>Fiction</option>
                                <option value={2}>Non-Fiction</option>
                                <option value={3}>Poetry</option>
                                <option value={4}>Drama</option>
                                <option value={5}>Comedy</option>
                                <option value={6}>Romance</option>
                                <option value={7}>Mystery</option>
                                <option value={8}>Science fiction</option>
                                <option value={9}>Fantasy</option>
                                <option value={10}>Horror</option>
                            </select>
                        </div>
                    </form>
                    <hr />
                </nav>
                {/* ---------------------------HEAD---------------------------------- */}

                <section key={`books`} className="books">
                    {filteredBooks.map((book) => {
                        return (
                            <>
                                <Book
                                    Id={book.id}
                                    ImageUrl={book.imageUrl}
                                    Title={book.title}
                                    AgeRangeId={book.ageRangeId}
                                    GenreId={book.genreId}
                                    CoverTypeId={book.coverTypeId}
                                    Quantity={book.quantity}
                                    Author={book.author}
                                    Publisher={book.publisher}
                                    Language={book.language}
                                    ISBN13={book.isBN13}
                                    Description={book.description}
                                />
                            </>
                        );
                    })}
                </section>
            </div>
        </>
    );
};
