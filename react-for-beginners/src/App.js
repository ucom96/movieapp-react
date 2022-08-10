import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Detail from "./routes/Detail";

//react-router-dom 6 version

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
