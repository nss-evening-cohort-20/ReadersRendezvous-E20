import { Link, NavLink } from "react-router-dom";
import React from "react";
import { Logout } from "../auth/Logout";
import "./Navbar.css";
import {
    CDBSidebar,
    CDBSidebarHeader,
    CDBSidebarMenuItem,
    CDBSidebarContent,
    CDBSidebarMenu,
    CDBSidebarFooter,
    CDBIcon,
} from "cdbreact";

export const Navbar = () => {
    var appUser = localStorage.getItem("app_user");
    var appUserObject = JSON.parse(appUser);

    if(appUserObject.isAdmin === true){
        return (
            <>
                <CDBSidebar
                    textColor="#FFFDFD"
                    backgroundColor="#4D5A4B"
                    className=""
                >
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
                            <NavLink to="/home" className="navLink">
                                <CDBSidebarMenuItem icon="columns">
                                    Home
                                </CDBSidebarMenuItem>
                            </NavLink>
                            <hr />
                            <NavLink to="/adminProfile" className="navLink">
                                <CDBSidebarMenuItem icon="columns">
                                    Profile Page
                                </CDBSidebarMenuItem>
                            </NavLink>
                            <hr />
                            <NavLink to="/books" className="navLink">
                                <CDBSidebarMenuItem icon="columns">
                                    All Books
                                </CDBSidebarMenuItem>
                            </NavLink>
                            <hr />
                            <NavLink to="/users" className="navLink">
                                <CDBSidebarMenuItem icon="columns">
                                    All Users
                                </CDBSidebarMenuItem>
                            </NavLink>
                            {/* <hr />
                            <NavLink to="/addUser" className="navLink">
                                <CDBSidebarMenuItem icon="columns">
                                    Add User
                                </CDBSidebarMenuItem>
                            </NavLink> */}
                            <hr />
                            <NavLink to="/addBook" className="navLink">
                                <CDBSidebarMenuItem icon="columns">
                                    Add Book
                                </CDBSidebarMenuItem>
                            </NavLink>
                            <hr />
                            <NavLink to="/requests" className="navLink">
                                <CDBSidebarMenuItem icon="columns">
                                    All Requests
                                </CDBSidebarMenuItem>
                            </NavLink>
                            <hr />
                            <NavLink to="/searchBook" className="navLink">
                                <CDBSidebarMenuItem icon="columns">
                                    Search Book
                                </CDBSidebarMenuItem>
                            </NavLink>
                            <hr />
                            <NavLink to="/favoriteBooks" className="navLink">
                                <CDBSidebarMenuItem icon="columns">
                                    Favorite Books
                                </CDBSidebarMenuItem>
                            </NavLink>
                            <hr />
                            <NavLink to="/userBooks" className="navLink">
                                <CDBSidebarMenuItem icon="columns">
                                    User Books
                                </CDBSidebarMenuItem>
                            </NavLink>
                            <hr />
                            <NavLink to="/aboutApp" className="navLink">
                                <CDBSidebarMenuItem icon="columns">
                                    AboutApp
                                </CDBSidebarMenuItem>
                            </NavLink>
                            <hr />
                            <NavLink to="/Login" className="navLink">
                                <CDBSidebarMenuItem icon="columns">
                                    <Logout />
                                </CDBSidebarMenuItem>
                            </NavLink>
                        </CDBSidebarMenu>
                    </CDBSidebarContent>
                    <hr
                        style={{
                            backgroundColor: "gray",
                            margin: "0,20px",
                        }}
                    />
                    <CDBSidebarFooter style={{ textAlign: "center" }}>
                        <div
                            className="sidebar-btn-wrapper"
                            style={{ padding: "20px 5px" }}
                        >
                            <Link
                                to="https://github.com/nss-evening-cohort-20/ReadersRendezvous-E20"
                                className="navLink"
                                style={{ textDecoration: "none" }}
                            >
                                KRAKEN©2023
                            </Link>
                            <CDBIcon fab pulse icon="github" />
                        </div>
                    </CDBSidebarFooter>
                    <CDBSidebarFooter style={{ textAlign: "center" }}>
                        <div
                            className="sidebar-btn-wrapper"
                            style={{ padding: "20px 5px" }}
                        ></div>
                    </CDBSidebarFooter>
                </CDBSidebar>
            </>
        );
    } else {
        return (
            <>
                <CDBSidebar
                    textColor="#FFFDFD"
                    backgroundColor="#4D5A4B"
                    className=""
                >
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
                            <NavLink to="/home" className="navLink">
                                <CDBSidebarMenuItem icon="columns">
                                    Home
                                </CDBSidebarMenuItem>
                            </NavLink>
                            <hr />
                            <NavLink to="/userProfilePage" className="navLink">
                                <CDBSidebarMenuItem icon="columns">
                                    Profile Page
                                </CDBSidebarMenuItem>
                            </NavLink>
                            <hr />
                            <NavLink to="/books" className="navLink">
                                <CDBSidebarMenuItem icon="columns">
                                    All Books
                                </CDBSidebarMenuItem>
                            </NavLink>
                            <hr />
                            <NavLink to="/searchBook" className="navLink">
                                <CDBSidebarMenuItem icon="columns">
                                    Search Book
                                </CDBSidebarMenuItem>
                            </NavLink>
                            <hr />
                            <NavLink to="/favoriteBooks" className="navLink">
                                <CDBSidebarMenuItem icon="columns">
                                    Favorite Books
                                </CDBSidebarMenuItem>
                            </NavLink>
                            <hr />
                            <NavLink to="/userBooks" className="navLink">
                                <CDBSidebarMenuItem icon="columns">
                                    User Books
                                </CDBSidebarMenuItem>
                            </NavLink>
                            <hr />
                            <NavLink to="/aboutApp" className="navLink">
                                <CDBSidebarMenuItem icon="columns">
                                    AboutApp
                                </CDBSidebarMenuItem>
                            </NavLink>
                            <hr />
                            <NavLink to="/Login" className="navLink">
                                <CDBSidebarMenuItem icon="columns">
                                    <Logout />
                                </CDBSidebarMenuItem>
                            </NavLink>
                        </CDBSidebarMenu>
                    </CDBSidebarContent>
                    <hr
                        style={{
                            backgroundColor: "gray",
                            margin: "0,20px",
                        }}
                    />
                    <CDBSidebarFooter style={{ textAlign: "center" }}>
                        <div
                            className="sidebar-btn-wrapper"
                            style={{ padding: "20px 5px" }}
                        >
                            <Link
                                to="https://github.com/nss-evening-cohort-20/ReadersRendezvous-E20"
                                className="navLink"
                                style={{ textDecoration: "none" }}
                            >
                                KRAKEN©2023
                            </Link>
                            <CDBIcon fab pulse icon="github" />
                        </div>
                    </CDBSidebarFooter>
                    <CDBSidebarFooter style={{ textAlign: "center" }}>
                        <div
                            className="sidebar-btn-wrapper"
                            style={{ padding: "20px 5px" }}
                        ></div>
                    </CDBSidebarFooter>
                </CDBSidebar>
            </>
        );
    }


    // return (
    //     <>
    //         <CDBSidebar
    //             textColor="#FFFDFD"
    //             backgroundColor="#4D5A4B"
    //             className=""
    //         >
    //             <CDBSidebarContent className="sidebar-content">
    //                 <CDBSidebarHeader
    //                     prefix={<i className="fa fa-bars fa-md"></i>}
    //                 >
    //                     <span
    //                         style={{
    //                             fontFamily: "Pacifico",
    //                             fontSize: "large",
    //                         }}
    //                     >
    //                         Readers Rendezvous
    //                     </span>
    //                 </CDBSidebarHeader>
    //                 <CDBSidebarMenu>
    //                     <NavLink to="/home" className="navLink">
    //                         <CDBSidebarMenuItem icon="columns">
    //                             Home
    //                         </CDBSidebarMenuItem>
    //                     </NavLink>
    //                     <hr />
    //                     <NavLink to="/books" className="navLink">
    //                         <CDBSidebarMenuItem icon="columns">
    //                             All Books
    //                         </CDBSidebarMenuItem>
    //                     </NavLink>
    //                     <hr />
    //                     <NavLink to="/users" className="navLink">
    //                         <CDBSidebarMenuItem icon="columns">
    //                             All Users
    //                         </CDBSidebarMenuItem>
    //                     </NavLink>
    //                     <hr />
    //                     <NavLink to="/addUser" className="navLink">
    //                         <CDBSidebarMenuItem icon="columns">
    //                             Add User
    //                         </CDBSidebarMenuItem>
    //                     </NavLink>
    //                     <hr />
    //                     <NavLink to="/addBook" className="navLink">
    //                         <CDBSidebarMenuItem icon="columns">
    //                             Add Book
    //                         </CDBSidebarMenuItem>
    //                     </NavLink>
    //                     <hr />
    //                     <NavLink to="/requests" className="navLink">
    //                         <CDBSidebarMenuItem icon="columns">
    //                             All Requests
    //                         </CDBSidebarMenuItem>
    //                     </NavLink>
    //                     <hr />
    //                     <NavLink to="/searchBook" className="navLink">
    //                         <CDBSidebarMenuItem icon="columns">
    //                             Search Book
    //                         </CDBSidebarMenuItem>
    //                     </NavLink>
    //                     <hr />
    //                     <NavLink to="/favoriteBooks" className="navLink">
    //                         <CDBSidebarMenuItem icon="columns">
    //                             Favorite Books
    //                         </CDBSidebarMenuItem>
    //                     </NavLink>
    //                     <hr />
    //                     <NavLink to="/adminProfile" className="navLink">
    //                         <CDBSidebarMenuItem icon="columns">
    //                             Admin Profile Page
    //                         </CDBSidebarMenuItem>
    //                     </NavLink>
    //                     <hr />
    //                     <NavLink to="/addAdmin" className="navLink">
    //                         <CDBSidebarMenuItem icon="columns">
    //                             Add Admin Page
    //                         </CDBSidebarMenuItem>
    //                     </NavLink>
    //                     <hr />
    //                     <NavLink to="/userBooks" className="navLink">
    //                         <CDBSidebarMenuItem icon="columns">
    //                             User Books
    //                         </CDBSidebarMenuItem>
    //                     </NavLink>
    //                     <hr />
    //                     <NavLink to="/aboutApp" className="navLink">
    //                         <CDBSidebarMenuItem icon="columns">
    //                             AboutApp
    //                         </CDBSidebarMenuItem>
    //                     </NavLink>
    //                     <hr />
    //                     <NavLink to="/Login" className="navLink">
    //                         <CDBSidebarMenuItem icon="columns">
    //                             <Logout />
    //                         </CDBSidebarMenuItem>
    //                     </NavLink>
    //                 </CDBSidebarMenu>
    //             </CDBSidebarContent>
    //             <hr
    //                 style={{
    //                     backgroundColor: "gray",
    //                     margin: "0,20px",
    //                 }}
    //             />
    //             <CDBSidebarFooter style={{ textAlign: "center" }}>
    //                 <div
    //                     className="sidebar-btn-wrapper"
    //                     style={{ padding: "20px 5px" }}
    //                 >
    //                     <Link
    //                         to="https://github.com/nss-evening-cohort-20/ReadersRendezvous-E20"
    //                         className="navLink"
    //                         style={{ textDecoration: "none" }}
    //                     >
    //                         KRAKEN©2023
    //                     </Link>
    //                     <CDBIcon fab pulse icon="github" />
    //                 </div>
    //             </CDBSidebarFooter>
    //             <CDBSidebarFooter style={{ textAlign: "center" }}>
    //                 <div
    //                     className="sidebar-btn-wrapper"
    //                     style={{ padding: "20px 5px" }}
    //                 ></div>
    //             </CDBSidebarFooter>
    //         </CDBSidebar>
    //     </>
    // );
};