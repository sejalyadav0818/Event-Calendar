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
<<<<<<< HEAD
          className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
=======
          class="form-control me-1 text-lg m-10 p-10 w-10"
>>>>>>> f6c5fc1a7402386b3dd8f6bde372c11acb9313a4
          type="search"
          placeholder="Search Something.."
          aria-label="Search"
          value={serachTerm}
          onChange={(e) => setserachTerm(e.target.value)}
        />
<<<<<<< HEAD
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Search
        </button>
=======
>>>>>>> f6c5fc1a7402386b3dd8f6bde372c11acb9313a4
      </form>

      {FilterdEvents.length > 0 ? (
        FilterdEvents.map((event, index) => (
<<<<<<< HEAD
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
=======
          <div
            key={index}
            class="container mx-auto pr-6 pl-6 md:pr-24 md:pl-24 pt-6 pb-6 mt-6"
          >
            <div class=" p-4 border-l-4 border-blue-500 mb-0 rounded-md aos-init aos-animate">
              <div class="flex justify-between">
                <h1 className="text-red-900 text-xl italic font-normal hover:font-bold">
                  Event Name : {event.eventname}
                </h1>
              </div>
              <br />
              <p className="text-blue-900 text-small  font-normal hover:font-bold">
                Event Description : {event.description}
              </p>
              <div class="flex justify-between mt-5">
                <p>
                  <p class="flex-auto pl-2 text-blue-900 text-small  font-normal hover:font-bold">
                    {" "}
                    Event Participants : {event.participants}
                  </p>
                </p>
                <p class="text-green-700 text-small font-extrabold font-normal hover:font-bold">
                  From : {event.ffrom} <br></br> To : {event.to}
>>>>>>> f6c5fc1a7402386b3dd8f6bde372c11acb9313a4
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
