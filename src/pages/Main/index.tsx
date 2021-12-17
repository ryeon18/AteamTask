import React, { useEffect, useState } from "react";
import Card from "./Card";
import NoCard from "./NoCard";
import dropDown from "../../assets/images/dropDown.png";
import track from "../../assets/images/track.png";
import knob from "../../assets/images/knob.png";

const Main = () => {
  const [cardData, setCardData] = useState([]);
  const [checkSwitch, setCheckSwitch] = useState(false);
  const [drop, setDrop] = useState(false);

  useEffect(() => {
    fetch("/Carddata.json")
      .then((res) => res.json())
      .then((cardData) => setCardData(cardData.requests));
  }, []);

  function showConsultant(cardData: any) {
    const getConsultant = cardData.filter(
      (cardData: any) => cardData.status === "상담중"
    );

    return console.log("data", getConsultant);
  }

  return (
    <main className="mainpage">
      <section className="mainHeader">
        <h1>들어온 요청</h1>
        <p>파트너님에게 딱 맞는 요청서를 찾아보세요</p>
      </section>
      <section className="filterBox">
        <div className="buttonBox">
          <button className="methodButton" onMouseEnter={() => setDrop(!drop)}>
            가공방식
            <img alt="dropDownIcon" src={dropDown} />
          </button>
          <button className="materialButton">
            재료 <img alt="dropDownIcon" src={dropDown} />
          </button>
        </div>
        <div className="toggleBox">
          <div
            className="handleToggle"
            onClick={() => setCheckSwitch(!checkSwitch)}
          >
            <img className="track" alt="track" src={track} />
            <img className="knob" alt="knob" src={knob} />
          </div>

          <span>상담 중인 요청만 보기</span>
        </div>
      </section>
      {/* <NoCard /> */}
      {cardData.length > 0 ? <Card item={cardData} /> : <NoCard />}
    </main>
  );
};

export default Main;
