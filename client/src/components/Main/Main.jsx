import React from 'react';
import "./Main.css";

const Main = () => {
  return (
    <main>
      <section className="section section-hero">
        <div className="container grid grid-two-column">
          <div className="hero-data">
            <h1 className="primary-heading">
Books Unleash Imagination and Connection.</h1>
            <p className="para">
              Welcome to StudyMonk, your premier digital recruitment
              partner. We connect top talent with leading companies, delivering
              tailored solutions to fuel growth, innovation, and success. Join
              us today!
            </p>
            <a href="#" target="_blank" className="btn">Get Started</a>
          </div>
          {/* right side hero section */}
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
