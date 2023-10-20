import React, { useState } from "react";
import datanotFound from "../assets/images/error.png";
const ListOfEvents = () => {
  const eventData = JSON.parse(localStorage.getItem("eventData")) || [];
  const [serachTerm, setserachTerm] = useState("");
  const FilterdEvents = eventData.filter(
    (event) =>
      event.eventname
        .toLowerCase()
        .replace(/\s/g, "")
        .includes(serachTerm.toLowerCase().replace(/\s/g, "")) ||
      event.description
        .toLowerCase()
        .replace(/\s/g, "")
        .trim()
        .includes(serachTerm.toLowerCase().replace(/\s/g, ""))
  );

  return (
    <>
      <form class="d-flex flex items-center justify-center">
        <input
          class="form-control me-10 text-lg mx-10 p-4"
          type="search"
          placeholder="Search Something.."
          aria-label="Search"
          value={serachTerm}
          onChange={(e) => setserachTerm(e.target.value)}
        />
        <button class="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      {FilterdEvents.length > 0 ? (
        FilterdEvents.map((event, index) => (
          <div
            key={index}
            class="container mx-auto pr-6 pl-6 md:pr-24 md:pl-24 pt-6 pb-6 mt-6"
          >
            <div class="bg-primary p-4 border-l-4 border-blue-500 mb-0 rounded-md aos-init aos-animate">
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
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <img
          src={datanotFound}
          className="h-auto max-w-lg mx-auto"
          alt="Data Not Found"
        />
      )}
    </>
  );
};

export default ListOfEvents;
