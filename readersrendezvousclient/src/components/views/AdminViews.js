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
import { UserRequestsAdminView } from "../requests/UserRequestsAdminView";
import { UserDetails } from "../users/UserDetails";
import { EditUser } from "../users/EditUser";
import { AdminUserBooks } from "../userBooks/AdminUserBooks";

export const AdminViews = () => {
  return (
    <React.StrictMode>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Outlet />
            </>
          }
        >
          <Route path="home" element={<AdminProfile />} />
          <Route path="books" element={<BookList />} />
          <Route path="users" element={<UserList />} />
          <Route path="books/:bookId" element={<BookDetails />} />
          {/* <Route path="users/:userId" element={<Userlist />} /> */}
          {/* <Route path="books/:bookId" element={<BookDetails />} /> */}
          <Route path="books/edit/:bookEditId" element={<EditBook />} />
          <Route path="editBook" element={<EditBook />} />
          {/* <Route path="users" element={<User />} /> */}
          <Route path="users/:userId" element={<UserDetails />} />
          <Route path="users/editUser/:userId" element={<EditUser />} />
          <Route path="addBook" element={<AddBook />} />
          <Route path="adminProfile" element={<AdminProfile />} />
          <Route path="login" element={<Login />} />
          <Route path="addAdmin" element={<AddAdmin />} />
          <Route path="editAdmin/:adminId" element={<EditAdmin />} />
          <Route path="Login" element={<Logout />} />
          <Route path="requests" element={<UserRequestsAdminView />} />
          <Route
            path="userrequest/:requestId"
            element={<UserRequestDetails />}
          />
          <Route path="searchBook" element={<SearchBook />} />
          <Route path="aboutApp" element={<AboutApp />} />
          <Route path="userBooks" element={<AdminUserBooks />} />
          <Route path="editUserBook/:userBookId" element={<EditUserBooks />} />
          {/* <Route path="user/:userId" element={<UserRequest />} /> */}
        </Route>
      </Routes>
    </React.StrictMode>
  );
};

//<Link to="/create" element={Create}/>
///books/Id?id=${Id}
