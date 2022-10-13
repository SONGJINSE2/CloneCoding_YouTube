import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from "./Main";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import Nav from "./Nav/Nav";
import SearchBar from "./SearchBar/SearchBar";
import { debounce } from "loadsh";
import { useState } from "react";
import Category from "./Category/Category";

const ReactRouter = () => {
  const [query, setQuery] = useState("");
  const changeQuery = (q) => {
    setQuery(q);
  };

  return (
    <div>
      <BrowserRouter>
        <Nav>
          <SearchBar onSearchVideo={debounce(changeQuery, 500)}></SearchBar>
        </Nav>
        <hr></hr>
        <Category></Category>
        <Routes>
          <Route path="/" element={<Main query={query} />}></Route>
          <Route path="/detail" element={<VideoPlayer />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default ReactRouter;
