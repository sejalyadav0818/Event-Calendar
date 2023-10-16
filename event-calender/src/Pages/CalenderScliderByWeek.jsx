import React from "react";
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

const DayCell = ({ day, currentDate }) => (
  <td class="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
    <div class="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
      <div class="top h-5 w-full">
        {currentDate.getDate() === day ? (
          <div className="rounded-full bg-cyan-400">{day}</div>
        ) : (
          <div className="rounded-full text-red-900">{day}</div>
        )}
      </div>
      <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
    </div>
  </td>
);

const CalenderScliderByWeek = () => {
  const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  // This function groups the days by weeks
  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  // Group days into weeks
  const weeks = chunkArray(days, 7);
  //calculate current day
  const currentDate = new Date();
  const currentDayName = currentDate.toLocaleString("default", {
    weekday: "long",
  });
  const currentDayDate = currentDate.getDate();

  const getCurrentWeek = (date, days) => {
    const dayOfMonth = date.getDate();
    for (let week of weeks) {
      if (week.includes(dayOfMonth)) {
        return week;
      }
    }
    return null;
  };

  const currentWeek = getCurrentWeek(currentDate, days);

  return (
    <div>
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
          <table className="w-full">
            <DayHeader />
            <tbody>
              <tr className="text-center h-20">
                {currentWeek.map((day) => (
                  <DayCell key={day} day={day} currentDate={currentDate} />
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CalenderScliderByWeek;
