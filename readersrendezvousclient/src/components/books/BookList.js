import { useEffect, useState } from "react";
import React from "react";
import "./Book.css";
import { Header } from "../header/Header";
import { Book } from "./Book";

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
            <div classNameName="bookContainer">
                <Header />
                <section key={`books`} className="books">
                    {books.map((book) => {
                        return (
                            <>
                                <Book
                                    Id={book.id}
                                    ImageUrl={book.imageUrl}
                                    AgeRangeId={book.ageRangeId}
                                    GenreId={book.genreId}
                                    Title={book.title}
                                    CoverTypeId={book.coverTypeId}
                                    Quantity={book.quantity}
                                    Author={book.author}
                                    Publisher={book.publisher}
                                    Language={book.language}
                                    Description={book.description}
                                    ISBN13={book.isBN13}
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
