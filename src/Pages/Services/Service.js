import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Rating from "react-rating";
import { useNavigate } from "react-router-dom";
import "./service.css";

const Service = ({ service }) => {
  const { name, img, price, details, rating } = service;
  const navigate = useNavigate();
  const handleService = (name) => {
    navigate(`/${name}`);
  };
  return (
    <div className="service-card mx-auto text-center ">
      <figure class="activitie-thumb zoom-in">
        <img style={{ maxWidth: "360px", height: "480px" }} src={img} alt="" />

        <div class="price-layer rounded-pill">
          <div class="price-box">
            <h4 className="fw-bold">$ {price}</h4>
          </div>
        </div>
        <div class="activitie-info">
          <h4 className="fw-bold">{name}</h4>
          <div class="media d-flex justify-content-center ">
            <h3 class="mt-0 text-black p-0 ">{rating}</h3>
            <div class="media-body">
              {
                <Rating
                  initialRating={rating}
                  emptySymbol={<FontAwesomeIcon icon={faStar} />}
                  fullSymbol={
                    <FontAwesomeIcon
                      style={{ color: "goldenrod" }}
                      icon={faStar}
                    />
                  }
                  readonly
                ></Rating>
              }
            </div>
          </div>
          <p>{details.slice(0, 120)}</p>
          <button
            onClick={() => handleService(name)}
            style={{ color: "black" }}
            to="/checkout"
            className=" mx-auto w-50 my-2 btn  d-block btn-primary"
          >
            Check Out
          </button>
        </div>
      </figure>
    </div>
  );
};

export default Service;
