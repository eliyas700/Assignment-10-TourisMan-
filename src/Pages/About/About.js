import React from "react";
import "./About.css";
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-left">
        <div className="about-left-content">
          <div>
            <div className="shadow">
              <div className="about-img">
                <img src="https://i.ibb.co/YPYRcQ5/72089-1.jpg" alt="" />
              </div>
            </div>

            <h2 className="fw-bold">
              Eliyas
              <br />
              Hossain
            </h2>
            <h3>Web-Developer </h3>
          </div>

          <ul className="icons">
            <li>
              <BsFacebook />
            </li>
            <li>
              <FaInstagramSquare />
            </li>
            <li>
              <BsLinkedin />
            </li>
            <li>
              <BsTwitter />
            </li>
          </ul>
        </div>
      </div>

      <div className="about-right">
        <h1>
          hi<span>!</span>
        </h1>
        <h2>Here's who I am & what are my plans</h2>
        <div className="about-btns">
          <button type="button" className="btn btn-pink">
            resume
          </button>
          <button type="button" className="btn btn-white">
            projects
          </button>
        </div>

        <div className="about-para">
          <p>
            In next 4 months my Ultimate goals are reading the Full Holy Quran,
            And learn many more web development related technologies and develop
            my Skills . I also have some plans for my Undergraduate Convocation
            . InshaAllah i will be able to fullfill my goals.
          </p>
          <p>
            After Eid-ul-fitr i have plan to move Dhaka ,i also would like
            participate some Job Exams.Hope For the Best.Thank You!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
