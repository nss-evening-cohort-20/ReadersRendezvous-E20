import { UserRequest } from "./UserRequest";

export const UserRequestContainer = (props) => {
  return (
    <>
      <section className="userRequest">
        <div className="userRequestTitle">{`User Name: ${props.user?.firstName} 
      ${props.user?.lastName}`}</div>
        <div className="userRequestTitle">{`Library Card #: ${props.user?.libraryCardNumber}`}</div>
        <div className="userRequestTitle">{`Email          : ${props.user?.email}`}</div>
        {props.userRequests?.map((userRequest) => (
          <UserRequest
            key={`request--${userRequest.requestId}`}
            user={props.user}
            userRequest={userRequest}
          />
        ))}
      </section>
    </>
  );
};
