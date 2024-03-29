import React from 'react';
import { Switch } from 'react-router-dom';
import DashboardContent from './section/DashboardContent';
import Sidebar from './sidebar/Sidebar';
import './style.scss';

function UserDashboard() {
  return (
    <div className="user__dashboard">
      <div className="sidebar__container">
        <Sidebar />
      </div>
      <div className="nav-section">
        <div className="section">
          <DashboardContent />
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
