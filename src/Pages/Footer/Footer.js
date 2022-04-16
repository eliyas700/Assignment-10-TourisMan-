import React from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <footer>
      <div id="contact" class="footer py-3">
        <div class="container">
          <div class="row pdn-top-30">
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div class="follow">
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
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div class="follow">
                <h3>ADDITIONAL LINKS</h3>
                <ul class="link">
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
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div class="follow">
                <h3>Contact</h3>
                <div class="row">
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <input class="news-letter" placeholder="Name" type="text" />
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <input
                      class="news-letter"
                      placeholder="Email"
                      type="text"
                    />
                  </div>
                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <textarea
                      class="textarea"
                      placeholder="comment"
                      type="text"
                    >
                      Comment
                    </textarea>
                  </div>
                </div>
                <button class="Subscribe">Submit</button>
              </div>
            </div>
          </div>
          <div class="copyright">
            <div class="container">
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
