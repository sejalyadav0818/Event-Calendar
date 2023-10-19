import React from "react";

const ListOfEvents = () => {
  const eventData = JSON.parse(localStorage.getItem("eventData")) || [];

  return (
    <>
      {eventData.map((event, index) => (
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
      ))}
    </>
  );
};

export default ListOfEvents;
