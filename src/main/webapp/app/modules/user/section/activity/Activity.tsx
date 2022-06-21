import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import { Col, Row, Button } from 'reactstrap';

import question from '../../questions.json';

function Activity() {
  return (
    <div className="quiz">
      <div className="newassign">
        <Row>
          <Col className="col">
            <h5>
              Quiz assigend by <span className="prof"> Professor Muttahar </span>
            </h5>
            <Link to="/userdashboard/instructions" className="btn">
              Play
            </Link>
          </Col>
        </Row>
      </div>

      <hr />

      <div className="recent">
        <h1>No activity performed..</h1>
        <p>go to home and practice quizes</p>
      </div>
    </div>
  );
}

export default Activity;
