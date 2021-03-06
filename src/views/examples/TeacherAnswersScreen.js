import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as functions from "../../apiFunctions/APIs";
// import AnswerQuestion from "views/examples/AnswerQuestion";
import { Container, Row, Card, CardBody, CardTitle, Col } from "reactstrap";
import { Modal } from "react-bootstrap";

import UserHeader from "components/Headers/UserHeader";
import { useDispatch } from "react-redux";
import * as Actions from "../../store/auth";

const TeacherAnswersScreen = (props) => {
  let teacherAnswers = props?.teacherAnswers?.My_Result
    ? props.teacherAnswers.My_Result
    : null;
  const [show, setShow] = useState(false);
  const [answer, setAnswer] = useState("");
  const [myAnswer, setmyAnswer] = useState("");
  const [data, setdata] = useState(
    props?.teacherAnswers?.My_Result ? props.teacherAnswers.My_Result : null
  );
  // useEffect(() => {
  //     Get_Answer_By_TEACHER_ID(props.user.teacherId).then(res => { setdata(res.My_Result) })
  // }, [ props.user.teacherId])
  // // console.log(props.teacherAnswers)
  console.log(data);
  const deleteAnswer = (answerID) => {
    functions.delete_Answer2(answerID, props.user.teacherId).then((res) => {
      setdata(res.My_Result);
    });
    Get_Answer_By_TEACHER_ID(props.user.teacherId);
  };
  useEffect(() => {
    if (props.user.teacherId !== undefined || props.user.teacherId !== null) {
      Get_Answer_By_TEACHER_ID(props.user.teacherId);
    }
  }, []);

  const modalShowHandler = (question) => {
    setShow(!show);

    if (question) {
      setmyAnswer(question);
      // alert(JSON.stringify(question))
    }
  };

  const answerClickHandler = async (question) => {
    var Answer = new Object();
    Answer.ANSWER_ID = question.ANSWER_ID;
    Answer.QUESTION_ID = question.QUESTION_ID;
    Answer.TEACHER_ID = props.user.teacherId;
    Answer.STUDENT_ID = null;
    Answer.DESCRIPTION = answer ? answer : "null";
    Answer.OWNER_ID = question.OWNER_ID;
    alert(JSON.stringify(Answer));

    // alert(JSON.stringify(Answer))
    await functions
      .Edit_Answer(Answer)
      .then(Get_Answer_By_TEACHER_ID(props.user.teacherId))
      .then(setShow(!show));
  };
  let dispatch = useDispatch();

  let answersByTeacher = [];
  // const { user } = props;
  const createTeacherAnswers = (answersByTeacher) => {
    //console.log('shta8al dispatch');
    dispatch(Actions.createTeacherAnswers({ answersByTeacher }));
  };
  async function Get_Answer_By_TEACHER_ID(TEACHER_ID) {
    answersByTeacher = await functions.Get_Answer_By_TEACHER_ID_Adv(TEACHER_ID);

    //alert('TEACHER_ID is : from wassim ' + TEACHER_ID);
    // console.log('shta8let Get_Answer_By_TEACHER_ID_Adv');
    //console.log(answersByTeacher);
    createTeacherAnswers(answersByTeacher);
    return answersByTeacher;
  }

  // console.log('new consoooooooole' + JSON.stringify(props.teacherAnswers.My_Result))
  return (
    <>
      <Row style={{ marginTop: 0 }}>
        {teacherAnswers ? (
          teacherAnswers.map((item) => {
            return (
              <Col style={{ margin: 4 }}>
                <Card
                  style={{
                    height: 350,
                    width: 400,
                    background: "linear-gradient(to right, #046d7a, #17b2c3)",
                    marginTop: 20,
                  }}
                  className="card-stats mb-4 mb-xl-0"
                >
                  <a></a>
                  <CardBody>
                    {/* {console.log("sisi" + item)} */}

                    <div className="col">
                      <CardTitle tag="h5" className="text-uppercase mb-0">
                        <p class="font-weight-bold ">question:</p>
                      </CardTitle>
                      {}
                      <span
                        className="h2 font-weight-bold mb-0"
                        style={{ color: "white" }}
                      >
                        {item.My_Question.DESCRIPTION}
                      </span>{" "}
                    </div>

                    <h4 className="mt-3 mb-0 font-weight-bold text-muted text-sm">
                      your answer :
                    </h4>
                    <text
                      className="h3 mb-0 font-weight-bold"
                      style={{ color: "white" }}
                    >
                      {item.DESCRIPTION.slice(0, 150)}
                      {"..."}
                    </text>
                    {/* <p className="mt-3 mb-0 font-weight-bold text-muted text-sm">
                                            category :
                                        </p> */}
                    <span className="mt-3 mb-0 font-weight-bold text-muted text-sm">
                      {/* {item.My_Question.CATEGORY_ID} */}
                    </span>
                  </CardBody>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <button
                      className="btn btn-primary border-success align-items-center btn-success"
                      type="button"
                      onClick={() => modalShowHandler(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-primary border-success align-items-center btn-warning"
                      type="button"
                      onClick={
                        () =>
                          // modalShowHandler(item)
                          {
                            deleteAnswer(item.ANSWER_ID);
                            Get_Answer_By_TEACHER_ID(props.user.teacherId);
                          }
                        // alert(JSON.stringify(item))
                      }
                    >
                      Delete
                    </button>
                  </div>
                </Card>
              </Col>
            );
          })
        ) : (
          <div
            style={{
              marginTop: 10,
              height: 780,
              display: "flex",
              // backgroundColor: 'red',
              flex: 1,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1 style={{}}>please answer some Questions First</h1>
          </div>
        )}
      </Row>
      <Modal
        fullscreen={true}
        show={show}
        onHide={() => {
          modalShowHandler();
        }}
        size={"lg"}
        centered
        backdrop={"static"}
      >
        <Modal.Header
          className="question bg-white p-3 border-bottom"
          closeButton
        >
          <div
            style={{
              //backgroundColor: 'red',
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              left: "2%",
              paddingTop: "3%",
              // borderBottomWidth: 1,
              // borderColor: "black"
            }}
          >
            <div
              style={{
                //backgroundColor: 'red',
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                // backgroundColor: 'green',
                // left: '2%',
                // paddingTop: '3%',
              }}
            >
              <div
                style={{ marginLeft: 20 }}
                className="d-flex flex-row align-items-center "
              >
                {/* <h2 className="text-danger">Q.</h2> */}

                <h1>
                  {myAnswer?.DESCRIPTION ? myAnswer.DESCRIPTION : null}
                  {/* "DESCRIPTION" */}
                </h1>
              </div>
              <div>
                <h4>
                  {myAnswer?.mycategory?.DESCRIPTION
                    ? myAnswer.mycategory.DESCRIPTION
                    : null}
                </h4>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                // backgroundColor: 'red',
                // marginLeft: 20,
              }}
            >
              <h4>{myAnswer?.ENTRY_DATE ? myAnswer.ENTRY_DATE : null}</h4>
            </div>
          </div>
        </Modal.Header>

        <Modal.Body
          style={{ background: "linear-gradient(to right, #046d7a, #17b2c3)" }}
        >
          {/* <Card style={{}} className="shadow"> */}
          <CardTitle
            tag="h5"
            className="text-uppercase text-muted mb-0"
          ></CardTitle>
          <CardBody>
            <textarea
              class="form-control form-control-lg"
              id="exampleFormControlTextarea1"
              rows="7"
              placeholder="answer here ... "
              aria-label=".form-control-lg example"
              onChange={(e) => {
                setAnswer(e.target.value);
              }}
            ></textarea>
          </CardBody>
          {/* </Card> */}
        </Modal.Body>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 20,
            paddingBottom: 20,
          }}
          // className="question bg-white p-3 border-top align-items-center"
        >
          <button
            // disabled={answer ? false : true}
            onClick={() => {
              answerClickHandler(myAnswer);
            }}
            className="btn border-success align-items-center btn-success"
            type="button"
          >
            {/* Modal button */}
            Answer
          </button>
        </div>
      </Modal>
    </>
  );
};
function mapStateToProps(state) {
  return {
    teacherAnswers: state.teacherAnswers,
    categories: state.categories.categories,
    user: state.user,
  };
}
export default connect(mapStateToProps)(TeacherAnswersScreen);
