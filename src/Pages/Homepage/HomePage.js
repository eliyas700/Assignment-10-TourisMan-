import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../Images/banner/banner 1.jpg";
import banner2 from "../../Images/banner/banner 2.jpg";
import banner3 from "../../Images/banner/banner 3.jpg";
import banner4 from "../../Images/banner/banner 4.jpg";
import Services from "../Services/Services";
import "./Hompage.css";
const HomePage = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block  w-100" src={banner1} alt="First slide" />
          <Carousel.Caption>
            <div className="slider-caption">
              <h5>Explore The World</h5>
              <h1>
                A more rewarding <br /> way to travel
              </h1>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner4} alt="Second slide" />

          <Carousel.Caption>
            <div className="slider-caption">
              <h5>Explore The World</h5>
              <h1>
                A more rewarding <br /> way to travel
              </h1>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />

          <Carousel.Caption>
            <div className="slider-caption">
              <h5>Explore The World</h5>
              <h1>
                A more rewarding <br /> way to travel
              </h1>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="my-4">
        <Services></Services>
      </div>
    </div>
  );
};

export default HomePage;
