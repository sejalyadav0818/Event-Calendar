import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/esm/Button";

const NavBar = ({ toogleDarkmode }) => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  return (
    <>
      {" "}
      <div class="buttons flex items-center place-content-between h-200 p-10">
        <div class="buttons flex place-self-start">
          <div class="inline-flex">
            <button
              onClick={() => i18n.changeLanguage("en")}
              class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-1 rounded-l"
            >
              English
            </button>
            <button
              onClick={() => i18n.changeLanguage("hi")}
              class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-1 rounded-r"
            >
              Hindi
            </button>
          </div>
          <button class="ext-lg font-bold p-3">
            {" "}
            <Button onClick={toogleDarkmode}>
              <FontAwesomeIcon icon={faMoon} />
            </Button>
          </button>
          <NavLink to="/day" className="ext-lg font-bold p-3">
            {t("Today")}
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
