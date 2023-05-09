import { useEffect, useState } from "react";
import React from "react";
import "./Book.css";
import { Header } from "../header/Header";
import { Book } from "./Book";
import { EditBook } from "./EditBook";

export const BookList = () => {
    const [books, setBooks] = useState([]);

    /* ------------GetAllBooks--------------- */
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `https://localhost:7229/api/Book/GetAllBooks`
            );
            const BooksData = await response.json();
            setBooks(BooksData);
            console.log(BooksData);
        };
        fetchData();
    }, []);

    return (
        <>
            <div className="bookContainer ">
                <Header key={"Header"} />
                <section key={`books`} className="books">
                    {books.map((book) => {
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
//https://watch.screencastify.com/v/F4ZpSuhaPCLwoJDOdyk8
