
// import React, { Children } from "react";
// import "./User.css";
// import { User } from "./User";

// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";




// export const EditUser = () => {
//     const { userEditId } = useParams();
//     const [user, setUpdateUser] = useState({
//         id: userEditId,
//         firstName: "",
//         lastName: "",
//         email: "",
//         libraryCardNumber: 0,
//         isActive: 0,
//         phoneNumber: "",
//         addressLineOne: "",
//         addressLineTwo: "",
//         city: "",
//         state: "",
//         zip: 0,
//     });

//     const navigate = useNavigate();




//     /* -------------Display----------------- */
//     useEffect(() => {
//         const fetchData = async () => {
//             const response = await fetch(
//                 `https://localhost:7229/api/User/${userEditId}`
//             );
//             //console.log(userEditId);
//             const data = await response.json();
//             setUpdateUser(data);
//             console.log(data);
//         };
//         fetchData();
//     }, []);


//     /* -------------Edit----------------- */
//     const updateUser = async (SendToAPI) => {
//         const fetchOptions = {
//             method: "PUT",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(SendToAPI),
//         };
//         const response = await fetch(
//             `https://localhost:7229/api/User/UpdateUserById/${userEditId}`,
//             fetchOptions
//         );
//         //navigate(`/users`);
//         const responseJson = await response.json();
//         console.log(responseJson);
//         return responseJson;
//     };

//     /* ------------------------------ */
//     const handleSaveButtonClick = (e) => {
//         e.preventDefault();
//         updateUser(user);
//         navigate(`/users/${userEditId}`);
//     };
//     /* ------------------------------ */



//     return (
//         <>
//         <div className= "container" >

//         <form id="userForm" >
//             <div className="row g-3" >
//                 <h2 className="profile__User" > Edit User: </h2>


//                     < div className = "form-group" >
//                         <label htmlFor="email" > Email: </label>
//                             < input
//     type = "text"
//     className = "form-control"
//     id = "email"
//     name = "email"
//     placeholder = ""
//     value = { user.email }
//     required
//     autoFocus
//     onChange = {(evt) => {
//     const copy = { ...user };
//     copy.email = evt.target.value;
//     setUpdateUser(copy);
// }}
// />
//     < /div>

//     < div className = "form-group" >
//         <label htmlFor="name" > Title: </label>
//             < input
// type = "text"
// className = "form-control"
// id = "title"
// name = "title"
// placeholder = ""
// value = { book.title }
// required
// autoFocus
// onChange = {(evt) => {
//     const copy = { ...book };
//     copy.title = evt.target.value;
//     setUpdateBook(copy);
// }}
// />
//     < /div>

//     < div className = "form-group col-sm-3" >
//         <label htmlFor="name" > AgeRange: </label>
//             < select
// value = { book.ageRange.range }
// className = "form-select"
// onChange = {(evt) => {
//     const copy = { ...book };
//     copy.ageRange.range = parseInt(
//         evt.target.value
//     );
//     setUpdateBook(copy);
// }}
//                                 >
//     <option value={ book.ageRange.range }>
//         { book.ageRange.range }
//         < /option>
//         < option value = "1" > Children < /option>
//             < option value = "2" > Teens < /option>
//                 < option value = "3" > Adults < /option>
//                     < /select>
//                     < /div>

//                     < div className = "form-group col-sm-3" >
//                         <label htmlFor="name" > Genre: </label>
//                             < select
// value = { book.genre.description }
// className = "form-select"
// onChange = {(evt) => {
//     const copy = { ...book };
//     copy.genre.description = parseInt(
//         evt.target.value
//     );
//     setUpdateBook(copy);
// }}
//                                 >
//     <option value={ book.genre.description }>
//         { book.genre.description }
//         < /option>
//         < option value = "1" > Fiction < /option>
//             < option value = "2" > Non - Fiction < /option>
//                 < option value = "3" > Poetry < /option>
//                     < option value = "4" > Drama < /option>
//                         < option value = "5" > Comedy < /option>
//                             < option value = "6" > Romance < /option>
//                                 < option value = "7" > Mystery < /option>
//                                     < option value = "8" > Science fiction < /option>
//                                         < option value = "9" > Fantasy < /option>
//                                             < option value = "10" > Horror < /option>
//                                                 < /select>
//                                                 < /div>

