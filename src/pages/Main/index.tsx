import React from "react";
import Card from "./Card";

const Main: React.FC = () => {
  return (
    <main className="mainpage">
      <section className="mainHeader">
        <h1>들어온 요청</h1>
        <p>파트너님에게 딱 맞는 요청서를 찾아보세요</p>
      </section>
      <section className="filterBox">
        <div className="buttonBox">
          <button className="methodButton">가공방식</button>
          <button className="materialButton">재료</button>
        </div>
        <div className="toggleBox">
          <div>토글</div>
          <div>상담 중인 요청만 보기</div>
        </div>
      </section>
      <Card />
    </main>
  );
};

export default Main;
