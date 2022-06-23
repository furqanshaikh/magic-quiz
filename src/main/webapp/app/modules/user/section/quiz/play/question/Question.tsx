import React, { useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';
import './style.scss';
import questions from '../questions.json';

function Question(props: any) {
  const data = props.data;
  const func = props.getCount;
  const [count, setCount] = useState(0);
  const [enable, setEnable] = useState(false);

  const handleOption = e => {
    const qid = e.target.name;
    const qans = e.target.value;
    questions.forEach(i => {
      if (qid === i.id && qans === i.answer) {
        setCount(count + 1);
        func(count + 1);
      }
    });
    setEnable(true);
  };

  return (
    <div className="question" key={data.id}>
      <Col className="singleQuest" md="10" lg="10" sm="10" xs="10">
        <p>
          {' '}
          <b>{data.id})</b> {data.question}{' '}
        </p>
        <Row className="opt">
          <Col className="options" md="4" lg="4" sm="10" xs="10">
            <label>
              <input type="radio" disabled={enable} name={data.id} id="" onClick={handleOption} value={data.optionA} /> {data.optionA}
            </label>
          </Col>
          <Col className="options" md="4" lg="4" sm="10" xs="10">
            <label>
              <input type="radio" disabled={enable} name={data.id} id="" onClick={handleOption} value={data.optionB} /> {data.optionB}
            </label>
          </Col>
        </Row>
        <Row className="opt">
          <Col className="options" md="4" lg="4" sm="10" xs="10">
            <label>
              <input type="radio" disabled={enable} name={data.id} id="" onClick={handleOption} value={data.optionC} /> {data.optionC}
            </label>
          </Col>
          <Col className="options" md="4" lg="4" sm="10" xs="10">
            <label>
              <input type="radio" disabled={enable} name={data.id} id="" onClick={handleOption} value={data.optionD} /> {data.optionD}
            </label>
          </Col>
        </Row>
      </Col>
    </div>
  );
}

export default Question;
