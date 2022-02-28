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


//#region imports
*/
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as Actions from "../../store/auth";

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
import { useSelector, useDispatch } from "react-redux";
//#endregion

const Login = (props) => {
  //let datdaFromRegister = props?.history?.location?.state ? props.history.location.state : null;
  // #region Declaration And Initialization Section.
  let myProxy = new Proxy();
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  let [errorMsg, setErrorMsg] = useState("");
  let dispatch = useDispatch();
  let history = useHistory();
  //#endregion

  //#region methods

  //#region method to get N featured teacher
  async function getTopNTeachers(NUMBER_OF_TEACHERS) {
    let oParams_Get_Top_N_Teachers = new P.Params_Get_Top_N_Teachers();
    oParams_Get_Top_N_Teachers.NUMBER_OF_TEACHERS = NUMBER_OF_TEACHERS;
    let result = await myProxy.GetTopNTeachers(oParams_Get_Top_N_Teachers);

    if (result?.My_Result) {
      // console.log(result);
      handleFeaturedteachers(result.My_Result);
    }

    //test
    // console.log('some featured TEACHERS ARE')
    // console.log(result.My_Result)
  }
  //#endregion

  // // async function getStudentByUserId(userId) {
  //   let oParams_Get_Student_By_USER_ID = new P.Params_Get_Student_By_USER_ID();
  //   oParams_Get_Student_By_USER_ID.USER_ID = userId;
  //   let result = await myProxy.Get_Student_By_USER_ID(oParams_Get_Student_By_USER_ID);
  //   console.log(result.My_Result)
  //   if (result?.My_Result) {
  //     console.log(result);
  //     handleFeaturedteachers(result.My_Result);

  //   }

  //   //test
  //   console.log('some featured TEACHERS ARE')
  //   console.log(result.My_Result)
  // }

  const handleAPiError = (error) => {
    dispatch(Actions.APIError({ error }));
  };

  const handleFeaturedteachers = (featuredTeachers) => {
    dispatch(Actions.createFeaturedteachers({ featuredTeachers }));
  };

  const isFieldsEmpty = () => {
    if (email !== "" && password !== "") {
      SignIn();
    } else {
      setErrorMsg("fill all fields first");
    }
  };

  //#region authinticate method & fill user data in redux
  async function SignIn() {
    // student parameter to login
    let oParams_Authenticate = new P.Params_Authenticate();
    oParams_Authenticate.EMAIL = email;
    oParams_Authenticate.PASSWORD = password;
    let result = await myProxy.Authenticate(oParams_Authenticate);
    if (result?.My_Result) {
      //run handleUserData() to put user data in store
      handleUserData(result.My_Result);
      if (result?.My_Result.USER_TYPE_CODE_ID === 2) {
        // navigate to profile/home page
        // history.push("/admin/user-profile")
        history.push("/admin/index");
      }
      if (result?.My_Result.USER_TYPE_CODE_ID === 3) {
        history.push("/admin/index");
      }
    }

    if (result?.ExceptionMsg) {
      //log error if exists
      setErrorMsg(result.ExceptionMsg);
      handleAPiError(result?.ExceptionMsg);
      console.log("error was sent:" + result?.ExceptionMsg);
    }
  }
  //#endregion

  //#region Put user data in redux after login
  const handleUserData = (user) => {
    // alert(JSON.stringify(user))
    dispatch(
      Actions.createUser({
        username: user.USERNAME,
        firstName: user.FIRST_NAME,
        lastName: user.LAST_NAME,
        email: user.EMAIL,
        phoneNb: user.MOBILE,
        dob: user.DOB,
        userTypeCode: user.USER_TYPE_CODE_ID,
        userId: user.USER_ID,
        studentId: user.STUDENT_ID,
        teacherId: user.TEACHER_ID,
        myTicket: user.myTicket,
      })
    );
  };
  //#endregion
  //#endregion

  //#region useEffects

  useEffect(() => {
    getTopNTeachers(6);
    // getStudentByUserId(1);
  }, []);
  //#endregion

  function handleKeyPress(event) {
    if (event.keyCode === 13) {
      isFieldsEmpty();
    }
  }

  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>sign in with credentials</small>
            </div>
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
                {/* <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                  />
                </InputGroup> */}
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
                    onKeyDown={handleKeyPress}
                  />
                </InputGroup>
                {errorMsg !== "" ? (
                  <div>
                    <small style={{ color: "red" }}>{errorMsg}</small>
                  </div>
                ) : null}
              </FormGroup>

              <div className="text-center">
                <Button
                  className="my-4"
                  color="primary"
                  type="button"
                  onClick={() => isFieldsEmpty()}

                  // onClick={() => props.history.push({ pathname: '/user-profile' })}
                >
                  Sign in
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Forgot password?</small>
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Create new account</small>
            </a>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Login;
