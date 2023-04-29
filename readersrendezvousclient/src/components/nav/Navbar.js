import React from "react";
import {
    CDBSidebar,
    CDBSidebarHeader,
    CDBSidebarMenuItem,
    CDBSidebarContent,
    CDBSidebarMenu,
    CDBSidebarFooter,
    CDBIcon,
} from "cdbreact";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <div
            style={{
                position: "absolute",
                /* display: "flex", */
                min_height: "100vh !important",
                /* overflow: "scroll initial", */
                /* margin: "180px !important", */
                /* // z_index: "100", */
                /* // padding_left: "10px", */
            }}
        >
            <CDBSidebar textColor="#FFFDFD" backgroundColor="#4D5A4B">
                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarHeader
                        prefix={<i className="fa fa-bars fa-md"></i>}
                    >
                        <span
                            style={{
                                fontFamily: "Pacifico",
                                fontSize: "large",
                            }}
                        >
                            Readers Rendezvous
                        </span>
                    </CDBSidebarHeader>
                    <CDBSidebarMenu>
                        <NavLink to="/dashboard" className="navLink">
                            <CDBSidebarMenuItem icon="columns">
                                Home
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <hr
                            style={{
                                backgroundColor: "gray",
                                margin: "0,20px",
                            }}
                        />
                        <NavLink to="/books" className="navLink">
                            <CDBSidebarMenuItem icon="columns">
                                All Books
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <hr
                            style={{
                                backgroundColor: "gray",
                                margin: "0,20px",
                            }}
                        />
                        <NavLink to="/dashboard" className="navLink">
                            <CDBSidebarMenuItem icon="columns">
                                All Users
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <hr
                            style={{
                                backgroundColor: "gray",
                                margin: "0,20px",
                            }}
                        />
                        <NavLink to="/dashboard" className="navLink">
                            <CDBSidebarMenuItem icon="columns">
                                Add User
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <hr
                            style={{
                                backgroundColor: "gray",
                                margin: "0,20px",
                            }}
                        />
                        <NavLink to="/dashboard" className="navLink">
                            <CDBSidebarMenuItem icon="columns">
                                Add Book
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <hr
                            style={{
                                backgroundColor: "gray",
                                margin: "0,20px",
                            }}
                        />
                        <NavLink to="/dashboard" className="navLink">
                            <CDBSidebarMenuItem icon="columns">
                                All Requests
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <hr
                            style={{
                                backgroundColor: "gray",
                                margin: "0,20px",
                            }}
                        />
                        <NavLink to="/dashboard" className="navLink">
                            <CDBSidebarMenuItem icon="columns">
                                Search Book
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <hr
                            style={{
                                backgroundColor: "gray",
                                margin: "0,20px",
                            }}
                        />
                        <NavLink to="/dashboard" className="navLink">
                            <CDBSidebarMenuItem icon="columns">
                                Extension
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <hr
                            style={{
                                backgroundColor: "gray",
                                margin: "0,20px",
                            }}
                        />
                        <NavLink to="/dashboard" className="navLink">
                            <CDBSidebarMenuItem icon="columns">
                                Profile Page
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <hr
                            style={{
                                backgroundColor: "gray",
                                margin: "0,20px",
                            }}
                        />
                        <NavLink to="/dashboard" className="navLink">
                            <CDBSidebarMenuItem icon="columns">
                                Logout
                            </CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>
                <CDBSidebarFooter style={{ textAlign: "center" }}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{ padding: "20px 5px" }}
                    >
                        <Link to="https://github.com/nss-evening-cohort-20/ReadersRendezvous-E20">
                            KRAKEN©2023
                        </Link>
                        <CDBIcon fab pulse icon="github" />
                    </div>
                </CDBSidebarFooter>
            </CDBSidebar>
        </div>
    );
};
