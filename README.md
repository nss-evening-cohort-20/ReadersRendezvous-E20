# ReadersRendezvous-E20
[Readers-Rendezvous.pdf](https://github.com/nss-evening-cohort-20/ReadersRendezvous-E20/files/11315889/Readers-Rendezvous.pdf)
==============================================================================
![Readers-Rendezvous](https://user-images.githubusercontent.com/85176043/234161354-897b540f-73c2-4a92-a413-c55a3955e15d.png)

Library Management System (Readers_Rendezvous)
This is a full-stack web application built using ASP.NET Core API and React. The application allows users to view all the available books in the library and create their own list of favorite books after signing in as a user. Librarians can log in to edit, delete or add new books to the library, as well as add, edit or delete users.

Getting Started
To run this application locally, you need to have Node.js, .NET Core SDK, and a code editor such as Visual Studio Code or Visual Studio installed on your computer.

Clone the repository to your local machine.
bash
Copy code
git clone https://github.com/nss-evening-cohort-20/ReadersRendezvous-E20.git
Navigate to the client folder and run npm install to install all the required client-side dependencies.
bash
Copy code
cd client
npm install
Navigate to the server folder and run dotnet run to start the server.
arduino
Copy code
cd server
dotnet run
Open a new terminal window, navigate to the client folder and run npm start to start the React app.
bash
Copy code
cd client
npm start
Open your browser and go to http://localhost:3000 to view the app.
Features
User Authentication: Users can sign up or sign in to the application. Once authenticated, they can create a list of favorite books.

Book Management: Librarians can log in to the application and add, edit or delete books from the library.

User Management: Librarians can add, edit or delete users from the application.

Search: Users can search for books by title, author, or genre.

Technologies Used
ASP.NET Core API
React
SQL
Bootstrap
Axios
React Router
