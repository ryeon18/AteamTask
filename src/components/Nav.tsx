import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import colorlogo from "../assets/images/colorlogo.png";
import mobileVector from "../assets/images/mobileVector.png";
import vector from "../assets/images/vector.png";

const Nav: React.FC = () => {
  const [modal, setModal] = useState(false);
  return (
    <header className="navBox">
      <div className="logoBox">
        <div onClick={() => setModal(!modal)}>
          <i className="fas fa-bars" />
        </div>
        <div className={`${modal ? "showModal" : "non-modal"}`}>
          <div className="showModal">
            <img className="logo" alt="logo" src={colorlogo} />
            <ul className="modalUserBox">
              <li>
                <img className="vectorImage" alt="vector" src={mobileVector} />
                <span>파트너정밀가공</span>
              </li>
              <li>로그아웃</li>
            </ul>
            <div className="modal" onClick={() => setModal(!modal)}></div>
          </div>
        </div>
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
