import React from "react";
import "./BookCard.css";
import { BiEditAlt} from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const BookCard = ({ book, handleBookDelete, handleEditClick }) => {
  const { _id, bookName, author, image, price } = book;

  const handleDelete = () => {
    handleBookDelete(_id);
  };

  const handleEdit = () => {
    handleEditClick(_id);
  };

  return (
    <div className="book read">
      <div className="cover">
        <img src={image} alt="Book cover" />
      </div>
      <div className="content">
        <p className="title">
          {bookName}
          <br />
          <span className="author">{author}</span>
        </p>
      </div>
      <div className="icons">
        <p className="price">${price}</p>
        <div className="edit">
          <p onClick={handleEdit}>
            <BiEditAlt />
          </p>
          <p onClick={handleDelete}>
            <AiFillDelete />
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
