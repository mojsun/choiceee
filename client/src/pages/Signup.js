import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
//for token
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";
import "../scss/pages/signup.scss";
function Signup(props) {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container signup my-1 d-flex flex-row justify-content-center hstack gap-5">
      <div className="ms-5 signup_video">
        <video className="signup_video_content" autoPlay muted loop>
          <source src="/videos/signup.mp4" type="video/mp4"></source>
        </video>
      </div>
      <div className="me-5 signup_form p-5">
        <Link to="/login" className="text-decoration-none">
          ← Go to Login
        </Link>

        <h2 className="mt-5 mb-4">Signup</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="flex-row space-between my-2">
            <label htmlFor="firstName">First Name:</label>
            <input
              placeholder="First"
              name="firstName"
              type="firstName"
              id="firstName"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="lastName">Last Name:</label>
            <input
              placeholder="Last"
              name="lastName"
              type="lastName"
              id="lastName"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="email">Email:</label>
            <input
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="pwd">Password:</label>
            <input
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
              className="w-100"
            />
          </div>
          <div className="flex-row flex-end">
            <button
              type="submit"
              className="p-2 px-4 bg-primary text-white rounded-4 mt-3"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="ms-5 signup_video">
        <video className="signup_video_content" autoPlay muted loop>
          <source src="/videos/signup.mp4" type="video/mp4"></source>
        </video>
      </div>
    </div>
  );
}

export default Signup;
