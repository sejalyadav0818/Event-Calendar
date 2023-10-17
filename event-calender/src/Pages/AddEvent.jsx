import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/esm/Button";
import RadioButtons from "../components/RadioButtons";
import * as formik from "formik";
import * as yup from "yup";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "../App.css";

const AddEvent = () => {
  const { id } = useParams();
  const [editData, setEditData] = useState(null);
  const [fileBase64String, setFileBase64String] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [textarea, setTextArea] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  const { Formik } = formik;
  const getCharacterValidationError = (str) => {
    return `Your password must have at least 1 ${str} character`;
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFileBase64String(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const StateandCitys = {
    Gujarat: ["Ahmedabad", "Rajkot"],
    Chennai: ["Coimbatore", "Tiruchirappalli"],
    "M.P.": ["ujjain", "indore"],
    "U.P.": ["Varansi", "ayodhya"],
    uttrakhand: ["kedarnath", "haridwar"],
  };
  const handletextareaChange = (e) => {
    setTextArea(e.target.value);
  };
  const validationSchema = yup.object().shape({
    username: yup.string().required("Enter Your Username").min(2),
    email: yup
      .string()
      .required("Enter Your Email")
      .email("Enter a valid email"),
    password: yup
      .string()
      .required("Enter Your  password")
      .min(8, "Password must have at least 8 characters")
      .matches(/[0-9]/, getCharacterValidationError("digit"))
      .matches(/[a-z]/, getCharacterValidationError("lowercase"))
      .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
    confirmPassword: yup
      .string()
      .required("Enter Your  confirmPassword ")
      .oneOf([yup.ref("password")], "Passwords does not match"),
  });

  useEffect(() => {
    
    const allData = JSON.parse(localStorage.getItem("FormData")) || [];
    const dataToEdit = allData[id];
    if (dataToEdit) {
      setEditData(dataToEdit);
      setSelectedState(dataToEdit.state);
      setSelectedCity(dataToEdit.city);
      setTextArea(dataToEdit.address);
      setSelectedValue(dataToEdit.gender);
      setFileBase64String(dataToEdit.image);
    }
  }, [id]);

  const handleFormSubmit = (values, { setSubmitting }) => {
    const formData = {
      ...values,
      state: selectedState,
      city: selectedCity,
      address: textarea,
      gender: selectedValue,
      id: Date().charAt(0).toString(3),
      image: fileBase64String,
    };
    editData
      ? toast("Data Updated Successfully !!! ")
      : toast("Data Submitted Successfully !!! ");
    let existingData = JSON.parse(localStorage.getItem("FormData")) || [];

    if (id !== undefined) {
      existingData[id] = formData;
    } else {
      existingData.push(formData);
    }

    localStorage.setItem("FormData", JSON.stringify(existingData));
    setSubmitting(false);
  };
  return (
    <>
      <ToastContainer />
      {console.log(editData)}
      <h1 className="text-center mt-4">
        {" "}
        {editData ? "Edit Form" : "Register Form"}{" "}
      </h1>
      <Stack gap={2} className="mx-5 my-5">
        <Formik
          enableReinitialize
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
          initialValues={{
            username: editData ? editData.username : "",
            email: editData ? editData.email : "",
            password: editData ? editData.password : "",
            confirmPassword: editData ? editData.confirmPassword : "",
          }}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Row>
                <Col>
                  <Form.Group className="mb-3 mt-10">
                    <Form.Label className="bold-text">Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter username"
                      name="username"
                      onChange={handleChange}
                      value={values.username}
                      isValid={touched.username && !errors.username}
                      isInvalid={touched.username && !!errors.username}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.username}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3 mt-10">
                    <Form.Label className="bold-text">Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      onChange={handleChange}
                      value={values.email}
                      isValid={touched.email && !errors.email}
                      isInvalid={touched.email && !!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group className="mb-3 mt-10">
                    <Form.Label className="bold-text">Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Enter Password"
                      onChange={handleChange}
                      value={values.password}
                      isValid={touched.password && !errors.password}
                      isInvalid={touched.password && !!errors.password}
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3 mt-10">
                    <Form.Label className="bold-text">Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="confirmPassword"
                      placeholder="Enter Confirm Password"
                      onChange={handleChange}
                      value={values.confirmPassword}
                      isValid={
                        touched.confirmPassword && !errors.confirmPassword
                      }
                      isInvalid={
                        touched.confirmPassword && !!errors.confirmPassword
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.confirmPassword}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  {" "}
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    value={selectedState}
                    onChange={(e) => {
                      setSelectedState(e.target.value);
                      setSelectedCity("");
                    }}
                  >
                    <option value="">Select State</option>
                    {Object.keys(StateandCitys).map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </Col>
                <Col>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    disabled={!selectedState}
                  >
                    <option value="">Select City</option>
                    {selectedState &&
                      StateandCitys[selectedState].map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                  </select>
                </Col>
                <Col>
                  <div class="form-floating">
                    <textarea
                      class="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea"
                      value={console.log(textarea)}
                      onChange={handletextareaChange}
                    ></textarea>
                    <label for="floatingTextarea">Address</label>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label className="bold-text padding-right">Gender</Form.Label>

                  <RadioButtons 
                    name="exampleRadioGroup"
                    value="Male"
                    checkedValue={selectedValue}
                    onChange={setSelectedValue}
                  />
                  <RadioButtons 
                    name="exampleRadioGroup"
                    value="Female"
                    checkedValue={selectedValue}
                    onChange={setSelectedValue}
                  />
                </Col>
                <Col>
                  <Form.Group className="position-relative mb-3">
                    <Form.Label className="bold-text">Upload Photo</Form.Label>
                    <Form.Control
                      type="file"
                      required
                      name="file"
                      onChange={handleFileChange}
                      isInvalid={!!errors.file}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.file}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Button variant="dark" type="submit" className="text-center">
                {editData ? "Edit" : "Submit"}
              </Button>
            </Form>
          )}
        </Formik>
      </Stack>
    </>
  );
};

export default AddEvent;
