import { useEffect, useState } from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import { UserRequest } from "./UserRequest";
import "./UserRequests.css";
import { UserRequestContainer } from "./UserRequestContainer";

export const UserRequestsAdminView = (props) => {
  const appUser = localStorage.getItem("app_user");
  const appUserObject = JSON.parse(appUser);
  const navigate = useNavigate();
  const [userRequests, setUserRequests] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://localhost:7229/api/UserRequests/GetAllHoldRequests`
      );
      const userRequestsArray = await response.json();
      console.log("userRequestsArray", userRequestsArray);
      setUserRequests(userRequestsArray);
    };
    fetchData();
  }, []);

  return (
    <article className="userRequests">
      <h3 className="title">User Requests - Holds and Extensions</h3>
      <section className="userRequest">
        {userRequests.map((userRequest) => (
          <UserRequestContainer
            key={`request--${userRequest?.user?.userId}`}
            user={userRequest?.user}
            userRequests={userRequest?.bookRequests}
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
