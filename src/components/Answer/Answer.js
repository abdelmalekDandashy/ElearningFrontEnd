
import React, { useState } from "react";
import { connect } from "react-redux";
import * as functions from "../../apiFunctions/APIs";
// import AnswerQuestion from "views/examples/AnswerQuestion";
// import {
//     Container,
//     Row,
//     Card,
//     CardBody,
//     CardTitle,


// } from "reactstrap";



const Answer = (props) => {







    // let userTypeCode = props.user?.userTypeCode ? props.user.userTypeCode : null;
    // console.log(userTypeCode)
    return (
        <>
            <div>
                <h1>ana el answer</h1>
            </div >
        </>
    );
};
function mapStateToProps(state) {
    return {
        teacherAnswers: state.teacherAnswers,
        // user: state.user,

    }
}
export default connect(mapStateToProps)(Answer);
