import React, { useState, useEffect } from "react";
import "../App.css";
import FontAwesome from "react-fontawesome";
import * as formik from "formik";

import { DayCell } from "../components/DayCell";
import { DayHeader } from "../components/DayHeader";
import { EventModal } from "../components/EventModal";
import { useTranslation } from "react-i18next";
import {
  getDaysInMonth,
  nextMonth,
  prevMonth,
  chunkArray,
} from "../utils/dateFunctions";
import LanguageSwitcher from "./LanguageSwitcher";

const { Formik } = formik;

const CalenderScliderByWeek = () => {
  const { t } = useTranslation();
  const daysOfWeek = [
    t("Sunday"),
    t("Monday"),
    t("Tuesday"),
    t("Wednesday"),
    t("Thursday"),
    t("Friday"),
    t("Saturday"),
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [eventData, setEventData] = useState(
    JSON.parse(localStorage.getItem("eventData")) || []
  );
  const [textarea, setTextArea] = useState("");

  useEffect(() => {
    localStorage.setItem("eventData", JSON.stringify(eventData));
  }, [eventData]);

  const handletextareaChange = (e) => {
    setTextArea(e.target.value);
  };

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

  const days = Array.from(
    {
      length: getDaysInMonth(currentDate.getMonth(), currentDate.getFullYear()),
    },
    (_, i) => i + 1
  );

  const monthName = currentDate.toLocaleString("default", { month: "long" });
  const translatedMonthName = t(`${monthName}`);

  const weeks = chunkArray(days, 7);
  const getCurrentWeekDates = (date) => {
    const currentDate = date.getDay();
    let weekStart = new Date(date);
    weekStart.setDate(date.getDate() - currentDate);

    let weekEnd = new Date(date);
    weekEnd.setDate(date.getDate() + (6 - currentDate));

    let currentDateObj = new Date(weekStart);
    let weekDates = [];
    while (currentDateObj <= weekEnd) {
      weekDates.push(currentDateObj.getDate());
      currentDateObj.setDate(currentDateObj.getDate() + 1);
    }
    return weekDates;
  };
  const currentWeek = getCurrentWeekDates(currentDate);
  return (
    <div>
      <LanguageSwitcher />
      <div className="buttons flex justify-around h-600 p-500 ">
        <button class="p-1" onClick={prevMonth}>
          <FontAwesome name="chevron-left" className="-ml-px" />
        </button>
        <button class="p-1" onClick={nextMonth}>
          <FontAwesome name="chevron-right" className="-ml-px" />
        </button>
      </div>
      <div class="container mx-auto mt-10">
        <div class="">
          <div class="header flex justify-between border-b p-2">
            <span class="text-lg font-bold">
              {" "}
              <span class="text-lg font-bold">
                {`${translatedMonthName} ${currentDate.getFullYear()}`}
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
            <DayHeader daysOfWeek={daysOfWeek} />
            <tbody>
              <tr className="text-center h-20">
                {currentWeek.map((day) => {
                  return (
                    <DayCell
                      key={day}
                      day={day}
                      currentDate={currentDate}
                      onDoubleClick={handleDayDoubleClick}
                      eventData={eventData}
                      currentWeek={currentWeek}
                    />
                  );
                })}
              </tr>
            </tbody>
          </table>

          <EventModal
            isOpen={isModalOpen}
            onClose={closeModal}
            selectedDay={selectedDay}
            eventData={eventData}
            setEventData={setEventData}
            Formik={Formik}
            textarea={textarea}
            setTextArea={setTextArea}
            handletextareaChange={handletextareaChange}
          />
        </div>
      </div>
    </div>
  );
};

export default CalenderScliderByWeek;
