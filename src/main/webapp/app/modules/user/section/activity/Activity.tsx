import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import { Col, Row, Button, Card, CardText, CardTitle, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';

import question from '../../questions.json';

function Activity() {
  return (
    <div>
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink className="active" onClick={function noRefCheck() {}}>
              Tab1
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="" onClick={function noRefCheck() {}}>
              More Tabs
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab="1">
          <TabPane tabId="1">
            <Row>
              <Col sm="4" className="col">
                <p>Web and App</p>
                <Link to="/userdashboard/instructions" className="btn">
                  Play
                </Link>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
}

export default Activity;

// <div className="newassign">
//         <Row>
//           <Col className="col">
//             <p>Name of Quiz</p>
//             <Link to="/userdashboard/instructions" className="btn">
//               Play
//             </Link>
//           </Col>
//         </Row>
//       </div>

//       <div className="recent">
//         <h1>No activity performed..</h1>
//         <p>go to home and practice quizes</p>
//       </div>
