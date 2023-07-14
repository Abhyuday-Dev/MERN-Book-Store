import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UpdateForm.css";

const UpdateForm = ({ bookId, handleEditCancel, fetchData }) => {
  const [formData, setFormData] = useState({
    bookName: "",
    description: "",
    image: "",
    author: "",
    price: "",
  });

  useEffect(() => {
    fetchBookData();
  }, []);

  const fetchBookData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/getBooks/${bookId}`
      );
      const { bookName, description, image, author, price } = response.data.book;
      setFormData({ bookName, description, image, author, price });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `http://localhost:8080/api/v1/updateBooks/${bookId}`,
        formData
      );
      alert("Book updated successfully");
      handleEditCancel();
      fetchData();
    } catch (error) {
      console.error(error);
      alert("Error updating book");
    }
  };

  return (
    <div className="update-form">
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="bookName">Book Name:</label>
        <input
          type="text"
          id="bookName"
          name="bookName"
          value={formData.bookName}
          onChange={handleChange}
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>

        <label htmlFor="image">Image:</label>
        <input
          type="text"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
        />

        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          required
        />

        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <div className="buttons">
          <button type="submit">Update</button>
          <button type="button" onClick={handleEditCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateForm;
