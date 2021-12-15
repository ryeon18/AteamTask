import React from "react";
import logo from "../assets/images/logo.png";
import vector from "../assets/images/vector.png";

const Nav: React.FC = () => {
  return (
    <header className="nav">
      <div className="navBox">
        <img alt="logo" src={logo} />
        <ul>
          <li>
            <img alt="vector" src={vector} />A 가공 업체
          </li>
          <li>로그아웃</li>
        </ul>
      </div>
    </header>
  );
};

export default Nav;
