import React from 'react';
import './Nav.css';
import YoutubeLogo from './images/YouTube.png'

const Nav = (props) => {
  return (
    <header class='Nav'>
      <h1 className='a11y-hidden'> 유튜브 </h1>
      <a href='#'>
        <img className='header-logo' src={YoutubeLogo} alt="유튜브"/>
      </a>
      {props.children}
    </header>
  );
}

export default Nav;