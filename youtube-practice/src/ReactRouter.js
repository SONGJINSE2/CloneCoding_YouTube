import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from "./Main";

const ReactRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default ReactRouter;
