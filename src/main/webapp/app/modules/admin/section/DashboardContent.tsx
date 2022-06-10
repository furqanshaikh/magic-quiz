import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import Home from './home/Home';
import Records from './records/Records';
import Classes from './classes/Classes';
import './style.scss';
function DashboardContent() {
  return (
    <div className="dashboard__content">
      <Switch>
        <Route path={'/admindashboard/home'} component={Home}></Route>
        <Route path={'/admindashboard/records'} component={Records}></Route>
        <Route path={'/admindashboard/classes'} component={Classes}></Route>
      </Switch>
    </div>
  );
}

export default DashboardContent;
