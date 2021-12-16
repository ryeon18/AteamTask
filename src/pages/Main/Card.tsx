import React, { FC } from "react";

interface Props {
  item: any;
}

const Card: FC<Props> = ({ item, ...props }) => {
  return (
    <ul className="cardList">
      {item?.map((data: any) => {
        const {
          id,
          title,
          client,
          due,
          count,
          amount,
          method,
          material,
          status,
        } = data;
        return (
          <li className="card" key={id}>
            <div className="container">
              <div className="title">{title}</div>
              {status === "상담중" && (
                <div className="status">
                  <span>{status}</span>
                </div>
              )}
              <div className="client">{client}</div>
              <div className="due">{due}까지 납기</div>
              <hr className="divider" />
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
          </li>
        );
      })}
    </ul>
  );
};

export default Card;
