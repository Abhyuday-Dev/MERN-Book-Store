import React, { useEffect, useState } from "react";
import axios from "axios";
import BooksSection from "../BooksSection/BooksSection";
import UpdateForm from "../UpdateForm/UpdateForm";
import "./Books.css";

const Books = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editBookId, setEditBookId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://bookstore-2nj0.onrender.com/api/v1/getBooks");
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleBookDelete = async (id) => {
    try {
      await axios.delete(`https://bookstore-2nj0.onrender.com/api/v1/delete/${id}`);
      console.log("Book deleted");
      // Update the data state after deletion
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditClick = (bookId) => {
    setEditBookId(bookId);
  };

  const handleEditCancel = () => {
    setEditBookId(null);
  };

  const book="Books Section";
  const up="Update Section";

  return (
    <div className="books">
      <h4>{editBookId?'Update Book Information':'Books Section'}</h4>
      <div className="books-display">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            {editBookId ? (
              <UpdateForm
                bookId={editBookId}
                handleEditCancel={handleEditCancel}
                fetchData={fetchData}
              />
            ) : (
              <BooksSection
                data={data}
                handleBookDelete={handleBookDelete}
                handleEditClick={handleEditClick}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Books;
