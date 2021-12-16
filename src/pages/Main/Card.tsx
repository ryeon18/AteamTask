import React, { useState } from "react";

type CardProps = {
  id: number;
  title: string;
  client: string;
  due: string;
  count: number;
  amount: number;
  method: string[];
  material: string[];
  status: string;
};

const Card: React.FC<CardProps> = ({
  id,
  title,
  client,
  due,
  count,
  amount,
  method,
  material,
  status,
}) => {
  return (
    <div className="card">
      <div className="container">
        <div className="title">{title}</div>
        {/* {requests.status && } */}
        <div className="status">
          <span>{status}</span>
        </div>
        <div className="client">{client}</div>
        <div className="due">{due}까지 납기</div>
        <hr className="divider"></hr>
        <ul className="itemList">
          <li>도면갯수</li>
          <li>총 수량</li>
          <li>가공방식</li>
          <li>재료</li>
        </ul>
        <ul className="itemSpec">
          <li>{count}개</li>
          <li>{amount}개</li>
          <li>{method}</li>
          <li>{material}</li>
        </ul>
        <button className="viewRequest">요청 내역 보기</button>
        <button className="chat">채팅하기</button>
      </div>
    </div>
  );
};

export default Card;
