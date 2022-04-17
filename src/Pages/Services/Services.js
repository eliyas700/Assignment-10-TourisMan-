import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log(services);
  return (
    <div id="services" style={{ marginTop: "60px" }} className=" ">
      <h2 className="text-secondary text-center d-block fw-bold py-3">
        Services That I Provide
      </h2>
      <div className="container mx-auto ">
        {" "}
        <div className="service-container mx-auto ">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
