import React, { useEffect, useState } from "react";
import Card from "./Card";
import NoCard from "./NoCard";
import dropDown from "../../assets/images/dropDown.png";

const Main = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetch("/Carddata.json")
      .then((res) => res.json())
      .then((cardData) => setCardData(cardData.requests));
  }, []);

  return (
    <main className="mainpage">
      <section className="mainHeader">
        <h1>들어온 요청</h1>
        <p>파트너님에게 딱 맞는 요청서를 찾아보세요</p>
      </section>
      <section className="filterBox">
        <button className="methodButton">
          가공방식
          <img alt="dropDownIcon" src={dropDown} />
        </button>
        <button className="materialButton">
          재료 <img alt="dropDownIcon" src={dropDown} />
        </button>

        <button className="toggle">토글</button>
        <span>상담 중인 요청만 보기</span>
      </section>
      {/* <Card2 /> */}
      {/* <NoCard /> */}
      {cardData.length > 0 ? <Card item={cardData} /> : <NoCard />}
    </main>
  );
};

export default Main;
