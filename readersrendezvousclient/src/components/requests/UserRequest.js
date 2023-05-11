import { useEffect, useState } from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";

export const UserRequest = (props) => {
  const { userId } = useParams();
  const navigate = useNavigate();
  return (
    <section className="userRequestItem">
      <div>
        <img src={props.userRequest?.imageUrl} alt="Image of the Book" />
      </div>
      <div>{`Title: ${props.userRequest?.title}`}</div>
      <div>{`Request Type: ${props.userRequest?.requestType}`}</div>
      <div>{`Author: ${props.userRequest?.author}`}</div>
      <button
        className="btn btn-primary"
        onClick={() => {
          navigate(`/userrequest/${props.userRequest.requestId}`, {
            state: { userInfo: props.user, requestDetail: props.userRequest },
          });
        }}
      >
        View Details
      </button>
      {/* <div>
        <Link
          className="userRequest__link"
          to={`/userrequest/${props.userRequest.requestId}`}
          state={{ requestDetail: props.userRequest }}
        >
          {`${props.user.firstName} ${props.user.lastName}`}
        </Link>
      </div> */}
    </section>
  );
};
