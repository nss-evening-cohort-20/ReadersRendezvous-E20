import { useEffect, useState } from "react";
import "./Book.css";
import { Book } from "./Book";
import { Header } from "../header/Header";
import { useNavigate, useParams } from "react-router-dom";
import { FavoriteDelete } from "./FavoriteDelete";

export const FavoriteBooks = ({ bookId }) => {
    const [FavoriteBooks, setFavoriteBooks] = useState([]);
    const { bookFavId } = useParams();
    const navigate = useNavigate();

    /* ------------GetFavoriteBooks--------------- */
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch(
            `https://localhost:7229/api/FavoriteBook/1`
            //`https://localhost:7229/api/FavoriteBook/{user.id}`
        );
        const data = await response.json();
        console.log(data);
        setFavoriteBooks(data);
    };

    //---------------------------DeleteFavoriteBook------------------------------
    const handleDelete = (bookId) => {
        fetch(`https://localhost:7229/api/FavoriteBook/DeleteById/${bookId}`, {
            method: "DELETE",
        }).then((response) => {
            fetchData();
            console.log(response);
        });
    };

    const handleUpdate = () => {
        navigate(`/books/edit/${bookId}`);
    };

    return (
        <>
            <div className="bookContainer ">
                <Header key={"Header1"} />
                <section key={`books`} className="books">
                    {FavoriteBooks.map((book) => {
                        return (
                            <>
                                {/* <div className="">{book.book.title}</div> */}
                                <div className="">
                                    <Book
                                        Id={book.book.id}
                                        ImageUrl={book.book.imageUrl}
                                        Title={book.title}
                                        // AgeRangeId={book.ageRangeId}
                                        // GenreId={book.genreId}
                                        // CoverTypeId={book.coverTypeId}
                                        // Quantity={book.quantity}
                                        // Author={book.author}
                                        // Publisher={book.publisher}
                                        // Language={book.language}
                                        // ISBN13={book.isBN13}
                                        // Description={book.description}
                                    />
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={(click) => {
                                            window.confirm(
                                                `Are you sure you want to delete ${book.book.title}?`
                                            ) && handleDelete(book.bookId);
                                        }}
                                    >
                                        DELETE
                                    </button>
                                    
                                    {" "}
                                       {/*  <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={(click) => console.log(book)}
                                    >
                                        DELETE
                                    </button>  */}
                                        {/* <FavoriteDelete
                                        Title={book.title}
                                        Id={book.book.id}
                                        Clicked={()=>
                                            window.confirm(
                                                `Are you sure you want to delete ${book.book.title}?`
                                            ) && handleDelete(book.bookId)
                                        }
                                    /> */}
                                </div>
                            </>
                        );
                    })}
                </section>
            </div>
        </>
    );
};
