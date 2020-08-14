import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import {  Card, CardHeader, CardBody } from "shards-react";


const UserProfileLite = () => (
<Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Auto Scaling Group" subtitle="Describe" className="text-sm-left" />
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
              <tr >
                          
                          <th scope="col" class="border-0">Name</th>
                          <th scope="col" class="border-0">configuração de execução</th>
                          <th scope="col" class="border-0">Instancias</th>
                          <th scope="col" class="border-0">Status</th>
                          <th scope="col" class="border-0">capacidade</th>
                          <th scope="col" class="border-0">Região</th>
                          {/* <th scope="col" class="border-0"></th> */}
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><a href="teste">instance-globo</a> </td>
                          <td>globo-teste-eks</td>
                          <td>3</td>
                          <td>pending</td>
                          <td>3</td>
                          <td>us-east-2</td>
                          {/* <td>
                          <div class="custom-control custom-checkbox mb-1">
                            <input type="checkbox" class="custom-control-input" id="formsCheckboxDefault"></input>
                            <label class="custom-control-label" for="formsCheckboxDefault"></label>
                          </div>
                          </td> */}
                        </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>

  </Container>
);

export default UserProfileLite;
