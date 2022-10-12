import React from "react";
import "./Nav.css";
import YoutubeLogo from "./images/YouTube.png";
import userIcon from "./images/person.png";

const Category = (props) => {
  return (
    <header className="Nav">
      <h1 className="a11y-hidden"> 유튜브 </h1>
      <a>
        <img
          className="header-logo"
          src={YoutubeLogo}
          alt="유튜브"
          onClick={() => {
            window.location.reload(false);
          }}
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

export default Category;
