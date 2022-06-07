import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { Explore, EmojiEvents, ExitToApp, CameraAlt, Assignment } from '@material-ui/icons';
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
      <Button color="primary" className="button">
        Create Quiz
      </Button>

      <div className="menus">
        <ul>
          <li>
            {' '}
            <Explore className="icon" />{' '}
            <Link to={'/userdashboard/explore'} className="link">
              Explore
            </Link>
          </li>
          <li>
            {' '}
            <Assignment className="icon" />{' '}
            <Link to={'/userdashboard/quiz'} className="link">
              Quiz
            </Link>
          </li>
          <li>
            {' '}
            <EmojiEvents className="icon" />{' '}
            <Link to={'/userdashboard/result'} className="link">
              Result
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
