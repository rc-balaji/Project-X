import React from "react";
import { Nav } from "./Nav/Nav";
import { useAppContext } from "../App";

export const Profile = () => {
  const { name, email, pass } = useAppContext();
  return (
    <div>
      <Nav />
      <div>
        <p>Name:{name}</p>
        <p>Email:{email}</p>
        <p>Password:{pass}</p>
      </div>
    </div>
  );
};
