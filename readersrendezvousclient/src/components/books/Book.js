import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";

export const Book = () => {
    const [id, setId] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [ageRangeId, setAgeRangeId] = useState("");
    const [genreId, setGenreId] = useState("");
    const [title, setTitle] = useState("");
    const [coverTypeId, setCoverTypeId] = useState("");
    const [quantity, setQuantity] = useState("");
    const [author, setAuthor] = useState("");
    const [publisher, setPublisher] = useState("");
    const [language, setLanguage] = useState("");
    const [description, setDescription] = useState("");
    const [iSBN13, setISBN13] = useState("");
    const [books, setBooks] = useState([]);

    // useEffect(() => {
    //     (async () => await Load())();
    // }, []);
    // /* ------------GetAllBooks--------------- */

    // async function Load() {
    //     // try {
    //     const result = await axios.get(
    //         `https://localhost:7229/api/Book/GetAllBooks`
    //     );
    //     setBooks(result.data);
    //     console.log(result.data);
    //     // } catch (err) {
    //     //     alert(err);
    //     //     console.info(err);
    //     // }
    // }

    // // // This should already be declared in your API file
    // // var app = express();
    // // // ADD THIS
    // // var cors = require("cors");
    // // app.use(cors());
    // // res.header("Access-Control-Allow-Origin");
    /* ------------------------GetAllBooks---------------------------- */
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

    /* ------------AddBook--------------- */
    // async function save(event) {
    //     event.preventDefault();
    //     try {
    //         await axios.post("https://localhost:7229/AddBook", {
    //             id: id,
    //             imageUrl: imageUrl,
    //             ageRangeId: ageRangeId,
    //             genreId: genreId,
    //             title: title,
    //             coverTypeId: coverTypeId,
    //             quantity: quantity,
    //             author: author,
    //             publisher: publisher,
    //             language: language,
    //             description: description,
    //             iSBN13: iSBN13,
    //         });
    //         alert("Book Added Successfully");
    //         setId("");
    //         setImageUrl("");
    //         setAgeRangeId("");
    //         setGenreId("");
    //         setTitle("");
    //         setCoverTypeId("");
    //         setQuantity("");
    //         setAuthor("");
    //         setPublisher("");
    //         setLanguage("");
    //         setDescription("");
    //         setISBN13("");

    //         Load();
    //     } catch (err) {
    //         alert(err);
    //         console.info(err);
    //         console.log(err.response.data);
    //     }
    // }
    // /* Edit */
    // async function EditBook(books) {
    //     setImageUrl(books.imageUrl);
    //     setAgeRangeId(books.ageRangeId);
    //     setGenreId(books.genreId);
    //     setTitle(books.title);
    //     setCoverTypeId(books.coverTypeId);
    //     setQuantity(books.quantity);
    //     setAuthor(books.author);
    //     setPublisher(books.publisher);
    //     setLanguage(books.language);
    //     setDescription(books.description);
    //     setISBN13(books.iSBN13);

    //     setId(books.id);
    // }
    // /* Delete */
    // async function DeleteBook(iSBN13) {
    //     await axios.delete(
    //         "https://localhost:7277/api/Books/DeleteStudent/" + iSBN13
    //     );
    //     alert("Student deleted Successfully");
    //     setId("");
    //     setImageUrl("");
    //     setAgeRangeId("");
    //     setGenreId("");
    //     setTitle("");
    //     setCoverTypeId("");
    //     setQuantity("");
    //     setAuthor("");
    //     setPublisher("");
    //     setLanguage("");
    //     setDescription("");
    //     setISBN13("");
    //     Load();
    // }

    return (
      <></>
    );
};
 {/*  // <>
        //     <div className="container mt-5 tableContainer">
        //         <h1>Book Details</h1>
        //         <div className="container mt-4">
        //             <form>
        //                 <div className="form-group">
        //                     <label>Id</label>
        //                     <input
        //                         type="number"
        //                         className="form-control"
        //                         id="id"
        //                         hidden
        //                         value={id}
        //                         onChange={(event) => {
        //                             setId(event.target.valueAsNumber);
        //                         }}
        //                     />
        //                 </div>

        //                 <div className="form-group">
        //                     <label>ImageUrl</label>
        //                     <input
        //                         type="text"
        //                         className="form-control"
        //                         id="imageUrl"
        //                         value={imageUrl}
        //                         onChange={(event) => {
        //                             setImageUrl(event.target.value);
        //                         }}
        //                     />
        //                 </div>

        //                 <div className="form-group">
        //                     <label>AgeRangeId</label>
        //                     <input
        //                         type="number"
        //                         className="form-control"
        //                         id="ageRangeId"
        //                         value={ageRangeId}
        //                         onChange={(event) => {
        //                             setAgeRangeId(event.target.valueAsNumber);
        //                         }}
        //                     />
        //                 </div>

        //                 <div className="form-group">
        //                     <label>GenreId</label>
        //                     <input
        //                         type="number"
        //                         className="form-control"
        //                         id="genreId"
        //                         value={genreId}
        //                         onChange={(event) => {
        //                             setGenreId(event.target.valueAsNumber);
        //                         }}
        //                     />
        //                 </div>

        //                 <div className="form-group">
        //                     <label>Title</label>
        //                     <input
        //                         type="text"
        //                         className="form-control"
        //                         id="title"
        //                         value={title}
        //                         onChange={(event) => {
        //                             setTitle(event.target.value);
        //                         }}
        //                     />
        //                 </div>

        //                 <div className="form-group">
        //                     <label>CoverTypeId</label>
        //                     <input
        //                         type="number"
        //                         className="form-control"
        //                         id="coverTypeId"
        //                         value={coverTypeId}
        //                         onChange={(event) => {
        //                             setCoverTypeId(event.target.valueAsNumber);
        //                         }}
        //                     />
        //                 </div>

        //                 <div className="form-group">
        //                     <label>Quantity</label>
        //                     <input
        //                         type="number"
        //                         className="form-control"
        //                         id="quantity"
        //                         value={quantity}
        //                         onChange={(event) => {
        //                             setQuantity(event.target.valueAsNumber);
        //                         }}
        //                     />
        //                 </div>

        //                 <div className="form-group">
        //                     <label>Author</label>
        //                     <input
        //                         type="text"
        //                         className="form-control"
        //                         id="author"
        //                         value={author}
        //                         onChange={(event) => {
        //                             setAuthor(event.target.value);
        //                         }}
        //                     />
        //                 </div>

        //                 <div className="form-group">
        //                     <label>Publisher</label>
        //                     <input
        //                         type="text"
        //                         className="form-control"
        //                         id="publisher"
        //                         value={publisher}
        //                         onChange={(event) => {
        //                             setPublisher(event.target.value);
        //                         }}
        //                     />
        //                 </div>

        //                 <div className="form-group">
        //                     <label>Language</label>
        //                     <input
        //                         type="text"
        //                         className="form-control"
        //                         id="language"
        //                         value={language}
        //                         onChange={(event) => {
        //                             setLanguage(event.target.value);
        //                         }}
        //                     />
        //                 </div>

        //                 <div className="form-group">
        //                     <label>Description</label>
        //                     <input
        //                         type="text"
        //                         className="form-control"
        //                         id="description"
        //                         value={description}
        //                         onChange={(event) => {
        //                             setDescription(event.target.value);
        //                         }}
        //                     />
        //                 </div>

        //                 <div className="form-group">
        //                     <label>ISBN13</label>
        //                     <input
        //                         type="number"
        //                         className="form-control"
        //                         id="iSBN13"
        //                         value={iSBN13}
        //                         onChange={(event) => {
        //                             setISBN13(event.target.valueAsNumber);
        //                         }}
        //                     />
        //                 </div>

        //                 <div>
        //                     <button
        //                         className="btn btn-primary mt-4"
        //                         onClick={save}
        //                     >
        //                         Register
        //                     </button>
        //                     <button
        //                         className="btn btn-warning mt-4"
        //                         onClick={EditBook}
        //                     >
        //                         Update
        //                     </button>
        //                 </div>
        //             </form>
        //         </div>
        //         <br></br>
        //         {/* <div className="container tableContainer"> */}
        //         <table className="table table-dark" align="center">
        //             <thead>
        //                 <tr>
        //                     <th scope="col">bookId</th>
        //                     <th scope="col">ImageUrl</th>
        //                     <th scope="col">AgeRangeId</th>
        //                     <th scope="col">GenreId</th>
        //                     <th scope="col">Title</th>
        //                     <th scope="col">CoverTypeId</th>
        //                     <th scope="col">Quantity</th>
        //                     <th scope="col">Author</th>
        //                     <th scope="col">Publisher</th>
        //                     <th scope="col">Language</th>
        //                     <th scope="col">Description</th>
        //                     <th scope="col">ISBN13</th>
        //                     <th scope="col">Options</th>
        //                 </tr>
        //             </thead>

        //             {books.map(function fn(book) {
        //                 return (
        //                     <tbody>
        //                         <tr>
        //                             <th scope="row">{book.id} </th>
        //                             <td>{book.imageUrl}</td>
        //                             <td>{book.ageRangeId}</td>
        //                             <td>{book.genreId}</td>
        //                             <td>{book.title}</td>
        //                             <td>{book.coverTypeId}</td>
        //                             <td>{book.quantity}</td>
        //                             <td>{book.author}</td>
        //                             <td>{book.publisher}</td>
        //                             <td>{book.language}</td>
        //                             <td>{book.description}</td>
        //                             <td>{book.iSBN13}</td>

        //                             <td>
        //                                 <button
        //                                     type="button"
        //                                     className="btn btn-warning"
        //                                     onClick={() => EditBook(book)}
        //                                 >
        //                                     Edit
        //                                 </button>
        //                                 <>..</>
        //                                 <button
        //                                     type="button"
        //                                     className="btn btn-danger"
        //                                     onClick={() => DeleteBook(book.id)}
        //                                 >
        //                                     Delete
        //                                 </button>
        //                             </td>
        //                         </tr>
        //                     </tbody>
        //                 );
        //             })}
        //         </table>
        //     </div>
        // </> */}