import React from "react";
import Card from "./Card";

const Main: React.FC = () => {
  return (
    <main className="mainpage">
      <div>
        <div>들어온 요청</div>
        <div>파트너님에게 딱 맞는 요청서를 찾아보세요</div>
      </div>
      <div>
        <button>가공방식</button>
        <button>재료</button>
      </div>
      <div>토글</div>
      <div>상담 중인 요청만 보기</div>
      <Card />
    </main>
  );
};

export default Main;
