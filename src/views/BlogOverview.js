import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

// import {

//   FormSelect,
//   CardFooter
// } from "shards-react";

import PageTitle from "./../components/common/PageTitle";
import SmallStats from "./../components/common/SmallStats";
//import UsersOverview from "./../components/blog/UsersOverview";
import UsersByDevice from "./../components/blog/UsersByDevice";

const BlogOverview = ({ smallStats }) => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle title="Open Spot Metrics" subtitle="Dashboard" className="text-sm-left mb-3" />
    </Row>

    {/* Small Stats Blocks */}
    <Row>
      {smallStats.map((stats, idx) => (
        <Col className="col-lg mb-4" key={idx} {...stats.attrs}>
          <SmallStats
            id={`small-stats-${idx}`}
            variation="1"
            chartData={stats.datasets}
            chartLabels={stats.chartLabels}
            label={stats.label}
            value={stats.value}
            percentage={stats.percentage}
            increase={stats.increase}
            decrease={stats.decrease}
          />
        </Col>
      ))}
    </Row>

    <Row>
      {/* instances table */}
      <Col lg="8" md="12" sm="12" className="mb-4" >
      <div class="row" >
              <div class="col">
                <div class="card card-small mb-4" >
                  {/* style={{ overflow: "scroll" }} */}
                  <div class="card-header border-bottom" >
                    <h6 class="m-0">All Auto scalign groups</h6>
                  </div>
                  <div class="card-body p-0 pb-3 text-center"  >
                    <table class="table mb-7"  >
                      <thead class="bg-light">
                        <tr >
                          
                          <th scope="col" class="border-0">Name</th>
                          <th scope="col" class="border-0">confi de exec</th>
                          <th scope="col" class="border-0">Instance</th>
                          <th scope="col" class="border-0">Status</th>
                          <th scope="col" class="border-0">capacibility</th>
                          <th scope="col" class="border-0">Region</th>
                          <th scope="col" class="border-0">Tag</th>
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
                          <td>
                          <div class="custom-control custom-checkbox mb-1">
                            <input type="checkbox" class="custom-control-input" id="formsCheckboxDefault"></input>
                            <label class="custom-control-label" for="formsCheckboxDefault"></label>
                          </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            
            {/* <CardFooter className="border-top">
          <Row>
            <Col lg="4" md="6" sm="8" className="mb-4">
            <div class="" >
                    <h6 class="m-0"> Autoscaling Group tags</h6>
                    
                  </div>
                  
            <p></p>
              <FormSelect
                size="md"
                value="last-week"
                style={{ maxWidth: "130px" }}
                onChange={() => {}}
              >
                <option value="tag names">Tag names:</option>
                <option value="">...</option>
                
              </FormSelect><br></br>
              <span style={{ fontSize: "10px" }}>For enable Spot provisionig service</span>
             
            </Col>
            <Col className="text-right">
            <div style={{ marginTop: "14%" }}>
                
            </div>
            
            <button type="submit" style={{ maxHeight: "4s0px" }} class=" mb-5 mr-3 btn btn-primary">Confirm</button>            
            </Col>
            
          </Row>
        </CardFooter> */}

      </Col>

      

      {/* Top Referrals */}
      {/* <Col lg="8" md="12" sm="12" className="mb-4">
        <TopReferrals />
      </Col>
       */}
      {/* Users by Device */}
      <Col lg="4" md="6" sm="12" className="mb-4">
        <UsersByDevice />
      </Col>

      {/* New Draft */}
      {/* <Col lg="4" md="6" sm="12" className="mb-4">
        <NewDraft />
      </Col> */}

      {/* Discussions */}
      {/* <Col lg="5" md="12" sm="12" className="mb-4">
        <Discussions />
      </Col> */}

      {/* instances table */}
      <Col lg="12" md="12" sm="12" className="mb-4">
      <div class="row">
              <div class="col">
                <div class="card card-small mb-4">
                  <div class="card-header border-bottom">
                    <h6 class="m-0">All instances list</h6>
                  </div>
                  <div class="card-body p-0 pb-3 text-center">
                    <table class="table mb-0">
                      <thead class="bg-light">
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
                        
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
      </Col>

      
    </Row>
  </Container>
);

BlogOverview.propTypes = {
  /**
   * The small stats dataset.
   */
  smallStats: PropTypes.array
};

BlogOverview.defaultProps = {
  smallStats: [
    {
      label: "Running Spots",
      value: "123",
      percentage: "4.7%",
      increase: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "6", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(0, 184, 216, 0.1)",
          borderColor: "rgb(0, 184, 216)",
          data: [1, 2, 1, 3, 5, 4, 7]
        }
      ]
    },
    {
      label: "Total Spot Hours",
      value: "123",
      percentage: "12.4",
      increase: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "6", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(23,198,113,0.1)",
          borderColor: "rgb(23,198,113)",
          data: [1, 2, 3, 3, 3, 4, 4]
        }
      ]
    },
    {
      label: "Spot Cost",
      value: "123",
      percentage: "3.8%",
      increase: false,
      decrease: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "4", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(255,180,0,0.1)",
          borderColor: "rgb(255,180,0)",
          data: [2, 3, 3, 3, 4, 3, 3]
        }
      ]
    },
    {
      label: "Saving",
      value: "123  ",
      percentage: "2.71%",
      increase: false,
      decrease: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "4", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(255,65,105,0.1)",
          borderColor: "rgb(255,65,105)",
          data: [1, 7, 1, 3, 1, 4, 8]
        }
      ]
    },
    {
      label: "Total Saving",
      value: "123",
      percentage: "2.4%",
      increase: false,
      decrease: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "4", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgb(0,123,255,0.1)",
          borderColor: "rgb(0,123,255)",
          data: [3, 2, 3, 2, 4, 5, 4]
        }
      ]
    }
  ]
};

export default BlogOverview;
