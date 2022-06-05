import React from 'react';
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
        {/* <div className="nav">nav</div> */}
        <div className="section">
          <DashboardContent />
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
