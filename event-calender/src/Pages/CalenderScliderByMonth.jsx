import React, { useState, useEffect } from "react";
import FontAwesome from "react-fontawesome";

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const DayHeader = () => (
  <thead>
    <tr>
      {daysOfWeek.map((day, index) => (
        <th
          key={index}
          class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs"
        >
          <span class="xl:block lg:block md:block sm:block hidden">{day}</span>
        </th>
      ))}
    </tr>
  </thead>
);

const DayCell = ({ day, currentDate, onDoubleClick }) => (
  <td
    className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300"
    onDoubleClick={() => onDoubleClick(day)}
  >
    <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
      <div className="top h-5 w-full">
        {currentDate.getDate() === day ? (
          <div className="rounded-full bg-cyan-400">{day}</div>
        ) : (
          <div className="rounded-full text-red-600">{day}</div>
        )}
      </div>
      <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
    </div>
  </td>
);

const CalenderScliderByMonth = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [eventData, seteventData] = useState([]);

  const handleDayDoubleClick = (day) => {
    setSelectedDay(day);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDay(null);
  };
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    document.title = `${currentDate.toLocaleString("default", {
      month: "long",
      year: "numeric",
    })}`;
  }, [currentDate]);

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const nextMonth = () => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
    );
  };

  const prevMonth = () => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
    );
  };

  const days = Array.from(
    {
      length: getDaysInMonth(currentDate.getMonth(), currentDate.getFullYear()),
    },
    (_, i) => i + 1
  );

  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const weeks = chunkArray(days, 7);
  return (
    <div>
      <div className="buttons flex items-center place-content-between h-200 p-1">
        <button class="p-1" onClick={prevMonth}>
          <FontAwesome name="chevron-left" className="-ml-px" />
        </button>
        <button class="p-1" onClick={nextMonth}>
          <FontAwesome name="chevron-right" className="-ml-px" />
        </button>
      </div>
      <div class="container mx-auto mt-10">
        <div class="wrapper bg-white rounded shadow w-full ">
          <div class="header flex justify-between border-b p-2">
            <span class="text-lg font-bold">
              {" "}
              <span class="text-lg font-bold">
                {currentDate.toLocaleString("default", {
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </span>
            <div class="buttons">
              <button class="p-1">
                <path
                  fill-rule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path
                  fill-rule="evenodd"
                  d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"
                />
                <path
                  fill-rule="evenodd"
                  d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"
                />
              </button>
              <button class="p-1">
                <path
                  fill-rule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path
                  fill-rule="evenodd"
                  d="M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"
                />
                <path
                  fill-rule="evenodd"
                  d="M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"
                />
              </button>
            </div>
          </div>

          <table class="w-full">
            <DayHeader />
            <tbody>
              {weeks.map((week, weekIndex) => (
                <tr key={weekIndex} className="text-center h-20">
                  {week.map((day) => (
                    <DayCell
                      key={day}
                      day={day}
                      currentDate={currentDate}
                      onDoubleClick={handleDayDoubleClick}
                    />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <EventModal
            isOpen={isModalOpen}
            onClose={closeModal}
            selectedDay={selectedDay}
            eventData={eventData}
            setEventData={seteventData}
          />
        </div>
      </div>
    </div>
  );
};
const EventModal = ({
  isOpen,
  onClose,
  selectedDay,
  eventData,
  seteventData,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-md w-1/3">
        <h2>Details for {selectedDay}</h2>
        <label>Title</label>
        <form>
          <input
            type="text"
            value={eventData}
            onChange={(e) => seteventData(e.target.value)}
          />
          <label>Date</label>
          <input
            type="date"
            value={eventData}
            onChange={(e) => seteventData(e.target.value)}
          />
          <label>startTime</label>
          <input
            type="date"
            value={eventData}
            onChange={(e) => seteventData(e.target.value)}
          />
          <label>Description</label>
          <textarea value={eventData}></textarea>
          <label>reminder</label>
          <input
            type="date"
            value={eventData}
            onChange={(e) => seteventData(e.target.value)}
          />
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CalenderScliderByMonth;
