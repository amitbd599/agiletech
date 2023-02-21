import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import NavBar from "../components/NavBar";
import ServiceDetailsArea from "../components/ServiceDetailsArea";

const ServiceDetails = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Service Details"} />

      {/* Service Details Area */}
      <ServiceDetailsArea />
    </>
  );
};

export default ServiceDetails;
