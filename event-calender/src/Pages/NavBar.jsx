import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      {" "}
      <div class="buttons flex items-center place-content-between h-200 p-10">
        <div class="buttons flex place-self-start">
          <button class="ext-lg font-bold p-3"></button>
          <NavLink to="/day" className="ext-lg font-bold p-3">
            Today
          </NavLink>
          <button class="ext-lg font-bold p-3"></button>
        </div>
        <div class="buttons flex place-self-end">
          <NavLink to="/" className="ext-lg font-bold p-3">
            Month
          </NavLink>
          <NavLink to="/week" className="ext-lg font-bold p-3">
            Week
          </NavLink>
          <NavLink to="/day" className="ext-lg font-bold p-3">
            Day
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default NavBar;
