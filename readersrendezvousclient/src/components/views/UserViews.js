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
import { CustomerUserBooks } from "../userBooks/CustomerUserBooks";
import { CustomerBookDetails } from "../books/CustomerBookDetails";
import { EditUser } from "../users/EditUser";
import { AddUser } from "../users/AddUser";
import { UserDetails } from "../users/UserDetails";
import { UsersProfile } from "../users/UserProfile";


export const UserViews = () => {
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
          <Route path="home" element={<Home />} />
          <Route path="books" element={<BookList />} />
          <Route path="books/:bookId" element={<CustomerBookDetails />} />
          {/* <Route path="users/:userId" element={<Userlist />} /> */}
          {/* <Route path="books/:bookId" element={<BookDetails />} /> */}
          <Route path="users" element={<User />} />
          <Route path="login" element={<Login />} />
          <Route path="Login" element={<Logout />} />
          <Route path="requests" element={<UserRequests />} />
          <Route
            path="userrequest/:requestId"
            element={<UserRequestDetails />}
          />
          <Route path="searchBook" element={<SearchBook />} />
          <Route path="aboutApp" element={<AboutApp />} />
          <Route path="userBooks" element={<CustomerUserBooks />} />

          <Route path="users/:userId" element={<UserDetails />} />
          <Route path="users/editUser/:userId" element={<EditUser />} />
          <Route path="addUser" element={<AddUser />} />
          <Route path="userProfilePage" element={<UsersProfile />} />
          {/* <Route path="user/:userId" element={<UserRequest />} /> */}
        </Route>
      </Routes>
    </React.StrictMode>
  );
};

//<Link to="/create" element={Create}/>
///books/Id?id=${Id}
