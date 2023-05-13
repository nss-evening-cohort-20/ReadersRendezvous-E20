import { Outlet, Route, Routes } from "react-router-dom";
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
import { Login } from "../auth/Login";
import { Logout } from "../auth/Logout";
import { RegisterUser } from "../auth/Register";
import { UserRequests } from "../requests/UserRequests";
import { UserRequest } from "../requests/UserRequest";
import { UserRequestDetails } from "../requests/UserRequestDetails";
import { SearchBook } from "../books/SearchBook";
import { AboutApp } from "../aboutApp/AboutApp";
import { UserBooks } from "../userBooks/UserBooks";
import { EditUserBooks } from "../userBooks/EditUserBook";

export const AdminViews = () => {
  return (
    <React.StrictMode>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Welcome to ReadersRendezvous-E20</h1>
              <div>You are logged in as Admin</div>

              <Outlet />
            </>
          }
        >
          <Route path="home" element={<Home />} />
          <Route path="books" element={<BookList />} />
          <Route path="users" element={<UserList />} />
          <Route path="books/:bookId" element={<BookDetails />} />
          {/* <Route path="users/:userId" element={<Userlist />} /> */}
          {/* <Route path="books/:bookId" element={<BookDetails />} /> */}
          <Route path="books/edit/:bookEditId" element={<EditBook />} />
          <Route path="editBook" element={<EditBook />} />
          <Route path="users" element={<User />} />
          <Route path="addBook" element={<AddBook />} />
          <Route path="adminProfile" element={<AdminProfile />} />
          <Route path="login" element={<Login />} />
          <Route path="addAdmin" element={<AddAdmin />} />
          <Route path="editAdmin/:adminId" element={<EditAdmin />} />
          <Route path="Login" element={<Logout />} />
          <Route path="requests" element={<UserRequests />} />
          <Route
            path="userrequest/:requestId"
            element={<UserRequestDetails />}
          />
          <Route path="searchBook" element={<SearchBook />} />
          <Route path="aboutApp" element={<AboutApp />} />
          <Route path="userBooks" element={<UserBooks />} />
          <Route path="editUserBook" element={<EditUserBooks />} />
          {/* <Route path="user/:userId" element={<UserRequest />} /> */}
        </Route>
      </Routes>
    </React.StrictMode>
  );
};

//<Link to="/create" element={Create}/>
///books/Id?id=${Id}
