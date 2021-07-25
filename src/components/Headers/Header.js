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
import React from "react";
// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

const Header = (props) => {

  let featuredTeachers = props?.featuredTeachers?.featuredTeachers ? props.featuredTeachers.featuredTeachers : null;
  let userTypeCode = props.user?.userTypeCode ? props.user.userTypeCode : null;
  // console.log(userTypeCode)
  return (
    <>
      <div className="header pb-8 pt-5 pt-md-8" style={{ background: "linear-gradient(to right, #046d7a, #17b2c3)" }}>
        <Container fluid  >
          <div className="header-body">
            {/* Card stats */}
            {featuredTeachers && userTypeCode === 3 ?
              <h1 style={{ color: 'white' }}>
                featured teachers:
              </h1> : null}
            <Row>
              {featuredTeachers && userTypeCode === 3 ?
                featuredTeachers.map((x, index) => {
                  return <Col style={{ margin: 4 }} key={index} lg="6" xl="3">
                    <Card style={{ height: 150 }} className="card-stats mb-4 mb-xl-0">
                      <CardBody>
                        <Row>
                          <div className="col">
                            <CardTitle
                              tag="h5"
                              className="text-uppercase text-muted mb-0"
                            >
                              {x.DESCRIPTION}{" Teacher"}
                            </CardTitle>
                            {"Dr. "}
                            <span className="h2 font-weight-bold mb-0">
                              {x.FIRST_NAME}
                            </span>
                            {" "}
                            <span className="h2 font-weight-bold mb-0">
                              {x.LAST_NAME}
                            </span>
                          </div>
                          <Col className="col-auto">
                            <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                              <i className="fas fa-chart-bar" />
                            </div>
                          </Col>
                        </Row>
                        <p className="mt-3 mb-0 text-muted text-sm">

                        </p>
                      </CardBody>
                    </Card>
                  </Col>
                })
                : userTypeCode === 2 ?
                  <h1 style={{ color: 'white' }}>teacher is logged in</h1>
                  :
                  null
              }







            </Row>


          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
