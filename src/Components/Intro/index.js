import React from 'react';
import './styles.scss';
import mobilePic from '../../images/introPic.jpg';
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import downArrow from '../../images/down-arrow.svg';

export const Intro = () => {
  return (
    <>
      <div className="intro">
        <div className="hey">Hey! My name is Patricia de Boer</div>
        <img src={mobilePic} alt="background-profile" className="mobile-pic" />
        <Link to="/main" className="arrow">
          <img src={downArrow} />
        </Link>
      </div>
    </>
  );
};
