import React, { useEffect, useState } from "react";
import axios from "axios";
import BooksSection from "../BooksSection/BooksSection";
import "./Books.css";

const Books = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/getBooks");
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="books">
      <h4>Books Section</h4>
      <div className="books-display">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <BooksSection data={data} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Books;
