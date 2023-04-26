# ReadersRendezvous-E20

![Readers-Rendezvous](https://user-images.githubusercontent.com/85176043/234161354-897b540f-73c2-4a92-a413-c55a3955e15d.png)

# ( Readers_Rendezvous ) Library Management System

This is a full-stack web application built using ASP.NET Core API and React. The application allows users to view all the available books in the library and create their own list of favorite books after signing in as a user. Librarians can log in to edit, delete or add new books to the library, as well as add, edit or delete users.

## Figma Design

Here is the link to the Figma design for this project: https://www.figma.com/community/file/1233192187177809697

The design includes the following screens:

- Home page
- Sign in / Sign up pages
- Books list page
- Book details page
- Add / edit book page
- Users list page
- Add / edit user page

## Database Schema

Here is the link to the database schema for this project: https://dbdiagram.io/d/643f38706b31947051d2155a

The schema includes the following tables:

- Users: stores information about the application users.
- Roles: stores information about the roles in the application (e.g., user, librarian).
- Books: stores information about the books in the library.
- Genres: stores information about the book genres.
- Authors: stores information about the book authors.

## Getting Started

To run this application locally, you need to have Node.js, .NET Core SDK, and a code editor such as Visual Studio Code or Visual Studio installed on your computer.

1. Clone the repository to your local machine.
```
git clone https://github.com/nss-evening-cohort-20/ReadersRendezvous-E20.git
```
2. Navigate to the `client` folder and run `npm install` to install all the required client-side dependencies.

```
cd client
npm install
```

3. Navigate to the `server` folder and run `dotnet run` to start the server.

```
cd server
dotnet run
```

4. Open a new terminal window, navigate to the `client` folder and run `npm start` to start the React app.

```
cd client
npm start
```

5. Open your browser and go to `http://localhost:3000` to view the app.

## Features

- User Authentication: Users can sign up or sign in to the application. Once authenticated, they can create a list of favorite books.

- Book Management: Librarians can log in to the application and add, edit or delete books from the library.

- User Management: Librarians can add, edit or delete users from the application.

- Search: Users can search for books by title, author, or genre.

## Technologies Used

- ASP.NET Core API
- React
- SQL
- Bootstrap
- Axios
- ERD
- Figma

## License

This project is licensed under the MIT License.
