import React from "react";
import logo from "../assets/images/logo.png";

const Nav: React.FC = () => {
  return (
    <header className="nav">
      <div>
        <img alt="/" src={logo} />
      </div>
      <div>
        <ul>
          <li>A가공업체</li>
          <li>로그아웃</li>
        </ul>
      </div>
    </header>
  );
};

export default Nav;
