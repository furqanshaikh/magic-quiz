import React, { useState } from 'react';

import { Col, Input, Row, InputGroup, Button, Label, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './style.scss';

export const Img = () => <img src="content/images/blanks.png" className="img" alt="blanks" />;
function Home() {
  const [check, setCheck] = useState(false);

  const count = ['Web and App', 'Security', 'Data Warehouse', 'Computer Graphics'];

  return (
    <div className="home">
      <h1>For Quiz Practices</h1>

      {count.map(i => (
        <div className="category" key={i}>
          <h4>{i}</h4>
          <Row>
            <Col className=" col">
              <Img />
              <hr className="line" />
              <div className="details">
                <div className="detail__head">
                  <span className="topic">Web Mining</span>
                  <span className="play">
                    <Button className="playBtn"> Play </Button>
                  </span>
                </div>
                <div className="detail__foot">
                  <span className="types">
                    <InputGroup>
                      <Label className="label">
                        <Input type="radio" name="types" /> T/F{' '}
                      </Label>
                      <Label className="label">
                        <Input type="radio" name="types" /> Mcqs{' '}
                      </Label>
                      <Label className="label">
                        <Input type="radio" name="types" /> Blanks{' '}
                      </Label>
                    </InputGroup>
                  </span>
                  <span className="qty">
                    <span>Quantity: </span>
                    <Input type={'select'} className="input">
                      <option value={'10'} className="option">
                        10
                      </option>
                      <option value={'30'} className="option">
                        30
                      </option>
                      <option value={'50'} className="option">
                        50
                      </option>
                    </Input>
                  </span>
                </div>
              </div>
            </Col>
            <Col className=" col">
              <Img />
              <hr className="line" />
              <div className="details">
                <div className="detail__head">
                  <span className="topic">Security</span>
                  <span className="play">
                    <Button className="playBtn"> Play </Button>
                  </span>
                </div>
                <div className="detail__foot">
                  <span className="types">
                    <InputGroup>
                      <Label className="label">
                        <Input type="radio" name="types" /> T/F{' '}
                      </Label>
                      <Label className="label">
                        <Input type="radio" name="types" /> Mcqs{' '}
                      </Label>
                      <Label className="label">
                        <Input type="radio" name="types" /> Blanks{' '}
                      </Label>
                    </InputGroup>
                  </span>
                  <span className="qty">
                    <span>Quantity: </span>
                    <Input type={'select'} className="input">
                      <option value={'10'} className="option">
                        10
                      </option>
                      <option value={'30'} className="option">
                        30
                      </option>
                      <option value={'50'} className="option">
                        50
                      </option>
                    </Input>
                  </span>
                </div>
              </div>
            </Col>
            <Col className=" col">
              <Img />
              <hr className="line" />
              <div className="details">
                <div className="detail__head">
                  <span className="topic">Data Structure</span>
                  <span className="play">
                    <Button className="playBtn"> Play </Button>
                  </span>
                </div>
                <div className="detail__foot">
                  <span className="types">
                    <InputGroup>
                      <Label className="label">
                        <Input type="radio" name="types" /> T/F{' '}
                      </Label>
                      <Label className="label">
                        <Input type="radio" name="types" /> Mcqs{' '}
                      </Label>
                      <Label className="label">
                        <Input type="radio" name="types" /> Blanks{' '}
                      </Label>
                    </InputGroup>
                  </span>
                  <span className="qty">
                    <span>Quantity: </span>
                    <Input type={'select'} className="input">
                      <option value={'10'} className="option">
                        10
                      </option>
                      <option value={'30'} className="option">
                        30
                      </option>
                      <option value={'50'} className="option">
                        50
                      </option>
                    </Input>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      ))}
    </div>
  );
}

export default Home;
