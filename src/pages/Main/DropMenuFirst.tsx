import React, { FC } from "react";

interface Props {
  onMouseLeave: any;
}

const DropMenuFirst: FC<Props> = ({ ...props }) => {
  return (
    <section className="DropMenuFirst">
      <div>밀링</div>
      <div>선반</div>
    </section>
  );
};

export default DropMenuFirst;
