import React, { useState } from "react";

const Card: React.FC = () => {
  return (
    <div className="card">
      <div className="container">
        <div className="title">자동차 시제품 제작</div>
        {/* {requests.status && } */}
        <div className="status">
          <span>상담중</span>
        </div>
        <div className="client">A고객사</div>
        <div className="due">2020.12.14까지 납기</div>
        <hr className="divider"></hr>
        <ul className="itemList">
          <li>도면갯수</li>
          <li>총 수량</li>
          <li>가공방식</li>
          <li>재료</li>
        </ul>
        <ul className="itemSpec">
          <li>2개</li>
          <li>1000개</li>
          <li>밀링, 선반</li>
          <li>알루미늄</li>
        </ul>
        <button className="viewRequest">요청 내역 보기</button>
        <button className="chat">채팅하기</button>
      </div>
    </div>
  );
};

export default Card;
