import React from "react";

import "./Events.scss";

const Events = () => {
  const match = (key) => (
    <div key={key} className="events__card">
      <h2>EMPTY</h2>
    </div>
  );
  const repeat = [];
  while (repeat.length < 9) {
    repeat.push(match(repeat.length));
  }
  console.log("Event repeat: ", repeat.length);
  return (
    <div className="events__section">
      <div className="events__container">
        <div className="title__container">
          <h1>مسابقات برگزار شده توسط گیمبا</h1>
        </div>
        <div className="events__card__container">
          <div className="events__card__group">
            {repeat.map((item) => item)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
