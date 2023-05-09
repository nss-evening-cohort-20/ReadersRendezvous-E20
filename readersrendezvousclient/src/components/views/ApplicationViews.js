import { Route, Routes } from "react-router-dom";
import { Home } from "../home/Home";
import { BookList } from "../books/BookList";
import React from "react";
import { User } from "../users/User";
import { BookDetails } from "../books/BookDetails";
import { UserList } from "../users/UserList";
import { EditBook } from "../books/EditBook";
import { AddBook } from "../books/AddBook";
import { AdminProfile } from "../Admin/AdminProfile";
import { AddAdmin } from "../Admin/AddAdmin";
import { EditAdmin } from "../Admin/EditAdmin";


export const ApplicationViews = () => {
    return (
        <React.StrictMode>
            <Routes>
                <Route path="home" element={<Home />} />
                <Route path="books" element={<BookList />} />
                <Route path="users" element={<UserList />} />
                <Route path="books/:bookId" element={<BookDetails />} />
                {/* <Route path="users/:userId" element={<Userlist />} /> */}
                {/* <Route path="books/:bookId" element={<BookDetails />} /> */}
                <Route path="books/:bookId" element={<BookDetails />} />
                <Route path="books/edit/:bookEditId" element={<EditBook />} />  
                <Route path="editBook" element={<EditBook />} />
                <Route path="users" element={<User />} />
                <Route path="addBook" element={<AddBook />} />
                <Route path="adminProfile" element={<AdminProfile />} />
                <Route path="addAdmin" element={<AddAdmin />} />
                <Route path="editAdmin/:adminId" element={<EditAdmin />} />
            </Routes>
        </React.StrictMode>
    );
};

//<Link to="/create" element={Create}/>
///books/Id?id=${Id}
