import './home.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Card } from 'reactstrap';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';

// export const Blanks = () => (
//     <img src="content/images/blanks.png" alt="blanks" className='blankImg'/>
// );

export const Home = () => {
  return (
    <div className="container-fluid">
      {/* banner section start*/}
      <div className="banner">
        <Card inverse className="card">
          <div className="imgOverlay">
            <h3 className="title">
              This is 100% Free <br /> Engagement Plateform
            </h3>
            <p className="para">
              Create a quiz to generate leads, to teach your students <br /> or simply to entertain.
            </p>
          </div>
        </Card>
      </div>

      {/* techers students section start */}

      <div className="container">
        {/* demo of magic quiz section start*/}

        <div className="demo px-3 py-5 d-flex flex-column align-items-center justify-content-center">
          <h2 className="demo__heading">How to Create Quiz Online</h2>
          <p className="paragraph">Create quiz your way in minutes with an easy Magic Quiz</p>
          <div className="underline"></div>
          <Row className="row">
            <Col md="6" sm="12" className="col1 my-3">
              <Player playsInline poster="" src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
            </Col>
            <Col md="6" sm="12" className="col2 my-3">
              <h5>Steps of Creating Quiz</h5>
              <ul>
                <li>First select the particular topic</li>
                <li>Select types of quiz (Mcqs, Blanks, T/F)</li>
                <li>Create your own quiz or create quiz using question bank</li>
                <li>Generate code for students</li>
                <li>Assign quiz to students</li>
              </ul>
              <Button className="btn">Create Quiz Now</Button>
            </Col>
          </Row>
        </div>

        {/* how software works section start*/}

        <div className="software__working px-3 py-5 d-flex flex-column align-items-center justify-content-center">
          <h1 className="heading">How Magic Quiz Works</h1>
          <p className="paragraph">Many type of quizzes you can create with Magic Quiz</p>
          <div className="underline"></div>
          <Row className="row">
            <Col className="col1">
              <h2>Best for creating student or employee assessment quizzes</h2>
            </Col>
            <Col className="col2">
              <Player playsInline poster="/assets/" src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
            </Col>
          </Row>
        </div>

        {/* question bank tutorial section start */}
        <div className="question__bank px-3 py-5 d-flex flex-column align-items-center justify-content-center">
          <h2> About Questions Bank </h2>
          <p className="paragraph">How to generate quiz using questions bank</p>
          <div className="underline"></div>
          <div className="player">
            <Player playsInline poster="/assets/" src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
          </div>
        </div>

        {/* why choose us section start */}

        <div className="choose__us px-3 py-5 d-flex flex-column align-items-center justify-content-center">
          <h2>Why Choose Magic Quiz</h2>
          <p className="paragraph">why people can choose us for quizzes</p>
          <div className="underline"></div>

          <Row className="d-flex justify-content-space-between align-items-center">
            <Col className="col" md="3" sm="12">
              <h5>Easy to make quiz</h5>
              <p className="paragraph">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur quia molestiae eaque quas quam unde laborum. Culpa
                aliquid est
              </p>
            </Col>
            <hr className="line" />
            <Col className="col" md="3" sm="12">
              <h5>All Features You Should Need</h5>
              <p className="paragraph">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur quia molestiae eaque quas quam unde laborum. Culpa
                aliquid est
              </p>
            </Col>
            <hr className="line" />
            <Col className="col" md="3" sm="12">
              <h5>Quiz Anytime, Anywhere</h5>
              <p className="paragraph">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur quia molestiae eaque quas quam unde laborum. Culpa
                aliquid est
              </p>
            </Col>
          </Row>
        </div>

        <div className="type__question px-3 py-5 d-flex flex-column align-items-center justify-content-center">
          <h2>Choose Question Types</h2>
          <p className="paragraph">Make your quizzes delightful and interctive with a mix of questions</p>
          <div className="underline"></div>

          <Row className="d-flex justify-content-space-between align-items-center">
            <Col className="col" md="3" sm="12">
              <h5>Multiple Choice Questions</h5>
              <div className="mcqs"></div>
            </Col>

            <Col className="col" md="3" sm="12">
              <h5>True / False</h5>
              <div className="tf"></div>
            </Col>

            <Col className="col" md="3" sm="12">
              <h5>Fill in the Blanks</h5>
              <div className="blanks"> </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Home;
