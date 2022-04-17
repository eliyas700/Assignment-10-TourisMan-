import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col } from "react-bootstrap";
import Rating from "react-rating";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import "./Review.css";
const ReviewDetail = ({ review }) => {
  const { name, img, comment, rating } = review;
  console.log(name);
  return (
    <Col className="review-item text-center">
      <Card
        style={{ minHeight: "300px", borderRadius: "10px" }}
        className="position-relative mb-5"
      >
        <div className="w-25 mx-auto card-img">
          <Card.Img
            variant="top"
            width={100}
            height={100}
            style={{ borderRadius: "50%", border: "2px solid goldenrod" }}
            className="p-2"
            src={img}
          />
        </div>
        <Card.Body
          className="cardBody"
          style={{ background: "#3498db", borderRadius: "10px" }}
        >
          <Card.Title className="pt-5 fw-bold">{name}</Card.Title>
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
          <Card.Text title={comment}>
            {" "}
            <FaQuoteLeft className="mb-3" /> {comment.slice(0, 300) + "..."}{" "}
            <FaQuoteRight className="mt-3" />
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ReviewDetail;
