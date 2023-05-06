import { Route, Routes } from "react-router-dom";
import { Home } from "../home/Home";
import { BookList } from "../books/BookList";
import React from "react";
import { User } from "../users/User";
import { BookDetails } from "../books/BookDetails";
import { EditBook } from "../books/EditBook";
import { AddBook } from "../books/AddBook";
import { AdminProfile } from "../Admin/AdminProfile";
import { AddAdmin } from "../Admin/AddAdmin";

export const ApplicationViews = () => {
    return (
        <React.StrictMode>
            <Routes>
                <Route path="home" element={<Home />} />
                <Route path="books" element={<BookList />} />
                {/* <Route path="books/:bookId" element={<BookDetails />} /> */}
                <Route path="books/:bookId" element={<BookDetails />} />
                <Route path="books/edit/:bookEditId" element={<EditBook />} />  
                <Route path="editBook" element={<EditBook />} />
                <Route path="users" element={<User />} />
                <Route path="addBook" element={<AddBook />} />
                <Route path="adminProfile" element={<AdminProfile />} />
                <Route path="addAdmin" element={<AddAdmin />} />
            </Routes>
        </React.StrictMode>
    );
};

//<Link to="/create" element={Create}/>
///books/Id?id=${Id}
