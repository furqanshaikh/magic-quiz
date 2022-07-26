import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '@mui/material';

import { ExitToApp, CameraAlt, Group, Home, AlarmAdd } from '@mui/icons-material';

import './style.scss';

export const ProfileImg = () => <CameraAlt />;

function Sidebar() {
  const handleAccount = () => {
    const history = useHistory();
    history.push('/account/settings');
  };

  return (
    <div className="sidebar">
      <div className="profile">
        <div className="profile__img">
          <ProfileImg />
        </div>
        <div className="profile__name">Qaiser Hussain</div>
      </div>
      <Button variant="contained" sx={{ width: '200px', margin: '10px 0', backgroundColor: '#8166e2' }}>
        <Link to={'/account/settings'} style={{ textDecoration: 'none', color: 'white' }}>
          {' '}
          Profile{' '}
        </Link>
      </Button>

      <div className="menus">
        <ul>
          <li>
            {' '}
            <Home className="icon" />{' '}
            <Link to={'/userdashboard/home'} className="link">
              Home
            </Link>
          </li>
          <li>
            {' '}
            <AlarmAdd className="icon" />{' '}
            <Link to={'/userdashboard/activity'} className="link">
              Activity
            </Link>
          </li>
          <li>
            {' '}
            <Group className="icon" />{' '}
            <Link to={'/userdashboard/classes'} className="link">
              Classes
            </Link>
          </li>
          <li>
            {' '}
            <ExitToApp className="icon" />{' '}
            <Link to={'/logout'} className="link">
              SignOut
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
