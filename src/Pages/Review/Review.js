import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import ReviewDetail from "./ReviewDetail";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div style={{ marginTop: "80px" }}>
      <h2 className="fw-bold text-secondary my-5">Clients Feed Back</h2>

      <div className="container my-5">
        {" "}
        <Row xs={1} md={3} className="g-4">
          {reviews.map((review) => (
            <ReviewDetail key={review.id} review={review}></ReviewDetail>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Review;
