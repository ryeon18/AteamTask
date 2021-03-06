import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Nav from "./components/Nav";

const Switchs: React.FC = () => {
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
