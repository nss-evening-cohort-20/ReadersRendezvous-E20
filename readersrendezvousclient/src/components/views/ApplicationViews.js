import { Route, Routes } from "react-router-dom";
import { Home } from "../home/Home";
import { BookList } from "../books/BookList";
import React from "react";
import { User } from "../users/User";
import { BookDetails } from "../books/BookDetails";
import { Login } from "../auth/Login";

export const ApplicationViews = () => {
  return (
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="books" element={<BookList />} />
        <Route path="books/:bookId" element={<BookDetails />} />
        <Route path="users" element={<User />} />
      </Routes>
    </React.StrictMode>
  );
};

//<Link to="/create" element={Create}/>
///books/Id?id=${Id}