//                                                 < div className = "form-group col-sm-3" >
//                                                     <label htmlFor="name" > CoverType: </label>
// {/*                                 <input
//                                     type="text"
//                                     className="form-control"
//                                     id="coverType"
//                                     name="coverType"
//                                     placeholder=""
//                                     value={book.coverType.description}
//                                     required
//                                     autoFocus
//                                     onChange={(evt) => {
//                                         const copy = { ...book };
//                                         copy.coverType.description =
//                                             evt.target.value;
//                                         setUpdateBook(copy);
//                                     }}
//                                 /> */}

// <select
//                                     value={ book.coverType.description }
// className = "form-select"
// onChange = {(evt) => {
//     const copy = { ...book };
//     copy.coverType.description = parseInt(
//         evt.target.value
//     );
//     setUpdateBook(copy);
// }}
//                                 >
//     <option value={ book.coverType.description }>
//         { book.coverType.description }
//         < /option>
//         < option value = "1" > Hardcover < /option>
//             < option value = "2" > Paperback < /option>
//                 < /select>
//                 < /div>

//                 < div className = "form-group col-sm-3" >
//                     <label htmlFor="name" > Quantity: </label>
//                         < input
// type = "number"
// className = "form-control"
// id = "quantity"
// name = "quantity"
// placeholder = ""
// value = { book.quantity }
// min = "1"
// max = "100"
// required
// autoFocus
// onChange = {(evt) => {
//     const copy = { ...book };
//     copy.quantity = evt.target.value;
//     setUpdateBook(copy);
// }}
// />
//     < /div>

//     < div className = "form-group" >
//         <label htmlFor="name" > Author: </label>
//             < input
// type = "text"
// className = "form-control"
// id = "author"
// name = "author"
// placeholder = ""
// value = { book.author }
// required
// autoFocus
// onChange = {(evt) => {
//     const copy = { ...book };
//     copy.author = evt.target.value;
//     setUpdateBook(copy);
// }}
// />
//     < /div>

//     < div className = "form-group" >
//         <label htmlFor="name" > Publisher: </label>
//             < input
// type = "text"
// className = "form-control"
// id = "publisher"
// name = "publisher"
// placeholder = ""
// value = { book.publisher }
// required
// autoFocus
// onChange = {(evt) => {
//     const copy = { ...book };
//     copy.publisher = evt.target.value;
//     setUpdateBook(copy);
// }}
// />
//     < /div>

//     < div className = "form-group" >
//         <label htmlFor="name" > Language: </label>
//             < input
// type = "text"
// className = "form-control"
// id = "language"
// name = "language"
// placeholder = ""
// value = { book.language }
// required
// autoFocus
// onChange = {(evt) => {
//     const copy = { ...book };
//     copy.language = evt.target.value;
//     setUpdateBook(copy);
// }}
// />
//     < /div>

//     < div className = "form-group" >
//         <label htmlFor="name" > ISBN13: </label>
//             < input
// type = "text"
// className = "form-control"
// id = "isbN13"
// name = "isbN13"
// placeholder = ""
// value = { book.isbN13 }
// required
// autoFocus
// onChange = {(evt) => {
//     const copy = { ...book };
//     copy.isbN13 = evt.target.value;
//     setUpdateBook(copy);
// }}
// />
//     < /div>

//     < div className = "form-group" >
//         <label htmlFor="description" >
//             Description:
// </label>
//     < textarea
// required
// autoFocus
// type = "textArea"
// rows = "4"
// cols = "50"
// maxlength = "200"
// className = "form-control"
// id = "description"
// name = "description"
// placeholder = ""
// value = { book.description }
// onChange = {(evt) => {
//     const copy = { ...book };
//     copy.description = evt.target.value;
//     setUpdateBook(copy);
// }}
// />
//     < /div>

// {/* </fieldset> */ }
// </div>

//     < button
// onClick = {(e) => handleSaveButtonClick(e)}
// className = "btn btn-primary"
// type = "submit"
//     >
//     Update Book
//         < /button>
//         < /form>
//         < /div>
//         < /div>
//         < />
//     );
// };

// };
