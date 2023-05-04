import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { ReadersRendezvousApp } from "./components/ReadersRendezvousApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <ReadersRendezvousApp />
    </BrowserRouter>
);
//TODO: npm install
//TODO: npm start
//TODO: npm install react-router-dom --save
//TODO: npm install axios --save
//TODO: npm install --save cdbreact
//TODO: npm install react-router-dom@6
//Reference: https://www.youtube.com/watch?v=Nip4k4JPa3w
