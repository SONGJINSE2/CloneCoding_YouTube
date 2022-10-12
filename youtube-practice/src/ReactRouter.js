import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "./App";
import Main from "./Main";
import Sesac from "./Sesac";

const ReactRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default ReactRouter;
