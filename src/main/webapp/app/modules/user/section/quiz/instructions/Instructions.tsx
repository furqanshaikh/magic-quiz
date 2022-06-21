import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col } from 'reactstrap';
import './style.scss';

function Instructions() {
  const history = useHistory();

  const go = () => {
    history.push('/userdashboard/play');
  };

  const back = () => {
    history.push('/userdashboard/activity');
  };
  return (
    <div className="instructions">
      <Col className="col" md="6" lg="6" sm="10">
        <Card className="card">
          <CardBody>
            <CardTitle tag="h1" className="mt-2 text-center">
              Instructions
            </CardTitle>

            <CardSubtitle className="mb-2 text-muted text-center" tag="h6">
              Ensure you read this guide from start to finish.
            </CardSubtitle>

            <CardText className="my-5">
              <ul>
                <li>The game has a duration of 15 minutes and ends as soon as your time elapses.</li>
                <li>Each game consists of 15 questions.</li>
                <li> Every question contains 4 options.</li>
                <li>Select the option which best answers the question by clicking (or selecting) it.</li>
                <li>if you quit (or retire from) the quiz. In that case your remarks will be zero.</li>
                <li>The timer starts as soon as the quiz loads.</li>
                <li>Lets do this if you think you have got what it takes?</li>
              </ul>
            </CardText>

            <div className="btns">
              <Button onClick={back}>No take me back</Button>
              <Button onClick={go}>Lets go</Button>
            </div>
          </CardBody>
        </Card>
      </Col>
    </div>
  );
}

export default Instructions;
