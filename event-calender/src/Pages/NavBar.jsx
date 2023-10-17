import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const { t } = useTranslation();
  return (
    <>
      {" "}
      <div class="buttons flex items-center place-content-between h-200 p-10">
        <div class="buttons flex place-self-start">
          <button class="ext-lg font-bold p-3"></button>
          <NavLink to="/day" className="ext-lg font-bold p-3">
           { t("Today")}
          </NavLink>
          <button class="ext-lg font-bold p-3"></button>
        </div>
        <div class="buttons flex place-self-end">
          <NavLink to="/" className="ext-lg font-bold p-3">
            {t("Month")}
          </NavLink>
          <NavLink to="/week" className="ext-lg font-bold p-3">
            {t("Week")}
          </NavLink>
          <NavLink to="/day" className="ext-lg font-bold p-3">
            {t("Day")}
          </NavLink>
          <NavLink to="/events" className="ext-lg font-bold p-3">
            {t("Events")}
          </NavLink>
        </div>
      </div>
    
    </>
  );
};

export default NavBar;
