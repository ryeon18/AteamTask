import "./styles/main.scss";
import "./styles/antd.less";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";

const App: React.FC = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default App;
