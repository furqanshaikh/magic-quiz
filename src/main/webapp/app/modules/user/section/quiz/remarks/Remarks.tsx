import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Col } from 'reactstrap';
import './style.scss';
function Remarks() {
  const history = useHistory();
  const back = () => {
    history.push('/userdashboard/home');
  };
  return (
    <div className="remarks">
      <Col className="col" md="6" sm="10" lg="6">
        <Card className="card">
          <CardBody>
            <CardTitle tag="h5" className="text-center">
              <img src="content/images/remarks.jpg" alt="" />
              Remarks
            </CardTitle>

            <CardSubtitle className="mb-2 text-muted text-center mb-3" tag="h6">
              Your Have Done Achievment
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
                  <span>Marks Obtained</span> <span>12</span>{' '}
                </li>
                <li>
                  {' '}
                  <span>Grade</span> <span>A</span>{' '}
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
