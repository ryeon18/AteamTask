import React from "react";
import logo from "../assets/images/logo.png";
import vector from "../assets/images/vector.png";

const Nav: React.FC = () => {
  return (
    <header className="navBox">
      <div className="logoBox">
        <img className="logo" alt="logo" src={logo} />
        <ul className="userBox">
          <li>
            <img className="vectorImage" alt="vector" src={vector} />
          </li>
          <li>A 가공 업체</li>
          <li>로그아웃</li>
        </ul>
      </div>
    </header>
  );
};

export default Nav;
