import React from 'react';
import { Link } from 'react-router-dom';
// import { Button } from 'reactstrap';
import { Button } from '@mui/material';
import { ExitToApp, CameraAlt, Group, Home, AlarmAdd } from '@mui/icons-material';
import './style.scss';

export const ProfileImg = () => (
  // <img src="content/images/logo-jhipster.png" width="100%" height="50%" alt="" />
  <CameraAlt />
);

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="profile">
        <div className="profile__img">
          <ProfileImg />
        </div>
        <div className="profile__name">Qaiser Hussain</div>
      </div>
      <Button variant="contained" color="primary" className="button">
        Create Quiz
      </Button>

      <div className="menus">
        <ul>
          <li>
            {' '}
            <Home className="icon" />{' '}
            <Link to={'/admindashboard/home'} className="link">
              Home
            </Link>
          </li>
          <li>
            {' '}
            <AlarmAdd className="icon" />{' '}
            <Link to={'/admindashboard/records'} className="link">
              Records
            </Link>
          </li>
          <li>
            {' '}
            <Group className="icon" />{' '}
            <Link to={'/admindashboard/classes'} className="link">
              Classes
            </Link>
          </li>
          <li>
            {' '}
            <ExitToApp className="icon" />{' '}
            <Link to={''} className="link">
              SignOut
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
