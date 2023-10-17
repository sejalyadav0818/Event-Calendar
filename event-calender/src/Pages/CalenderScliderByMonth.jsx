import React, { useState, useEffect } from "react";
import FontAwesome from "react-fontawesome";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import ListOfEvents from "./ListOfEvents";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const { Formik } = formik;

const CalenderScliderByMonth = () => {
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

  const { i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  // const [eventData, setEventData] = useState([]);
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
  const monthName = currentDate.toLocaleString("default", { month: "long" });
  const translatedMonthName = t(`${monthName}`);

  const weeks = chunkArray(days, 7);
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
        <div class="wrapper bg-white rounded shadow w-full ">
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

          <table class="w-full">
            <DayHeader daysOfWeek={daysOfWeek} />
            <tbody>
              {weeks.map((week, weekIndex) => (
                <tr key={weekIndex} className="text-center h-20">
                  {week.map((day) => (
                    <DayCell
                      key={day}
                      day={day}
                      currentDate={currentDate}
                      onDoubleClick={handleDayDoubleClick}
                      eventData={eventData}
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
            setEventData={setEventData}
            Formik={Formik}
            textarea={textarea}
            setTextArea={setTextArea}
            handletextareaChange={handletextareaChange}
          />
          <ListOfEvents eventData={eventData} setEventData={setEventData} />
        </div>
      </div>
    </div>
  );
};

const DayHeader = ({ daysOfWeek }) => (
  <thead>
    <tr>
      {daysOfWeek.map((day, index) => (
        <th
          key={index}
          class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs"
        >
          <span class="xl:block lg:block md:block sm:block hidden text-black-600">
            {day}
          </span>
        </th>
      ))}
    </tr>
  </thead>
);

const DayCell = ({ day, currentDate, onDoubleClick, eventData }) => {
  const dayEvent = eventData.find((event) => event.day === day);

  return (
    <td
      className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300"
      onDoubleClick={() => onDoubleClick(day)}
    >
      <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
        <div className="top h-5 w-full">
          {currentDate.getDate() === day ? (
            <div className="rounded-full bg-blue-200">{day}</div>
          ) : (
            <div className="rounded-full text-blue-600">{day}</div>
          )}
        </div>

        <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer">
          {dayEvent && (
            <div className="rounded-full bg-indigo-300 ">
              <strong>{dayEvent.eventname}</strong>
              <p>{dayEvent.description}</p>
              <small>
                {dayEvent.from} - {dayEvent.to}
              </small>
            </div>
          )}
        </div>
      </div>
    </td>
  );
};

const validationSchema = yup.object().shape({
  username: yup.string().required("Enter Your Username").min(2),
});
const EventModal = ({
  isOpen,
  onClose,
  selectedDay,
  eventData,
  setEventData,
  Formik,
  textarea,
  handletextareaChange,
}) => {
  const { t } = useTranslation();
  if (!isOpen) return null;
  const existingEvent = eventData.find((event) => event.day === selectedDay);

  const handleFormSubmit = (values) => {
    // If existing event, update it. Otherwise, add new event.
    const newEvents = existingEvent
      ? eventData.map((event) =>
          event.day === selectedDay
            ? { ...values, day: selectedDay, description: textarea }
            : event
        )
      : [...eventData, { ...values, day: selectedDay, description: textarea }];
    setEventData(newEvents);
    console.log(newEvents);

    onClose();
  };

  const handleDelete = () => {
    const newEvents = eventData.filter((event) => event.day !== selectedDay);
    setEventData(newEvents);
    handletextareaChange({ target: { value: "" } });
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-8 z-50">
      <div className="bg-white-200 p-12 rounded-md w-1/3">
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-xl font-bold">
            {existingEvent ? t("Edit Event") : t("Add Event")}
          </h1>
          <button onClick={onClose}>
            <FontAwesomeIcon icon={faTimesCircle} />
          </button>
        </div>

        <Formik
          enableReinitialize
          onSubmit={handleFormSubmit}
          initialValues={{
            eventname: existingEvent ? existingEvent.eventname : "",
            ffrom: existingEvent ? existingEvent.ffrom : "",
            to: existingEvent ? existingEvent.to : "",
            participants: existingEvent ? existingEvent.participants : "",
            textarea: existingEvent ? existingEvent.textarea : "",
          }}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Row>
                <Col>
                  <Form.Group className="mb-3 mt-10">
                    <Form.Label className="bold-text">
                      {t("Event Name")} :{" "}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={t("Enter Event name")}
                      name="eventname"
                      onChange={handleChange}
                      value={values.eventname}
                      isValid={touched.eventname && !errors.eventname}
                      isInvalid={touched.eventname && !!errors.eventname}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.eventname}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3 mt-10">
                    <Form.Label className="bold-text">
                      {t("From")} :{" "}
                    </Form.Label>
                    <Form.Control
                      type="date"
                      name="ffrom"
                      onChange={handleChange}
                      value={values.ffrom}
                      isValid={touched.ffrom && !errors.ffrom}
                      isInvalid={touched.ffrom && !!errors.ffrom}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.ffrom}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3 mt-10">
                    <Form.Label className="bold-text">{t("TO")} : </Form.Label>
                    <Form.Control
                      type="date"
                      name="to"
                      onChange={handleChange}
                      value={values.to}
                      isValid={touched.to && !errors.to}
                      isInvalid={touched.to && !!errors.to}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.to}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col>
                  <label htmlFor="floatingTextarea"> {t("Description")} </label>
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder={t("Leave a Reminder here")}
                      id="floatingTextarea"
                      value={textarea}
                      onChange={handletextareaChange}
                    ></textarea>
                  </div>
                </Col>
                <Col>
                  <Form.Group className="mb-3 mt-10">
                    <Form.Label className="bold-text">
                      {t("Participants Name")} :{" "}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={t("Enter Participants name")}
                      name="participants"
                      onChange={handleChange}
                      value={values.participants}
                      isValid={touched.participants && !errors.participants}
                      isInvalid={touched.participants && !!errors.participants}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.participants}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <div className="flex justify-around items-center mb-1">
                  <button
                    class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                    type="submit"
                  >
                    {existingEvent ? t("Edit") : t("Add")}
                  </button>
                  <button
                    class="bg-red-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                    onClick={handleDelete}
                  >
                    {t("Delete")}
                  </button>
                </div>
              </Row>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CalenderScliderByMonth;
