import React, { useState } from "react";
import datanotFound from "../assets/images/error.png";

const ListOfEvents = () => {
  const eventData = JSON.parse(localStorage.getItem("eventData")) || [];
  const [serachTerm, setserachTerm] = useState("");

  const FilterdEvents = eventData.filter((event) =>
    [event.eventname, event.description].some((data) =>
      data
        .toLowerCase()
        .replace(/\s/g, "")
        .includes(serachTerm.toLowerCase().replace(/\s/g, ""))
    )
  );

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <form className="flex items-center justify-center mb-6">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
          type="search"
          placeholder="Search Something.."
          aria-label="Search"
          value={serachTerm}
          onChange={(e) => setserachTerm(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Search
        </button>
      </form>

      {FilterdEvents.length > 0 ? (
        FilterdEvents.map((event, index) => (
          <div key={index} className="mb-6">
            <div className="bg-white p-6 border-l-4 border-blue-500 rounded-md shadow-md">
              <h1 className="text-red-900 text-xl mb-2 hover:text-red-700">
                Event Name: {event.eventname}
              </h1>
              <p className="text-blue-900 mb-4 hover:text-blue-700">
                Event Description: {event.description}
              </p>
              <div className="flex justify-between">
                <p className="text-blue-900 hover:text-blue-700">
                  Event Participants: {event.participants}
                </p>
                <p className="text-green-700 font-bold hover:text-green-500">
                  From: {event.ffrom} <br /> To: {event.to}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="flex justify-center items-center h-64">
          <img
            src={datanotFound}
            className="w-500 h-100"
            alt="Data Not Found"
          />
        </div>
      )}
    </div>
  );
};

export default ListOfEvents;
