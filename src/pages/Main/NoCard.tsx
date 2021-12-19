import React, { useState } from "react";

const NoCard: React.FC = () => {
  return (
    <section className="nocard">
      <span>조건에 맞는 견적 요청이 없습니다.</span>
    </section>
  );
};

export default NoCard;
