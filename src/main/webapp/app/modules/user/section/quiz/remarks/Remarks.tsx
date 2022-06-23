import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Col } from 'reactstrap';
import './style.scss';
function Remarks() {
  const [grade, setGrade] = useState('');
  const [line, setLine] = useState('');
  const history = useHistory();

  const finalScore = JSON.parse(localStorage.getItem('score'));

  function check() {
    if (finalScore === 15) {
      return setLine('Congrats Your a Brilliant Student of Class'), setGrade('A+');
    } else if (finalScore >= 12) {
      return setLine('Congrats Your a Excellent Student of Class'), setGrade('A');
    } else if (finalScore >= 10) {
      return setLine('Congrats Your a Good Student of Class'), setGrade('B');
    } else if (finalScore >= 8) {
      return setLine('Your a Average Student of Class'), setGrade('C');
    } else if (finalScore >= 6) {
      return setLine('You Gote Poor marks please study hard'), setGrade('D');
    } else if (finalScore >= 4) {
      return setLine('You Got F grade please study hard'), setGrade('F');
    }
  }

  useEffect(() => {
    check();
  }, []);

  const back = () => {
    localStorage.setItem('score', JSON.stringify(0));
    history.push('/userdashboard/home');
  };

  return (
    <div className="remarks">
      <Col className="remarksCol" md="6" sm="10" lg="6">
        <Card className="card">
          <CardBody>
            <CardTitle tag="h5" className="text-center">
              <img src="content/images/remarks.jpg" alt="" />
              Remarks
            </CardTitle>

            <CardSubtitle className="mb-2 text-muted text-center mb-3" tag="h6">
              Your Have Done Achievment
            </CardSubtitle>
            <CardSubtitle className="mb-2 text-muted text-center mb-3" tag="h6">
              {line}
            </CardSubtitle>

            <CardText>
              <ul className="ul">
                <li>
                  {' '}
                  <span>Total Questions</span> <span>15</span>{' '}
                </li>
                <li>
                  {' '}
                  <span>Total Marks</span> <span>15</span>{' '}
                </li>
                <li>
                  {' '}
                  <span>Marks Obtained</span> <span>{finalScore}</span>{' '}
                </li>
                <li>
                  {' '}
                  <span>Grade</span> <span>{grade}</span>{' '}
                </li>
              </ul>
            </CardText>
            <div className="btnwrape">
              <Button className="btn" onClick={back}>
                Home
              </Button>
            </div>
          </CardBody>
        </Card>
      </Col>
    </div>
  );
}

export default Remarks;
