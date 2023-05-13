import { useEffect, useState } from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";

export const UserRequestDetails = (props) => {
  const appUser = localStorage.getItem("app_user");
  const appUserObject = JSON.parse(appUser);
  const location = useLocation();
  const { userInfo, requestDetail } = location.state;
  const navigate = useNavigate();
  const { requestId } = useParams();

  const handleApproveButtonClick = (event) => {
    event.preventDefault();
    console.log(`userInfo`, userInfo);
    console.log(`requestDetail`, requestDetail);
    const approveRequest = {
      id: requestDetail?.requestId,
      userId: userInfo?.userId,
      bookId: requestDetail?.bookId,
      requestTS: new Date().toISOString(),
      requestTypeId: 1,
      completedTS: new Date().toISOString(),
      isApproved: true,
    };
    console.log(approveRequest);
    // TODO: Perform the fetch() to POST the object to the API
    const putApproval = async () => {
      try {
        const options = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(approveRequest),
        };
        const response = await fetch(
          `https://localhost:7229/api/UserRequests/UpdateHoldRequestStatus/${requestDetail?.requestId}`,
          options
        );
        // const result = await response.json();
        // console.log("Success:", result);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    putApproval();
    navigate("/requests");
  };

  const handleDenyButtonClick = (event) => {
    event.preventDefault();

    const denyRequest = {
      id: requestDetail?.requestId,
      userId: userInfo?.userId,
      bookId: requestDetail?.bookId,
      requestTS: new Date().toISOString(),
      requestTypeId: 1,
      completedTS: new Date().toISOString(),
      isApproved: false,
    };
    console.log(denyRequest);
    // TODO: Perform the fetch() to POST the object to the API
    const putDeny = async () => {
      try {
        const options = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(denyRequest),
        };
        const response = await fetch(
          `https://localhost:7229/api/UserRequests/UpdateHoldRequestStatus/${requestDetail?.requestId}`,
          options
        );
        // const result = await response.json();
        // console.log("Success:", result);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    putDeny();
    navigate("/requests");
  };

  const handleDeleteButtonClick = (event) => {
    event.preventDefault();

    const deleteHold = async () => {
      try {
        const options = {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        };
        const response = await fetch(
          `https://localhost:7229/api/UserRequests/DeleteHoldRequest?requestId=${requestDetail?.requestId}`,
          options
        );
        // const result = await response.json();
        // console.log("Success:", result);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    deleteHold();
    navigate("/requests");
  };

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
        Description: <div>{requestDetail?.description}</div>
      </div>
      <footer className="userRequest__footer">
        <div>Requested on: {requestDetail?.requestTS}</div>
        <div className="status--container">
          <div className="status--container--item">
            Status: {requestDetail?.isApproved ? "Approved" : "Pending"}
          </div>
        </div>
        <div className="status--container--item">
          {appUserObject?.isAdmin && (
            <div className="status--container--item">
              <div className="status--container--item status--container--item">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleApproveButtonClick}
                >
                  Approve
                </button>
              </div>
              <div className="status--container--item">
                <button
                  type="submit"
                  className="btn btn-secondary status--container--item"
                  onClick={handleDenyButtonClick}
                >
                  Deny
                </button>
              </div>
            </div>
          )}
          {!appUserObject?.isAdmin && (
            <div className="status--container--item">
              <div className="status--container--item status--container--item">
                <button
                  type="submit"
                  className="btn btn-secondary"
                  onClick={handleDeleteButtonClick}
                >
                  Delete
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
