import React from 'react';
import { Row, Col } from 'reactstrap';
import Explore from './explore/Explore';
import './style.scss';
function DashboardContent() {
  return (
    <div className="dashboard__content">
      <Explore />
    </div>
  );
}

export default DashboardContent;
