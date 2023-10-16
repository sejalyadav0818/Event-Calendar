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

const DayHeader = ({ currentDay }) => (
  <thead>
    <tr>
      <th class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
        {currentDay}
      </th>
    </tr>
  </thead>
);

const DayCell = ({ day }) => (
  <td class="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
    <div class="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
      <div class="top h-5 w-full">
        <span class="text-gray-900">{day}</span>
      </div>
      <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
    </div>
  </td>
);

const CalenderScliderByDay = () => {
  const days = [1];

  //calculate current day
  const currentDate = new Date();
  const currentDayName = currentDate.toLocaleString("default", {
    weekday: "long",
  });
  const currentDayDate = currentDate.getDate();

  //  groups the days by weeks
  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };


  return (
    <div>
      <div class="container mx-auto mt-10">
        <div class="wrapper bg-white rounded shadow w-full ">
          <div class="header flex justify-between border-b p-2">
            <span class="text-lg font-bold">
              {currentDate.toLocaleString("default", {
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
          <table class="w-full">
            <DayHeader currentDay={currentDayName} />
            <tbody>
              <tr class="text-center h-20">
                <DayCell day={currentDayDate} />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CalenderScliderByDay;
