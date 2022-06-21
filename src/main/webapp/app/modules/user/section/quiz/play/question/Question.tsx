import React from 'react';
import { Col, Row } from 'reactstrap';
import './style.scss';

function Question(props: any) {
  const data = props.data;

  return (
    <div className="question container">
      <Col className="col" md="10" lg="10" sm="10" xs="10">
        <p>
          {' '}
          <b>{data.id})</b> {data.question}{' '}
        </p>
        <Row className="opt">
          <Col className="col" md="4" lg="4" sm="10" xs="10">
            <label>
              <input type="radio" name={data.id} id="" /> {data.optionA}
            </label>
          </Col>
          <Col className="col" md="4" lg="4" sm="10" xs="10">
            <label>
              <input type="radio" name={data.id} id="" /> {data.optionB}
            </label>
          </Col>
        </Row>
        <Row className="opt">
          <Col className="col" md="4" lg="4" sm="10" xs="10">
            <label>
              <input type="radio" name={data.id} id="" /> {data.optionC}
            </label>
          </Col>
          <Col className="col" md="4" lg="4" sm="10" xs="10">
            <label>
              <input type="radio" name={data.id} id="" /> {data.optionC}
            </label>
          </Col>
        </Row>
      </Col>
    </div>
  );
}

export default Question;
