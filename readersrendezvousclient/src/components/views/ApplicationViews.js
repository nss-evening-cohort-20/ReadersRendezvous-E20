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
import { EditUser } from "../users/EditUser"
import { AddUser } from "../users/AddUser";
import { UserDetails } from "../users/UserDetails";

export const ApplicationViews = () => {
    return (
        <React.StrictMode>
            <Routes>
                <Route path="home" element={<Home />} />
                <Route path="books" element={<BookList />} />
                <Route path="users" element={<UserList />} />
                <Route path="books/:bookId" element={<BookDetails />} />
                <Route path="users/:userId" element={<UserDetails />} />
                {/* <Route path="books/:bookId" element={<BookDetails />} /> */}
                <Route path="books/:bookId" element={<BookDetails />} />
                <Route path="books/edit/:bookEditId" element={<EditBook />} />  
                <Route path="editBook" element={<EditBook />} />
                <Route path="addBook" element={<AddBook />} />
                <Route path="adminProfile" element={<AdminProfile />} />
                <Route path="addAdmin" element={<AddAdmin />} />
                <Route path="editAdmin" element={<EditAdmin />} />
               
                <Route path="users/editUser/:userId" element={<EditUser />} />
                <Route path="addUser" element={<AddUser />} />
                
               
               
             

                
            </Routes>
        </React.StrictMode>
    );
};

//<Link to="/create" element={Create}/>
///books/Id?id=${Id}
