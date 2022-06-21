import React from 'react';
import Question from './question/Question';
import './style.scss';
import questions from './questions.json';
import { Button } from 'reactstrap';
function Play() {
  const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <div className="play">
      {questions.map(val => (
        <Question key={val.id} data={val} />
      ))}

      <Button className="btn">Submit</Button>
    </div>
  );
}

export default Play;
