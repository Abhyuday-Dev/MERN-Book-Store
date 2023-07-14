import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <main>
      <section className="section section-hero">
        <div className="container">
          <div className="hero-data">
            <h1 className="primary-heading">
              Books Unleash Imagination and Connection.
            </h1>
            <p className="para">
              The Book Store Website is an online platform designed to cater to
              book enthusiasts and provide them with a seamless experience to
              explore, discover, and share their favorite books.
            </p>
            <Link className="btns" to="/books">
              View Books
            </Link>
          </div>
          <div className="hero-image">
            <img
              src="https://static.vecteezy.com/system/resources/previews/000/518/099/original/education-concept-vector-illustration-in-flat-style-online-education-school-university-creative-ideas.jpg"
              alt="image"
              className="image"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
