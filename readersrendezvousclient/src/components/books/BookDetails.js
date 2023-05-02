import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import "./Book.css";
import { Header } from "../header/Header";

export const BookDetails = () => {
    const { bookId } = useParams();
    const [book, updateBook] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `https://localhost:7229/api/Book/GetById/${bookId}`
            );
            const singleBook = await response.json();
            updateBook(singleBook);
            console.log(singleBook);
        };
        fetchData();
    }, []);

    return (
        <>
            <div>
                <Header />
                <section
                    key={`book--${book.id}`}
                    className="bookContainerDetails"
                >
                    <img src={book?.imageUrl} className="bookImgDetails" />
                    <div className="bookDetails">
                        <h2>Title: {book?.title}</h2>
                        <hr />
                        <h4>AgeRange: {book?.ageRange?.range}</h4>
                        <h4>Genre: {book?.genre?.description}</h4>
                        <h4>CoverType: {book?.CoverType?.description}</h4>
                        <h4>Quantity: {book?.quantity}</h4>
                        <h4>Author: {book?.author}</h4>
                        <h4>Publisher: {book?.publisher}</h4>
                        <h4>Language: {book?.language}</h4>
                        <h4>ISBN13: {book.isBN13}</h4>
                        <hr />
                        <h4>Description: {book?.description}</h4>
                        <hr />
                    </div>
                </section>
            </div>
        </>
    );
};
