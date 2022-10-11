import React from "react";
import "./SearchBar.css";
import loupe from "./images/loupe.png";
import mic from "./images/microphone.png";

const keyHandler = (search) => (e) => {
  if (e.key === "Enter") {
    search(e.target.value);
  }
};

const SearchBar = (props) => {
  let input = "";
  return (
    <div className="search-wrapper">
      <input
        ref={(ref) => (input = ref)} // 2-1번
        className="search-bar"
        type="search"
        placeholder="검색어를 입력하세요"
        autoFocus
        onKeyPress={keyHandler(props.onSearchVideo)} // 1번
      />
      <button
        className="btn-search"
        onClick={() => props.onSearchVideo(input)} /*2-2번*/
      >
        <img className="search-icon" src={loupe} alt="검색" />
      </button>
      <button className="btn-mic">
        <img className="microphone" src={mic} />
      </button>
    </div>
  );
};

export default SearchBar;
