import React, { FC } from "react";
import Card from "./Card";

const Main: FC = () => {
  return (
    <main className="mainpage">
      <section className="mainHeader">
        <h1>들어온 요청</h1>
        <p>파트너님에게 딱 맞는 요청서를 찾아보세요</p>
      </section>
      <section className="filterBox">
        <button className="methodButton">가공방식</button>
        <button className="materialButton">재료</button>

        <button className="toggle">토글</button>
        <span>상담 중인 요청만 보기</span>
      </section>
      <Card />
    </main>
  );
};

export default Main;
