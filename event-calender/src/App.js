import React, { useState, useEffect } from "react";
import CalenderScliderByMonth from "./Pages/CalenderScliderByMonth";
import CalenderScliderByWeek from "./Pages/CalenderScliderByWeek";
import CalenderScliderByDay from "./Pages/CalenderScliderByDay";
import NavBar from "./Pages/NavBar";
import { Route, Routes, useLocation } from "react-router-dom";
import AddEvent from "./Pages/AddEvent";
import ListOfEvents from "./Pages/ListOfEvents";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import DataNotFound from "./Pages/DataNotFound";
import AuthProvider from "./Context/AuthProvider";
import Login from "../src/Pages/Login";
import Register from "./Pages/Register";

function App() {
  const [darkmode, setDarkmode] = useState(false);
  const location = useLocation();
  const toogleDarkmode = () => {
    const newdarkmode = !darkmode;
    setDarkmode(newdarkmode);
    localStorage.setItem("darkmode", newdarkmode);
  };
  useEffect(() => {
    if (darkmode) {
      document.body.classList.remove("dark-mode");
    } else {
      document.body.classList.add("dark-mode");
    }
  }, [darkmode]);

  useEffect(() => {
    const savedDarktmode = localStorage.getItem("darkmode");
    setDarkmode(savedDarktmode);
  }, []);

  return (
    <>
      <I18nextProvider i18n={i18n}>
        {location.pathname !== "/" &&
          location.pathname !== "/register" && (
            <NavBar toogleDarkmode={toogleDarkmode} />
          )}

        <AuthProvider>
          <Routes>
            <Route path="/home" element={<CalenderScliderByMonth />} />
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/week" element={<CalenderScliderByWeek />} />
            <Route path="/day" element={<CalenderScliderByDay />} />
            <Route path="/addevnt" element={<AddEvent />} />
            <Route path="/events" element={<ListOfEvents />} />
            <Route path="*" element={<DataNotFound />} />
          </Routes>
        </AuthProvider>
      </I18nextProvider>
    </>
  );
}

export default App;
