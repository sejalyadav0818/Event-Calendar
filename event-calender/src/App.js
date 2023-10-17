import CalenderScliderByMonth from "./Pages/CalenderScliderByMonth";
import CalenderScliderByWeek from "./Pages/CalenderScliderByWeek";
import CalenderScliderByDay from "./Pages/CalenderScliderByDay";
import NavBar from "./Pages/NavBar";
import { Route, Routes } from "react-router-dom";
import AddEvent from "./Pages/AddEvent";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<CalenderScliderByMonth />} />
        <Route path="/week" element={<CalenderScliderByWeek />} />
        <Route path="/day" element={<CalenderScliderByDay />} />
        <Route path="/addevnt" element={<AddEvent/>} />
      </Routes>
    </>
  );
}

export default App;
