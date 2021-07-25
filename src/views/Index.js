
import React, { useState, useEffect } from "react";

// node.js library that concatenates classes (strings)
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
// reactstrap components
import {
  Card,
  Container,
  Row,
  Col,
  CardBody,
  CardTitle,
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
} from "variables/charts.js";

import Header from "components/Headers/Header.js";
import { connect } from 'react-redux';
import {
  Proxy
} from '../fetch/fetch'
import * as P from '../fetch/fetch';
import * as functions from '../apiFunctions/APIs';
import * as Actions from '../store/auth';
import { useDispatch } from 'react-redux';
import AnswerDetails from "./AnswerDetails";
import Question from "components/Question/Question";

const Index = (props) => {
  let featuredAnswers = props?.featuredAnswers?.answers ? props.featuredAnswers.answers : null;
  let answerDetails;
  const [answerDetailsState, setAnswerDetailsState] = useState(1);


  useEffect(() => {
    setAnswerDetailsState(answerDetails)
  }, [answerDetails])
  let dispatch = useDispatch();
  let featuredAsnwersResult;
  let unansweredQuestions;

  const [selectedCategory, setSelectedCategory] = useState();
  const [description, setDescription] = useState();
  let studentId = props.user.studentId;
  let ownerId = 1; //fix if can after 10 years
  const [isPublic, setIsPublic] = useState(true);
  const handleCheckBox = () => setIsPublic(!isPublic);
  const [show, setShow] = useState(false);
  let user = props?.user ? props.user : null;


  //
  // const [categories, setcategories] = useState([
  //   { id: '1', name: "phy" },
  //   { id: '2', name: 'bio' },
  //   { id: '3', name: "programming" },

  // ]);

  const categories = [
    { value: '1', name: "phy" },
    { value: '2', name: 'bio' },
    { value: '3', name: "programming" },
  ];

  const handleFeaturedAnswers = answers => {
    dispatch(Actions.createFeaturedAnswers({ answers }));
  }
  const handleUnansweredQuestions = answers => {
    dispatch(Actions.createUnansweredQuestions({ answers }));
  }

  async function getFeaturedAsnwers(ownerId) {
    featuredAsnwersResult = await functions.Get_Answer_By_OWNER_ID_Adv(ownerId);
    handleFeaturedAnswers(featuredAsnwersResult.slice(0, 10).sort((a, b) => (a.ANSWER_ID < b.ANSWER_ID) ? 1 : -1));
  };
  async function getUnansweredQuestion(ownerId) {
    unansweredQuestions = await functions.Get_Question_By_OWNER_ID(ownerId);
    handleUnansweredQuestions(unansweredQuestions.slice(0, 30).sort((a, b) => (a.QUESTION_ID < b.QUESTION_ID) ? 1 : -1));
  };


  const handleAnswerDetails = answerDetails => {
    dispatch(Actions.createAnswersDetails({ answerDetails }));
  }
  async function Get_Answer_Details(QUESTION_ID) {
    answerDetails = await functions.Get_Answer_Details(QUESTION_ID);
    handleAnswerDetails(answerDetails);
  };




  useEffect(() => {
    async function Get_Category_By_OWNER_ID(CATEGORY_ID) {
      let categories = await functions.Get_Category_By_OWNER_ID(CATEGORY_ID);
      dispatch(Actions.createCategories({ categories }));
    };
    Get_Category_By_OWNER_ID(1);
  }, [])


  useEffect(() => {
    getFeaturedAsnwers(1);
    getUnansweredQuestion(1);
  }, [])




  const clickHandler = (QUESTION_ID) => {
    Get_Answer_Details(QUESTION_ID)
    setShow(!show)
  };




  function handleChange(event) {
    setSelectedCategory(event.target.value);
  }
  function handleDescription(event) {
    setDescription(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
  }



  async function addQuestion
    (categoryId,
      description,
      studentId,
      isPublic,
      ownerId) {
    let oQuestion = new P.Question();

    oQuestion.QUESTION_ID = -1;
    oQuestion.CATEGORY_ID = categoryId;
    oQuestion.DESCRIPTION = description;
    oQuestion.STUDENT_ID = studentId;
    oQuestion.IS_ANSWERED = false;
    oQuestion.IS_PUBLIC = isPublic;
    oQuestion.IS_SELF_CLOSED = false;
    oQuestion.OWNER_ID = ownerId;
    oQuestion.ENTRY_USER_ID = 1;

    // let result = await myProxy.Edit_Question(oQuestion);
    // console.log(result);
    // if (result?.My_Result) {
    //   // console.log(result);
    //   handleFeaturedteachers(result.My_Result);

    // }
  }







  // get 
  // let oParams_Get_User_By_OWNER_ID = new P.Params_get_teacher();
  //   oParams_Get_User_By_OWNER_ID.OWNER_ID = 1;





  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }




  const hide = () => {

    setShow(false)
  };
  return (
    <>
      <AnswerDetails onClick={clickHandler} visible={show} hide={hide} answerDetails={answerDetailsState} />

      {user !== null && user.userTypeCode === 2 ?
        <Question></Question>
        :
        null}


      <Header
        user={props.user}
        featuredTeachers={props.featuredTeachers}
      />


      {/* Page content */}

      <Container className="mt--7" fluid>
        {user !== null && user.userTypeCode === 3 ?
          <Row style={{ justifyContent: 'center' }} >
            <Col className="mb-5 mb-xl-0" xl="8">
              <Card style={{ padding: 60, margin: 30 }} className="bg-gradient-default shadow">
                <form onSubmit={handleSubmit}>
                  <fieldset >
                    <legend style={{ color: "rgb(235, 240, 255)" }}>ask a question !!</legend>
                    <div style={{ backgroundColor: "rgb(215, 224, 252)", margin: 10, borderRadius: 10, padding: 20 }}>
                      <label style={{ fontWeight: 'bold' }}>Tips on getting good answers quickly:</label>
                      <ul>
                        <li>
                          Make sure your question has not been asked already.
                        </li>
                        <li>
                          Keep your question short and to the point.
                        </li>
                        <li>
                          Double-check grammar and spelling.
                        </li>
                      </ul>
                    </div>
                    <div style={{ marginInline: 10 }}>

                      <div class="mb-3">
                        <label style={{ color: "rgb(235, 240, 255)" }}
                          for="textInput"
                          class="form-label"
                        >question:</label>
                        {/* <textarea rows="5" cols="50" id="multiLineInput"></textarea> */}
                        <input type="text" id="textInput" class="form-control" placeholder="example: why the sky is blue?"
                          onChange={(text => handleDescription(text))}
                        />
                      </div>

                      {/* <label for="disabledSelect" class="form-label">select category</label> */}
                      <select style={{ width: '40%' }}
                        class="custom-select"
                        id="inputGroupSelect01"
                        aria-label=".form-select-sm example"
                        value={selectedCategory}
                        onChange={handleChange}
                      >
                        <option value='0' disabled>select a category</option>
                        {categories.map((x) =>
                        (
                          <option value={x.value}>{x.name}</option>

                        ))}

                      </select>

                      <div class="mb-3">
                        <div class="form-check">
                          <input class="form-check-input"
                            type="checkbox"
                            id="isPublicCheckbox"
                            checked={!isPublic}
                            onClick={handleCheckBox}

                          />

                          <label class="form-check-label" for="isPublicCheckbox">
                            make this question only visible to teachers i follow
                          </label>
                        </div>
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary"
                      disabled={selectedCategory && description ? false : true}
                      onClick={() => addQuestion(selectedCategory, description, studentId, isPublic, ownerId)}>
                      Submit

                    </button>
                  </fieldset>
                </form>
                {/* <select class="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">bio</option>
              <option value="2">phy</option>
              <option value="3">programming</option>
            </select> */}
              </Card>
            </Col>
          </Row>


          : null}
        {user !== null && user.userTypeCode === 3 ?

          <>
            <h1 style={{ color: 'black' }}>
              latest answered Questions:
            </h1>
            <Row>

              {
                featuredAnswers ?
                  featuredAnswers.map((item) =>
                  (
                    <Col
                      style={{ margin: 4 }}
                    >
                      <Card

                        style={{ height: 300, width: 400, background: "linear-gradient(to right, #046d7a, #17b2c3)", marginTop: 20 }} className="card-stats mb-4 mb-xl-0">
                        <a onClick={() => clickHandler(item.QUESTION_ID)} >
                          <CardBody>
                            <Row>
                              <div className="col">
                                <CardTitle
                                  tag="h5"
                                  className="text-uppercase mb-0"
                                >
                                  <p class="font-weight-bold ">question :</p>

                                </CardTitle>
                                { }
                                <span className="h2 font-weight-bold mb-0">
                                  {item.question.slice(0, 47)}
                                </span>
                                {" "}

                              </div>
                              <Col className="col-auto">

                              </Col>
                            </Row>

                            <h4 className="mt-3 mb-0 font-weight-bold text-muted text-sm">
                              answer :
                            </h4>
                            <text className='h3 mb-0 font-weight-bold'>
                              {item.answer.slice(0, 100)}{"..."}
                            </text >
                            <p className="mt-3 mb-0 font-weight-bold text-muted text-sm">
                              category :
                            </p>
                            <span className="mt-3 mb-0 font-weight-bold text-muted text-sm" > {item.CATEGORY_ID}</span>
                          </CardBody>
                        </a>
                      </Card>
                    </Col>

                  )
                  )
                  :
                  <div>
                    <h1>
                      teacher is logged inn
                    </h1>
                  </div>
              }


            </Row>
          </>

          :
          <div>
            <h1>
              teacher is logged inn
            </h1>
          </div>
        }


      </Container>
    </>
  );
};
function mapStateToProps(state) {
  return {
    featuredTeachers: state.featuredTeachers,
    user: state.user,
    featuredAnswers: state.featuredAnswers,
    answerDetails: state.answerDetails
  }
}
export default connect(mapStateToProps)(Index);
