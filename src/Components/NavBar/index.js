import React from 'react';
import logo from '../../images/codingLogo.png';
import './styles.scss';

export const NavBar = () =>{

  return (
    <div className="navigation">
      <div className="title">
        <img src={logo} alt="logo" className="logo" width="50px"/>
        <div>Patricia de Boer</div>
      </div>
      <div className="links">
        <div className="link">Home</div>
        <div className="link">About Me</div>
        <div className="link">Projects</div>
      </div>
    </div>
  )
}
