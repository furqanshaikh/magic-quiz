import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import Explore from './explore/Explore';
import Quiz from './quiz/Quiz';
import Result from './result/Result';
import './style.scss';
function DashboardContent() {
  return (
    <div className="dashboard__content">
      <Switch>
        <Route path={'/userdashboard/explore'} component={Explore}></Route>
        <Route path={'/userdashboard/quiz'} component={Quiz}></Route>
        <Route path={'/userdashboard/result'} component={Result}></Route>
      </Switch>
    </div>
  );
}

export default DashboardContent;
