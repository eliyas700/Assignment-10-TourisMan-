import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import "./service.css";

const Service = ({ service }) => {
  const { name, img, price, details, rating } = service;
  return (
    <div className="service-card mx-auto text-center ">
      <img width={450} className="img-fluid" src={img} alt="" />
      <h4 className="my-1">{name}</h4>
      <p>{details}</p>
      <h4>
        {
          <Rating
            initialRating={rating}
            emptySymbol={<FontAwesomeIcon icon={faStar} />}
            fullSymbol={
              <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
            }
            readonly
          ></Rating>
        }
        <Link
          to="/checkout"
          className=" mx-auto w-50 my-2 btn d-block btn-primary"
        >
          Check Out
        </Link>
      </h4>
    </div>
  );
};

export default Service;
