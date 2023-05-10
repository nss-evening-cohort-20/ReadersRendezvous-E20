import { useEffect, useState } from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import { UserRequest } from "./UserRequest";
import "./UserRequests.css";

export const UserRequests = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [userRequests, setUserRequests] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://localhost:7229/api/UserRequests/GetAllHoldRequestsByUser/11`
      );
      const userRequestsArray = await response.json();
      console.log(userRequestsArray);
      console.log(userRequestsArray["user"]);
      console.log(userRequestsArray["bookRequests"]);
      setUser(userRequestsArray["user"]);
      setUserRequests(userRequestsArray["bookRequests"]);
    };
    fetchData();
  }, []);

  return (
    <article className="userRequests">
      <h3 className="title">User Requests - Holds and Extensions</h3>
      <section className="userRequest">
        <div className="userRequestTitle">{`User Name: ${user.firstName} ${user.lastName}`}</div>
        <div className="userRequestTitle">{`Library Card #: ${user?.libraryCardNumber}`}</div>
        <div className="userRequestTitle">{`Email          : ${user?.email}`}</div>
        {userRequests.map((userRequest) => (
          <UserRequest
            key={`request--${userRequest.requestId}`}
            user={user}
            userRequest={userRequest}
          />
        ))}
        {/* <button
          className="btn btn-primary"
          onClick={() => {
            navigate(`/userrequest/${user.userId}`, {
              state: { userInfo: user, requestDetail: userRequests },
            });
          }}
        >
          View All Requests
        </button> */}
      </section>
    </article>
  );
};
