import React from 'react';

import '../Card/Card.scss';

export default function CardItem(props) {
  return (
    <div className="cardItem">
      <div className="cardItem__text">{props.content} </div>
    </div>
  );
}
