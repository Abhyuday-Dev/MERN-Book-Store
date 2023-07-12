import React from "react";
import BookCard from "../BooksCard/BookCard";
import "./BookSection.css";

const BooksSection = ({ data, handleBookDelete, handleEditClick }) => {
  return (
    <div className="book-section">
      {data && data.books.length > 0 ? (
        data.books.map((item, index) => (
          <BookCard
            key={index}
            book={item}
            handleBookDelete={handleBookDelete}
            handleEditClick={handleEditClick}
          />
        ))
      ) : (
        <div>No books found.</div>
      )}
    </div>
  );
};

export default BooksSection;
