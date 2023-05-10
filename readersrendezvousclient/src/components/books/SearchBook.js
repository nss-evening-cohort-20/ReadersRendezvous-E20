import { useEffect, useState } from "react";
import React from "react";
import "./Book.css";
// import { Header } from "../header/Header";
// import { Book } from "./Book";

export const SearchBook = () => {
    const [books, setBooks] = useState([]);
    //const [filteredBooks, setFiltered] = useState([]);
    const [searchTerms, setSearchTerms] = useState("");
    /* ------------GetAllBooks--------------- */
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `https://localhost:7229/api/Book/GetAllBooks`
            );
            const BooksData = await response.json();
            setBooks(BooksData);
            console.log(BooksData);

            const searchBook = BooksData.filter((book) =>
                book.title.toLowerCase().startsWith(searchTerms.toLowerCase())
            );

            setBooks(searchBook);
        };
        fetchData();
    }, [searchTerms]);

    return (
        <>
            <div className="bookContainer col-lg-10">
                {/*                 <Header key={"Header"} />

 */}
                <div className="container-fluid col-lg-6">
                    <form className="d-flex">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            onChange={(e) => setSearchTerms(e.target.value)}
                        />
                        <button
                            className="btn btn-outline-success"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                </div>

                <section key={`books`} className="books">
                    {books.map((book) => {
                        return (
                            <>
                                <section
                                    className="book"
                                    key={`book--${book.id}`}
                                >
                                    <img
                                        src={book.imageUrl}
                                        className="bookImgSearch"
                                    />
                                </section>
                                {/*                                 <Book
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
                                /> */}
                            </>
                        );
                    })}
                </section>
            </div>
        </>
    );
};
