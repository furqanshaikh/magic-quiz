import React from 'react';
import DashboardContent from './section/DashboardContent';
import Sidebar from './sidebar/Sidebar';
import './style.scss';
function AdminDashboard() {
  return (
    <div className="admin__dashboard">
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

export default AdminDashboard;
