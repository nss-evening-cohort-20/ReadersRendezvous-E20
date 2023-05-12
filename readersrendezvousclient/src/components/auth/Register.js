import { fireEvent } from "@testing-library/react";
import React from "react";
import { useEffect, useState } from "react";
import { Router } from "react-router-dom";

export const RegisterUser = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [AddressLineOne, setAddressLineOne] = useState("");
  const [AddressLineTwo, setAddressLineTwo] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [Zip, setZip] = useState("");
  const [PasswordHash, setPasswordHash] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://localhost:7229/api/Login/RegisterUser`,
        {
          body: JSON.stringify({
            FirstName: FirstName,
            LastName: LastName,
            Email: Email,
            PhoneNumber: PhoneNumber,
            AddressLineOne: AddressLineOne,
            AddressLineTwo: AddressLineTwo,
            City: City,
            State: State,
            Zip: Zip,
            PasswordHash: PasswordHash,
          }),
          credentials: "include",
          method: "post",
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const submissionHandler = (event) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <>
      <form onSubmit={submissionHandler}>
        <label>
          First Name:
          <input
            type='text'
            value={FirstName}
            onChange={(event) => setFirstName(event.target.value)}
          ></input>
        </label>

        <label>
          Last Name:
          <input
            type='text'
            value={LastName}
            onChange={(event) => setLastName(event.target.value)}
          ></input>
        </label>

        <label>
          Email:
          <input
            type='text'
            value={Email}
            onChange={(event) => setEmail(event.target.value)}
          ></input>
        </label>

        <label>
          Phone Number:
          <input
            type='text'
            value={PhoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          ></input>
        </label>

        <label>
          Address Line One:
          <input
            type='text'
            value={AddressLineOne}
            onChange={(event) => setAddressLineOne(event.target.value)}
          ></input>
        </label>

        <label>
          Address Line Two:
          <input
            type='text'
            value={AddressLineTwo}
            onChange={(event) => setAddressLineTwo(event.target.value)}
          ></input>
        </label>

        <label>
          City:
          <input
            type='text'
            value={City}
            onChange={(event) => setCity(event.target.value)}
          ></input>
        </label>

        <label>
          State:
          <input
            type='text'
            value={State}
            onChange={(event) => setState(event.target.value)}
          ></input>
        </label>

        <label>
          Zip:
          <input
            type='text'
            value={Zip}
            onChange={(event) => setZip(event.target.value)}
          ></input>
        </label>

        <label>
          Password:
          <input
            type='text'
            value={PasswordHash}
            onChange={(event) => setPasswordHash(event.target.value)}
          ></input>
        </label>

        <label>
          <input type='submit' value='submit'></input>
        </label>
      </form>
    </>
  );
};
