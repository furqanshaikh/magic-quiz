import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import Home from './home/Home';
import Activity from './activity/Activity';
import Classes from './classes/Classes';
import './style.scss';
import Play from './quiz/play/Play';
import Instructions from './quiz/instructions/Instructions';
import Remarks from './quiz/remarks/Remarks';

function DashboardContent() {
  return (
    <div className="dashboard__content">
      <Switch>
        <Route path={'/userdashboard/home'} component={Home}></Route>
        <Route path={'/userdashboard/activity'} component={Activity}></Route>
        <Route path={'/userdashboard/classes'} component={Classes}></Route>
        <Route path={'/userdashboard/play'} component={Play}></Route>
        <Route path={'/userdashboard/instructions'} component={Instructions}></Route>
        <Route path={'/userdashboard/remarks'} component={Remarks}></Route>
      </Switch>
    </div>
  );
}

export default DashboardContent;
