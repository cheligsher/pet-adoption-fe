import React, { useContext } from "react";
import AppContext from "../context/AppContext";

function ProfileForm() {
  const { email, phone, firstName, lastName } = useContext(AppContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    // set states
  };
  return (
    <div>
      <form
        className="w-50 border border-dark p-3 mx-auto mt-4"
        onSubmit={handleSubmit}
      >
        <div className="d-flex justify-content-evenly">
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            placeholder="John"
            className="flex-grow-1 ms-3"
          />
        </div>
        <div className="d-flex justify-content-evenly">
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            placeholder="Doe"
            className="flex-grow-1 ms-3"
          />
        </div>
        <div className="d-flex justify-content-evenly">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="john@doe.com"
            className="flex-grow-1 ms-3"
          />
        </div>
        <div className="d-flex justify-content-evenly">
          <label htmlFor="phoneNumber">Phone number</label>
          <input
            type="number"
            name="phoneNumber"
            value={phone}
            placeholder="0123456789"
            className="flex-grow-1 ms-3"
          />
        </div>
        <div className="d-flex justify-content-evenly">
          <label htmlFor="password">Old password</label>
          <input
            type="password"
            name="password"
            placeholder="Must be more than 6 char long"
            className="flex-grow-1 ms-3"
          />
        </div>
        <div className="d-flex justify-content-evenly">
          <label htmlFor="password">New password</label>
          <input
            type="password"
            name="password"
            placeholder="Must be more than 6 char long"
            className="flex-grow-1 ms-3"
          />
        </div>
        <div className="d-flex justify-content-evenly">
          <label htmlFor="bio">Short bio</label>
          <textarea
            name="bio"
            placeholder="Write a bit about yourself..."
            rows={3}
            className="flex-grow-1 ms-3"
          />
        </div>
        <button className="btn btn-dark me-5 mt-3">Update profile</button>
      </form>
    </div>
  );
}

export default ProfileForm;
