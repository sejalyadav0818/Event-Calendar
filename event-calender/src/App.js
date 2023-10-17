import CalenderScliderByMonth from "./Pages/CalenderScliderByMonth";
import CalenderScliderByWeek from "./Pages/CalenderScliderByWeek";
import CalenderScliderByDay from "./Pages/CalenderScliderByDay";
import NavBar from "./Pages/NavBar";
import { Route, Routes } from "react-router-dom";
import AddEvent from "./Pages/AddEvent";
import ListOfEvents from "./Pages/ListOfEvents";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { useState } from "react";

function App() {
  const [darkmode,setDarkmode] = useState(false);
  
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <NavBar />
        <Routes>
          <Route path="/" element={<CalenderScliderByMonth />} />
          <Route path="/week" element={<CalenderScliderByWeek />} />
          <Route path="/day" element={<CalenderScliderByDay />} />
          <Route path="/addevnt" element={<AddEvent />} />
          <Route path="/events" element={<ListOfEvents />} />
        </Routes>
      </I18nextProvider>
    </>
  );
}

export default App;
