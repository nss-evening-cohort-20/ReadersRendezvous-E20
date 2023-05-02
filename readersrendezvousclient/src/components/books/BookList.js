import { useEffect, useState } from "react";
import React from "react";
import "./Book.css";
import { Headder } from "../headder/Headder";
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
                <div>
                    <Headder />
                </div>
                <h1 key={`books`} className="head">
                    All Books!
                </h1>
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
                                    ISBN13={book.iSBN13}
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

 

