import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import PageTitle from "../components/common/PageTitle";

const Tables = () => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Instance Detail" subtitle="Describe" className="text-sm-left" />
    </Row>

    {/* Default Light Table */}
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">Spot</h6>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
              <tr>
                          <th scope="col" class="border-0">Id</th>
                          <th scope="col" class="border-0">Name</th>
                          <th scope="col" class="border-0">Group Name</th>
                          <th scope="col" class="border-0">Auto scalling group</th>
                          <th scope="col" class="border-0">Region</th>
                          <th scope="col" class="border-0">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>123</td>
                          <td><a href="teste">instance name</a></td>
                          <td>globo-teste</td>
                          <td>Rteste-autoscaling</td>
                          <td>sa-east-1</td>
                          <td>active</td>
                        </tr>
                        <tr>
                          <td>123</td>
                          <td><a href="teste">instance name</a></td>
                          <td>globo-teste</td>
                          <td>Rteste-autoscaling</td>
                          <td>sa-east-1</td>
                          <td>active</td>
                        </tr>
                        <tr>
                          <td>123</td>
                          <td><a href="teste">instance name</a></td>
                          <td>globo-teste</td>
                          <td>Rteste-autoscaling</td>
                          <td>sa-east-1</td>
                          <td>active</td>
                        </tr>
                        <tr>
                          <td>123</td>
                          <td><a href="teste">instance name</a></td>
                          <td>globo-teste</td>
                          <td>Rteste-autoscaling</td>
                          <td>sa-east-1</td>
                          <td>active</td>
                        </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>

    {/* Default Dark Table */}
    <Row>
      <Col>
        <Card small className="mb-4 overflow-hidden">
          <CardHeader className="bg-light">
            <h6 className="m-0 ">On Demand</h6>
          </CardHeader>
          <CardBody className="bg-light p-0 pb-3">
            <table className="table table-light mb-0">
              <thead className="thead-light">
              <tr>
                          <th scope="col" class="border-0">Id</th>
                          <th scope="col" class="border-0">Name</th>
                          <th scope="col" class="border-0">Group Name</th>
                          <th scope="col" class="border-0">Auto scalling group</th>
                          <th scope="col" class="border-0">Region</th>
                          <th scope="col" class="border-0">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>123</td>
                          <td><a href="teste">instance name</a></td>
                          <td>globo-teste</td>
                          <td>Rteste-autoscaling</td>
                          <td>sa-east-1</td>
                          <td>active</td>
                        </tr>
                        <tr>
                          <td>123</td>
                          <td><a href="teste">instance name</a></td>
                          <td>globo-teste</td>
                          <td>Rteste-autoscaling</td>
                          <td>sa-east-1</td>
                          <td>active</td>
                        </tr>
                        <tr>
                          <td>123</td>
                          <td><a href="teste">instance name</a></td>
                          <td>globo-teste</td>
                          <td>Rteste-autoscaling</td>
                          <td>sa-east-1</td>
                          <td>active</td>
                        </tr>
                        <tr>
                          <td>123</td>
                          <td><a href="teste">instance name</a></td>
                          <td>globo-teste</td>
                          <td>Rteste-autoscaling</td>
                          <td>sa-east-1</td>
                          <td>active</td>
                        </tr>
                        
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Tables;
