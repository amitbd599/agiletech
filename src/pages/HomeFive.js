import React from "react";
import AboutAreaFive from "../components/AboutAreaFive";
import AboutAreaSix from "../components/AboutAreaSix";
import BannerFive from "../components/BannerFive";
import CaseStudyAreaTwo from "../components/CaseStudyAreaTwo";
import NavbarFour from "../components/NavbarFour";
import ServiceAreaFive from "../components/ServiceAreaFive";
import TeamAreaThree from "../components/TeamAreaThree";

const HomeFive = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavbarFour />

      {/* Banner Five */}
      <BannerFive />

      {/* About Area Five */}
      <AboutAreaFive />

      {/* Service Area Five */}
      <ServiceAreaFive />

      {/* Case Study Area Two */}
      <CaseStudyAreaTwo />

      {/* About Area Six */}
      <AboutAreaSix />

      {/* Team Area Three */}
      <TeamAreaThree />
    </>
  );
};

export default HomeFive;
