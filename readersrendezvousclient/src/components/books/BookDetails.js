import { useEffect, useState } from "react";
import React from "react";
import "./Book.css";
import { useParams } from "react-router";
import { Headder } from "../headder/Headder";

export const BookDetails = () => {
    const { bookId } = useParams();
    const { book, updateBook } = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `https://localhost:7229/api/Book/GetAllBooks/Id?id=${bookId}`
            );
            const BookData = await response.json();
            console.log(response);
            updateBook(BookData[0]);
            //updateBook(BookData);
            console.log(BookData[0]);
        };
        fetchData();
    }, [bookId]);
//https://localhost:7229/api/Book/GetAllBooks/Id?id=1
    return (
        <>
{/*         <div classNameName="bookContainer">
        <div>
        <Headder />
                </div>
                <h1 key={`books`} className="head">
                    A Book!
                </h1>
                <section key={`books`} className="books">
                    <section className="book" key={`book--${Id}`}>
                        <img src={ImageUrl} className="bookImg" />
                    </section>
                    <h1>{Id}</h1>
                </section>
            </div>  */}




            <section className="book">
                <div>Title: {book?.title}</div>
{/*                 <header className="book__header">{book?.}</header>
                
                <div>Specialty: {book?.specialty}</div>
                <div>Rate: {book?.rate}</div>
                <footer className="book__footer">
                    Currently Working on
                    {book?.bookTickets?.length}
                </footer> */}
            </section>


        </>
    );
};
