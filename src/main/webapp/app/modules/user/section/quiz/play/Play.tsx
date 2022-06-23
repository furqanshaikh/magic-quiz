import React, { useState } from 'react';
import Question from './question/Question';
import './style.scss';
import questionsList from './questions.json';
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';

function Play() {
  const history = useHistory();
  const [count, setCount] = useState(0);

  const getCount = val => {
    setCount(count + val);
  };

  const handleSubmit = () => {
    localStorage.setItem('score', JSON.stringify(count));
    history.push('/userdashboard/remarks');
  };

  return (
    <div className="play">
      {questionsList.map(val => (
        <Question key={val.id} data={val} getCount={getCount} />
      ))}

      <Button className="btn" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
}

export default Play;
