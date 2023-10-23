import React from "react";
import { Nav } from "./Nav/Nav";
import { useAppContext } from "../App";

export const Profile = () => {
  const { name, email, pass } = useAppContext();
  return (
    <div className="container">
      <Nav />
      <div className="row mt-4">
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Profile</h5>
              <p className="card-text">Name: {name}</p>
              <p className="card-text">Email: {email}</p>
              <p className="card-text">Password: {pass}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
