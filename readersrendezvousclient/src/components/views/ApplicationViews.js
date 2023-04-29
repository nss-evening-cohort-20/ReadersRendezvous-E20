import { Route, Routes } from "react-router-dom";
import { Home } from "../home/Home";
import { Book } from "../books/Book";
import React from "react";
import { User } from "../users/User";

export const ApplicationViews = () => {
    return (
        <React.StrictMode>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="books" element={<Book />} />
                <Route path="user" element={<User />} />
            </Routes>
        </React.StrictMode>
    );
};

//<Link to="/create" element={Create}/>
