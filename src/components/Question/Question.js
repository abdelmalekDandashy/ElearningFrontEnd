
import React from "react";
import { connect } from "react-redux";
import { Container } from "reactstrap";

const Question = (props) => {

  let unansweredQuestions = props?.unansweredQuestions ? props.unansweredQuestions : null;
  console.log(unansweredQuestions);



  // let userTypeCode = props.user?.userTypeCode ? props.user.userTypeCode : null;
  // console.log(userTypeCode)
  return (
    <>
      <div className="header pb-8 pt-5 pt-md-8" style={{ background: "linear-gradient(to right, #046d7a, #17b2c3)" }}>
        <Container fluid  >
          <div className="container mt-5">

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
                          <button className="btn btn-primary border-success align-items-center btn-success" type="button">
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
      </div>
    </>
  );
};
function mapStateToProps(state) {
  return {
    unansweredQuestions: state.unansweredQuestions
  }
}
export default connect(mapStateToProps)(Question);
