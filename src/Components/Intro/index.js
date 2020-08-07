import React from 'react';
import './styles.scss';
import mobilePic from '../../images/introPic.jpg'

export const Intro = () =>{

  return (
    <>
    <div className="intro">
      <div className="hey">
        Hey! My name is Patricia de Boer
      </div>
      <img src={mobilePic} alt="background-profile" className="mobile-pic" />
    </div>

  </>
  )
}
