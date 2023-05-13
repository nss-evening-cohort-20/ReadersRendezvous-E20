import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import "../userBooks/UserBookSearchStyle.css"


export const UserBookSearch = ({searchClicked}) => {
const [searchUserBooks, setSearchUserBooks] = useState(null)


return(
    <div className="SearchUserBookContainer">
        <input
              required
              autoFocus
              type="text"
              className="SearchUserBookBar"
              value={searchUserBooks}
              onChange={e => setSearchUserBooks(e.target.value)}
              placeholder="Search by Library Card Number"
        />
        <div className="searchButtonUserBooks" onClick={() => searchClicked(searchUserBooks)}>Search</div>
    </div>
)

}