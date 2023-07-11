import React from 'react';
import BookCard from '../BooksCard/BookCard';

const BooksSection = ({ data }) => {
  console.log("Data:", data);

  return (
    <div>
      {data && data.books.length > 0 ? (
        data.books.map((item, index) => (
          <BookCard key={index} bookName={item.bookName} Author={item.author} image={item.image} />
        ))
      ) : (
        <div>No books found.</div>
      )}
    </div>
  );
};

export default BooksSection;
