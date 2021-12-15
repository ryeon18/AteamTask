import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Main from "./pages/Main";
import Nav from "./components/Nav";

const Switchs = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
};

export default Switchs;
