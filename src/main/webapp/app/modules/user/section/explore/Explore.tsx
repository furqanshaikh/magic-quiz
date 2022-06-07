import React from 'react';
import { Col, Row } from 'reactstrap';
import './style.scss';

function Explore() {
  // ********************* dummy data
  const data = [
    {
      id: 1,
      category: 'Science',
      others: {
        true: {
          img: <img src="content/images/TF.png" className="img" />,
          desc: 'True and false',
        },
        blanks: {
          img: <img src="content/images/blanks.png" className="img" />,
          desc: 'Blanks',
        },
        mcqs: {
          img: <img src="content/images/mcq.png" className="img" />,
          desc: 'Mcqs',
        },
      },
    },
    {
      id: 2,
      category: 'Computer',
      others: {
        true: {
          img: <img src="content/images/TF.png" className="img" />,
          desc: 'Mcqs',
        },
        blanks: {
          img: <img src="content/images/blanks.png" className="img" />,
          desc: 'Blanks',
        },
        mcqs: {
          img: <img src="content/images/mcq.png" className="img" />,
          desc: 'Mcqs',
        },
      },
    },
    {
      id: 3,
      category: 'Web and technology',
      others: {
        true: {
          img: <img src="content/images/TF.png" className="img" />,
          desc: 'blanks',
        },
        blanks: {
          img: <img src="content/images/blanks.png" className="img" />,
          desc: 'Blanks',
        },
        mcqs: {
          img: <img src="content/images/mcq.png" className="img" />,
          desc: 'Mcqs',
        },
      },
    },
  ];
  // ********************* dummy data

  return (
    <div className="explore">
      {data.map(i => (
        <div className="category" key={i.category}>
          <h4>{i.category}</h4>
          <Row>
            <Col className="col-md-3 col-sm-12 col-lg-3 col">
              {' '}
              {i.others.true.img} <br /> {i.others.true.desc}
            </Col>
            <Col className="col-md-3 col-sm-12 col-lg-3 col">
              {i.others.blanks.img} <br /> {i.others.blanks.desc}
            </Col>
            <Col className="col-md-3 col-sm-12 col-lg-3 col">
              {' '}
              {i.others.mcqs.img} <br />
              {i.others.mcqs.desc}
            </Col>
          </Row>
        </div>
      ))}
    </div>
  );
}

export default Explore;
