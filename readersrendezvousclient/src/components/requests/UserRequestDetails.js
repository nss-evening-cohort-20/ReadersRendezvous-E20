import { useEffect, useState } from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";

export const UserRequestDetails = (props) => {
  const location = useLocation();
  const { userInfo, requestDetail } = location.state;
  const navigate = useNavigate();
  const { requestId } = useParams();

  return (
    <section className="userRequestItem">
      <header className="userRequest__header">
        {`Viewing requests made by 
      ${userInfo.firstName} ${userInfo.lastName}`}
      </header>
      <header className="userRequest__header">{requestDetail.title}</header>
      <div>
        <img src={requestDetail?.imageUrl} alt="Image of the Book" />
      </div>
      <div>Request Type: {requestDetail?.requestType}</div>
      <div>Publisher: {requestDetail?.publisher}</div>
      <div>Author: {requestDetail?.author}</div>
      <div>Age Range: {requestDetail?.ageRange}</div>
      <div>Language: {requestDetail?.language}</div>
      <div>ISBN13: {requestDetail?.isbN13}</div>
      <div>Genre: {requestDetail?.genre}</div>
      <div>
        Description: <p>{requestDetail?.description}</p>
      </div>
      <footer className="userRequest__footer">
        <div>Requested on: {requestDetail?.requestTS}</div>
        <div className="status--container">
          <div className="status--container--item">
            Status: {requestDetail?.isApproved ? "Approved" : "Pending"}
          </div>
        </div>
        <div className="status--container--item">
          {!requestDetail?.isApproved && (
            <div className="status--container--item">
              <div className="status--container--item status--container--item">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    console.log("Approved");
                  }}
                >
                  Approve
                </button>
              </div>
              <div className="status--container--item">
                <button
                  className="btn btn-primary status--container--item"
                  onClick={() => {
                    console.log("Denied");
                  }}
                >
                  Deny
                </button>
              </div>
            </div>
          )}
        </div>
      </footer>
      <div>
        <div>
          <button
            className="btn btn-primary"
            onClick={() => {
              navigate("/requests");
            }}
          >
            Back
          </button>
        </div>
      </div>
    </section>
  );
};
