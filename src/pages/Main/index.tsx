import React, { useEffect, useState } from "react";
import Card from "./Card";
import NoCard from "./NoCard";
import DropMenuFirst from "./DropMenuFirst";
import dropDown from "../../assets/images/dropDown.png";
import track from "../../assets/images/track.png";
import knob from "../../assets/images/knob.png";
import onTrack from "../../assets/images/onTrack.png";
import onKnob from "../../assets/images/onKnob.png";

const Main = () => {
  const [cardData, setCardData] = useState([]);
  const [checkSwitch, setCheckSwitch] = useState(false);
  const [drop, setDrop] = useState(false);

  useEffect(() => {
    fetch("/Carddata.json")
      .then((res) => res.json())
      .then((cardData) => setCardData(cardData.requests));
  }, []);

  const isClickFilterBtn = () => {
    setCheckSwitch(!checkSwitch);
    const getConsultant = cardData.filter(
      (cardData: any) => cardData.status === "상담중"
    );

    if (!checkSwitch) {
      setCardData(getConsultant);
    } else {
      fetch("/Carddata.json")
        .then((res) => res.json())
        .then((cardData) => setCardData(cardData.requests));
    }
  };

  const handleDrop = () => {
    return setDrop(!drop);
  };

  return (
    <main className="mainpage">
      <section className="mainHeader">
        <h1>들어온 요청</h1>
        <p>파트너님에게 딱 맞는 요청서를 찾아보세요</p>
      </section>
      <section className="filterBox">
        <div className="buttonBox">
          <button className="methodButton " onMouseEnter={handleDrop}>
            가공방식
            <img alt="dropDownIcon" src={dropDown} />
          </button>
          {drop && <DropMenuFirst onMouseLeave={handleDrop} />}
          <button className="materialButton">
            재료 <img alt="dropDownIcon" src={dropDown} />
          </button>
        </div>
        <article className="toggleBox">
          <div className="handleToggle" onClick={isClickFilterBtn}>
            <img
              className={!checkSwitch ? "offTrack" : "onTrack"}
              alt="track"
              src={!checkSwitch ? track : onTrack}
            />
            <img
              className={!checkSwitch ? "offKnob" : "onKnob"}
              alt="knob"
              src={!checkSwitch ? knob : onKnob}
            />
          </div>

          <span>상담 중인 요청만 보기</span>
        </article>
      </section>
      {/* <NoCard /> */}
      {cardData.length > 0 ? <Card item={cardData} /> : <NoCard />}
    </main>
  );
};

export default Main;
