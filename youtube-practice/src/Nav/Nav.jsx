import React from "react";
import "./Nav.css";
import YoutubeLogo from "./images/YouTube.png";
import userIcon from "./images/person.png";
// import { useNavigate } from "react-router-dom";

const Nav = (props) => {
  // const navigate = useNavigate();

  return (
    <header className="Nav">
      <h1 className="a11y-hidden"> 유튜브 </h1>
      <a href="localhost:3000/">
        <img
          className="header-logo"
          src={YoutubeLogo}
          alt="유튜브"
          onClick="location.href='PAGENAME.html'"
        />
      </a>
      {props.children}
      <button className="user-icon1">
        <img className="user-icon2" src={userIcon}></img>
        <div>로그인</div>
      </button>
    </header>
  );
};

export default Nav;

//onClick={()=>navigate(-1)
