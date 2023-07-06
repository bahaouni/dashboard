import React from 'react'
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import { FaArrowUp } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faPercent } from '@fortawesome/free-solid-svg-icons';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';

const Head = () => {
  return (
    <Row style={{ display:"flex" , margin:"20px"}}>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0 " style={{ backgroundColor: "#F7FAFC" ,boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" , height:"153px" }}>
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Traffic
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          350,897
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                        <FontAwesomeIcon icon={faChartBar} />

                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                        <FaArrowUp /> 3.48%
                      </span>{" "}
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0" style={{ backgroundColor: "#F7FAFC" ,boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" , height:"153px" }}>
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          New users
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">2,356</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                        <FontAwesomeIcon icon={faChartPie} />

                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-danger mr-2">
                      <FontAwesomeIcon icon={faArrowDown} />
 3.48%
                      </span>{" "}
                      <span className="text-nowrap">Since last week</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0" style={{ backgroundColor: "#F7FAFC" ,boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" , height:"153px" }}>
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Sales
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">924</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                        <FontAwesomeIcon icon={faUsers} />

                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm" style={{ paddingBottom: "50px "}}>
                      <span className="text-warning mr-2" >
                      <FontAwesomeIcon icon={faArrowDown} />
 1.10%
                      </span>{" "}
                      <span className="text-nowrap">Since yesterday</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0" style={{ backgroundColor: "#F7FAFC" ,boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" , height:"153px" }}>
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Performance
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">49,65%</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                        <FontAwesomeIcon icon={faPercent} />

                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                      <FontAwesomeIcon icon={faArrowUp} />
 12%
                      </span>{" "}
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
  )
}

export default Head