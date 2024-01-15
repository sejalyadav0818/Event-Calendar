import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const Navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    Navigate("/", { replace: true });
  }

  return (
    <div className="bg-white shadow-lg p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <div className="flex space-x-2">
          <button
            onClick={() => i18n.changeLanguage("en")}
            className="bg-gray-200 text-gray-800 font-bold py-2 px-3 rounded-l hover:bg-gray-300"
          >
            English
          </button>
          <button
            onClick={() => i18n.changeLanguage("hi")}
            className="bg-gray-200 text-gray-800 font-bold py-2 px-3 rounded-r hover:bg-gray-300"
          >
            Hindi
          </button>
        </div>
        
        <NavLink
          to="/day"
          className="font-bold px-3 py-2 text-gray-800 hover:bg-gray-100 rounded"
        >
          {t("Today")}
        </NavLink>
      </div>

      <div className="flex space-x-4">
        <NavLink
          to="/home"
          className="font-bold px-3 py-2 text-gray-800 hover:bg-gray-100 rounded"
        >
          {t("Month")}
        </NavLink>
        <NavLink
          to="/week"
          className="font-bold px-3 py-2 text-gray-800 hover:bg-gray-100 rounded"
        >
          {t("Week")}
        </NavLink>
        <NavLink
          to="/day"
          className="font-bold px-3 py-2 text-gray-800 hover:bg-gray-100 rounded"
        >
          {t("Day")}
        </NavLink>
        <NavLink
          to="/events"
          className="font-bold px-3 py-2 text-gray-800 hover:bg-gray-100 rounded"
        >
          {t("Events")}
        </NavLink>
        <button
          onClick={handleLogout}
          className="font-bold px-3 py-2 bg-red-500 text-white hover:bg-red-600 rounded"
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default NavBar;
