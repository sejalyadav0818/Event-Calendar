import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";

const NavBar = ({ toogleDarkmode }) => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
 const Navigate = useNavigate();
  function handleLogout() {
    localStorage.removeItem("token");
    Navigate("/login", { replace: true });
  }
  return (
    <>
      {" "}
      <div class="buttons flex items-center place-content-between h-100 p-10">
        <div class="buttons flex place-self-start">
          <div class="inline-flex">
            <button
              onClick={() => i18n.changeLanguage("en")}
              class="bg-white-300 hover:bg-white-400 text-gray-800 font-bold py-2 px-1 rounded-l"
            >
              English
            </button>
            <button
              onClick={() => i18n.changeLanguage("hi")}
              class="bg-white-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-1 rounded-r"
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
          <NavLink to="/day" className="ext-lg font-bold p-3 text-gray-800">
            {t("Today")}
          </NavLink>
          <button class="ext-lg font-bold p-3"></button>
        </div>
        <div class="buttons flex place-self-end">
          <NavLink to="/home" className="ext-lg font-bold p-3 text-gray-800 no-underline">
            {t("Month")}
          </NavLink>
          <NavLink to="/week" className="ext-lg font-bold p-3 text-gray-800 no-underline">
            {t("Week")}
          </NavLink>
          <NavLink to="/day" className="ext-lg font-bold p-3 text-gray-800 no-underline">
            {t("Day")}
          </NavLink>
          <NavLink to="/events" className="ext-lg font-bold p-3 text-gray-800 no-underline">
            {t("Events")}
          </NavLink>
          <Button
                variant="dark"
                type="submit"
                className="ext-lg font-bold p-3"
                onClick={handleLogout}
              >
                Log out
              </Button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
