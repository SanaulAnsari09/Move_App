import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Home from "./pages/Home";
import SingleMovieView from "./pages/SingleMovieView";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/single-view/:id" element={<SingleMovieView />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
