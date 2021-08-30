
import React, { useState } from "react";
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";
import * as functions from "../../apiFunctions/APIs";
// import AnswerQuestion from "views/examples/AnswerQuestion";
import {
  Container,
  Row,
  Card,
  CardBody,
  CardTitle,


} from "reactstrap";



const Question = (props) => {

  const [show, setShow] = useState(false);
  const [myQuestion, setMyQuestion] = useState('');
  let [answer, setAnswer] = useState('');

  let unansweredQuestions = props?.unansweredQuestions ? props.unansweredQuestions : null;
  // console.log(unansweredQuestions);


  const clickHandler = (question) => {
    setShow(!show);
    setMyQuestion(question);
    // console.log(question);
  };


  const answerClickHandler = () => {
    var Answer = new Object();
    Answer.ANSWER_ID = -1;
    Answer.QUESTION_ID = myQuestion?.QUESTION_ID;
    Answer.TEACHER_ID = props?.user?.userId;
    Answer.STUDENT_ID = null;
    Answer.DESCRIPTION = answer;
    // Answer.ENTRY_USER_ID = 1;
    // Answer.ENTRY_DATE = '1900-01-01';
    Answer.OWNER_ID = 1;

    functions.Edit_Answer(Answer);
    // console.log(Answer);

  };

  const hide = () => {

    setShow(false)
  };


  // let userTypeCode = props.user?.userTypeCode ? props.user.userTypeCode : null;
  // console.log(userTypeCode)
  return (
    <>
      <div className="header pb-8 pt-5 pt-md-8" style={{ background: "linear-gradient(to right, #046d7a, #17b2c3)" }}>
        <Container fluid  >

          <Modal
            fullscreen={true}
            show={show}
            onHide={hide}
            size={'lg'}
            centered
            backdrop={'static'}
          >
            <Modal.Header
              className="question bg-white p-3 border-bottom"
              closeButton
            >
              <div
                style={{
                  //backgroundColor: 'red',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  left: '2%',
                  paddingTop: '3%',
                  // borderBottomWidth: 1,
                  // borderColor: "black"
                }}
              >





                <div style={{
                  //backgroundColor: 'red',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  // backgroundColor: 'green',
                  // left: '2%',
                  // paddingTop: '3%',
                }}>
                  <div
                    style={{ marginLeft: 20 }}
                    className="d-flex flex-row align-items-center ">


                    <h2 className="text-danger">Q.</h2>

                    <h1 > {myQuestion.DESCRIPTION}</h1>


                  </div>
                  <div>
                    <h4>
                      {myQuestion?.mycategory?.DESCRIPTION ?
                        myQuestion.mycategory.DESCRIPTION
                        :
                        null
                      }

                    </h4>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-between',
                    // backgroundColor: 'red',
                    // marginLeft: 20,
                  }}
                >
                  {myQuestion?.mystudent?.My_User ?
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginLeft: 20,

                      }}
                    >
                      <h4>
                        {myQuestion.mystudent.My_User.FIRST_NAME}
                      </h4>
                      <h4
                        style={{ marginLeft: 5 }}
                      >
                        {myQuestion.mystudent.My_User.LAST_NAME}
                      </h4>
                    </div>

                    :
                    null
                  }
                  <h4>
                    {myQuestion?.ENTRY_DATE ?
                      myQuestion.ENTRY_DATE :
                      null
                    }
                  </h4>


                </div>
              </div>

            </Modal.Header>

            <Modal.Body
              style={{ background: 'linear-gradient(to right, #046d7a, #17b2c3)' }}
            >
              {/* <Card style={{}} className="shadow"> */}
              <CardTitle
                tag="h5"
                className="text-uppercase text-muted mb-0"
              >


              </CardTitle>
              <CardBody>

                <textarea
                  class="form-control form-control-lg"
                  id="exampleFormControlTextarea1"
                  rows="7"
                  placeholder="answer here ... "
                  aria-label=".form-control-lg example"
                  onChange={e => setAnswer(e.target.value)}

                >

                </textarea>
              </CardBody>
              {/* </Card> */}
            </Modal.Body>
            <div

              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 20,
                paddingBottom: 20,

              }}
            // className="question bg-white p-3 border-top align-items-center"
            >
              <button
                disabled={answer ? false : true}
                onClick={() => {
                  answerClickHandler()
                }}
                className="btn border-success align-items-center btn-success" type="button">
                {/* Modal button */}
                Answer
              </button>
            </div>
          </Modal>
          <div className="container mt-5">
            {unansweredQuestions ?
              <div className="d-flex justify-content-center row"
                style={{ marginBottom: 20 }}
              >

                <h1>
                  Questions you may answer:
                </h1>
              </div> : null
            }

            {unansweredQuestions ?

              unansweredQuestions.map((question) => {

                return (


                  <div className="d-flex justify-content-center row"
                    style={{ marginBottom: 20 }}
                  >
                    <div className="col-md-10 col-lg-10">
                      <div className="border">
                        <div className="question bg-white p-3 border-bottom">
                          <div className="d-flex flex-row justify-content-between align-items-center mcq">
                            <h4>
                              {question.mycategory.DESCRIPTION}
                            </h4>

                            <span>
                              {question.mystudent.My_User.FIRST_NAME}
                              {" "}
                              {question.mystudent.My_User.LAST_NAME}
                            </span>

                          </div>

                        </div>
                        <div className="question bg-white p-3 border-bottom">
                          <div className="d-flex flex-row align-items-center question-title">
                            <h3 className="text-danger">Q.</h3>
                            <h5 className="mt-1 ml-2">
                              {question.DESCRIPTION}
                            </h5>
                          </div>

                        </div>
                        <div className="d-flex flex-row justify-content-between align-items-center p-3 bg-white">
                          <button className="btn btn-primary d-flex align-items-center btn-danger" type="button">
                            {/* <i className="fa fa-angle-left mt-1 mr-1"></i> */}
                            &nbsp;report question
                          </button>
                          <button
                            onClick={() => clickHandler(question)}
                            className="btn btn-primary border-success align-items-center btn-success" type="button">
                            Answer
                            <i className="fa fa-angle-right ml-2"></i></button>
                        </div>

                      </div>
                    </div>
                  </div>
                )
              })

              :
              null
            }
          </div>
        </Container>
      </div >
    </>
  );
};
function mapStateToProps(state) {
  return {
    unansweredQuestions: state.unansweredQuestions,
    user: state.user
  }
}
export default connect(mapStateToProps)(Question);
