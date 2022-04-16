import React from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <footer>
      <div id="contact" className="footer py-3">
        <div className="container">
          <div className="row pdn-top-30">
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div className="follow">
                <h3>CONTACT US</h3>
                <span>
                  123 Second Street Fifth
                  <br />
                  Avenue,
                  <br />
                  Manhattan, New York
                  <br />
                  +987 654 3210
                </span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div className="follow">
                <h3>ADDITIONAL LINKS</h3>
                <ul className="link">
                  <li>
                    <a href="/">About us</a>
                  </li>
                  <li>
                    <a href="/">Terms and conditions</a>
                  </li>
                  <li>
                    <a href="/">Privacy policy</a>
                  </li>
                  <li>
                    <a href="/">News</a>
                  </li>
                  <li>
                    <a href="/">Contact us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="follow">
                <h3>Contact</h3>
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <input
                      className="news-letter"
                      placeholder="Name"
                      type="text"
                    />
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <input
                      className="news-letter"
                      placeholder="Email"
                      type="text"
                    />
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <textarea
                      className="textarea"
                      placeholder="comment"
                      type="text"
                    >
                      Comment
                    </textarea>
                  </div>
                </div>
                <button className="Subscribe">Submit</button>
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="container">
              <p className="text-white">
                Copyright &#9400; 2022 All Rights Reserved. By{"TourisMan "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
