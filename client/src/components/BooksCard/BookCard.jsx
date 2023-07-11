import React from 'react';
import "./BookCard.css";

const BookCard = ({bookName,Author,image}) => {
  return (
    <div class="book read">
    <div class="cover">
      <img src={image}/>
    </div>
    <div class="description">
      <p class="title">{bookName}<br></br>
        <span class="author">{Author}</span></p>
    </div>
  </div>
  )
};

export default BookCard;