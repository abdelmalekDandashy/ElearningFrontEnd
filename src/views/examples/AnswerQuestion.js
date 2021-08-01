import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import {
    Card,
    Container,
    Row,
    Col,
    CardTitle,
} from "reactstrap";


const AnswerQuestion = (props) => {
    //  const [answerDetails, setAnswerDetails] = useState(props?.AnswerDetails?.AnswerDetails ? props.answerDetails : null)
    // console.log(answerDetails);
    const [questionCategory, setQuestionCategory] = useState(null);
    let answerDetails = props.answerDetails
    let categories = props.categories;
    // console.log(categories);
    // console.log(answerDetails);

    return (
        <Container className="mt--7" fluid>



            <div>


                <Modal
                    fullscreen={true}
                    show={props.visible}
                    onHide={props.hide}
                    size={'lg'}
                    centered
                >


                    <Modal.Header
                        style={{
                            position: 'relative', left: '15%',
                            paddingTop: '5%',
                        }}
                        closeButton>
                        <Modal.Title
                        >
                            <h1 className='text-left'>  QUESTION: </h1>
                            <h3 style={{ color: 'black' }}> {answerDetails ? answerDetails[0].QUESTION : null}</h3>

                            <h5 style={{ color: "grey" }}> asked by : <span style={{ color: "#046d7a" }}>
                                {answerDetails ? answerDetails[0].STUDENT_FIRST_NAME : null}
                                {" "}
                                {answerDetails ? answerDetails[0].STUDENT_LAST_NAME : null}
                            </span>
                                <span style={{ color: "#046d7a", marginLeft: 20 }}>
                                    {"category: "}
                                    {questionCategory ? categories[questionCategory].DESCRIPTION : null}
                                </span>
                            </h5>

                            <h2>Answers : </h2>

                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body
                        style={{ background: 'linear-gradient(to right, #046d7a, #17b2c3)' }}
                    >
                        <Row style={{ justifyContent: 'center' }} >
                            {answerDetails ?
                                answerDetails.map(function (item, i) {
                                    if (questionCategory !== item.CATEGORY_ID) {
                                        setQuestionCategory(item.CATEGORY_ID)
                                    };

                                    return <Col className="mb-5 mb-xl-0" xl="9">
                                        <Card style={{ padding: 20, marginBottom: 20 }} className="shadow">
                                            <CardTitle
                                                tag="h5"
                                                className="text-uppercase text-muted mb-0"
                                            >

                                                <h4 style={{ fontWeight: 'bold' }}>
                                                    <span><img
                                                        style={{ width: 20, height: 20, marginRight: 5 }}
                                                        alt="..."
                                                        className="rounded-circle"
                                                        src={
                                                            require("../assets/img/theme/team-4-800x800.jpg")
                                                                .default
                                                        }
                                                    /></span>
                                                    DR. {item.TEACHTER_F_NAME} {item.TEACHTER_L_NAME}
                                                </h4>
                                            </CardTitle>
                                            <h3 style={{ color: "#046d7a" }}>{item.ANSWER}</h3>


                                        </Card>
                                    </Col>
                                })
                                : null}
                            {/* {props?.answerDetails?.map(function (item, i) {

                        return <div style={{ backgroundColor: 'red' }}>
                            <h1>hello</h1>

                        </div>
                    })} */}
                        </Row>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={props.hide}>
                            Close
                        </Button>

                    </Modal.Footer>

                </Modal>
            </div>
        </Container>
    );
};

function mapStateToProps(state) {
    return {
        answerDetails: state.answerDetails.answerDetails,
        categories: state.categories.categories,
    }
}
export default connect(mapStateToProps)(AnswerQuestion);
