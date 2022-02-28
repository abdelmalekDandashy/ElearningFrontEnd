/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
import { Proxy } from "../../fetch/fetch";
import * as P from "../../fetch/fetch";
import Calendar from "react-calendar";
import Moment from "moment";
import "./examples.css";
import { useHistory } from "react-router";

const Register = () => {
  let myProxy = new Proxy();
  let history = useHistory();
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  let [errorMsg, setErrorMsg] = useState("");
  let [mobileNb, setMobileNb] = useState("");
  let [isTeacher, setIsTeacher] = useState(2);

  const [showCalendar, setShowCalendar] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState(3);
  const categories = [
    { value: 1, name: "phy" },
    { value: 2, name: "bio" },
    { value: 3, name: "programming" },
  ];

  function handleChange(event) {
    setSelectedCategory(event.target.value);
  }
  // console.log(isTeacher)

  // getting date and converting it to yyyy-mm-dd
  const [value, onChange] = useState(new Date());
  let formattedDate = Moment(value).format("YYYY-MM-DD");
  // console.log(formattedDate)
  //////////////////////////////////////

  function handleIsTeacherStudent(e) {
    let type;
    e.target.checked === false ? (type = 2) : (type = 3);
    setIsTeacher(type);
  }

  async function Edit_User() {
    let oUser = new P.User();
    oUser.USER_ID = -1;
    oUser.OWNER_ID = 1;
    oUser.FIRST_NAME = firstName;
    oUser.LAST_NAME = lastName;
    oUser.USERNAME = username;
    oUser.MOBILE = mobileNb;
    oUser.DOB = formattedDate;
    oUser.EMAIL = email;
    oUser.PASSWORD = password;
    oUser.USER_TYPE_CODE_ID = isTeacher;
    oUser.IS_ACTIVE = true;

    if (selectedCategory !== "") {
      oUser.IF_USER_TEACHER_ID = selectedCategory;
    }

    // console.log(oUser);
    const result = await myProxy.Edit_User(oUser);

    // console.log(result);
    if (result?.My_User !== null && result?.My_User !== undefined) {
      history.replace("/auth/login", {
        msgLogIn:
          "you have succesfully created ur account please sign in using ur userName and password ",
      });
      alert(JSON.stringify(result.My_User));
    }
    if (result?.ExceptionMsg !== null && result?.ExceptionMsg !== undefined) {
      setErrorMsg(result.ExceptionMsg);
    }

    return result;
  }

  const signUp = () => {
    if (
      username !== "" &&
      password !== "" &&
      email !== "" &&
      firstName !== "" &&
      lastName !== "" &&
      value !== "" &&
      mobileNb !== "" &&
      isTeacher !== "" &&
      selectedCategory !== ""
    ) {
      Edit_User();
    } else {
      alert("fill all fields first");
    }
  };

  function handleEntailmentRequest(e) {
    e.preventDefault();

    // console.log("handle request ");
  }
  return (
    <>
      <Col lg="6" md="8">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>sign up with credentials</small>
            </div>

            <Form role="form">
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-single-02" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="first name"
                    type="text"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-single-02" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="family name"
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-mobile-button" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="phone number"
                    type="text"
                    onChange={(e) => setMobileNb(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="username"
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              <div
                className="text-muted font-italic"
                // style={{ backgroundColor: 'red' }}
              >
                {/* <small>
                  password strength:{" "}
                  <span className="text-success font-weight-700">strong</span>
                </small> */}
                <div className=" text-muted mb-0">
                  <small>Date of Birth:</small>
                </div>
                <div onFocus={() => setShowCalendar(true)}>
                  <input type="text" disabled="true" value={formattedDate} />
                  <button
                    onClick={handleEntailmentRequest}
                    style={{ marginLeft: 3 }}
                  >
                    <i className="ni ni-calendar-grid-58" />
                  </button>
                </div>
                {showCalendar ? (
                  <Calendar
                    onChange={onChange}
                    value={value}
                    defaultView={"year"}
                    defaultValue={new Date(1995, 0, 1)}
                    maxDate={new Date(2005, 0, 1)}
                    minDate={new Date(1921, 0, 1)}
                  />
                ) : (
                  showCalendar
                )}
              </div>
              <div>
                <div class="d-flex justify-content-center my-4">
                  <p class="fs-10 fw-bold">Teacher</p>
                  <label class="switch mx-2">
                    <input
                      type="checkbox"
                      onChange={(e) => handleIsTeacherStudent(e)}
                    />
                    <span class="slider round"></span>
                  </label>
                  <p class="fs-10 fw-bold">Student</p>
                </div>
              </div>
              {isTeacher === 2 ? (
                <select
                  style={{ width: "40%" }}
                  class="custom-select"
                  id="inputGroupSelect01"
                  aria-label=".form-select-sm example"
                  value={selectedCategory}
                  onChange={handleChange}
                >
                  <option value="0" disabled>
                    select a category
                  </option>
                  {categories.map((x) => (
                    <option value={x.value}>{x.name}</option>
                  ))}
                </select>
              ) : null}

              {errorMsg !== "" ? (
                <div>
                  <small style={{ color: "red" }}>{errorMsg}</small>
                </div>
              ) : null}

              <div className="text-center">
                <Button
                  className="mt-4"
                  color="primary"
                  type="button"
                  // onClick={() => signUp()}
                  onClick={() => signUp()}
                >
                  Create account
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Register;
