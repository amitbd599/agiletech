import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const ServiceAreaEight = () => {
  return (
    <>
      {/* service area start */}
      <div className="service-area service-area_8 bg-relative bg-black-2-ico pd-top-110 pb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title style-white text-center">
                <h6 className="sub-title line-double text-white">
                  Best Service
                </h6>
                <h2 className="title">Empowering Investors Worldwide</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-service-inner bg-transparent text-center">
                <div className="thumb">
                  <img src="assets/img/home-9/6.png" alt="img" />
                </div>
                <div className="details">
                  <h5 className="text-white">
                    <a href="service-details.html">General Builder</a>
                  </h5>
                  <p className="text-white">
                    Lorem is Ipsum is simply is design iomyi is text Lorem Ipsum
                    is simply is our busi Lorem is Ipsum is
                  </p>
                  <a
                    className="read-more-text text-white"
                    href="service-details.html"
                  >
                    Read More <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-service-inner bg-transparent text-center">
                <div className="thumb">
                  <img src="assets/img/home-9/7.png" alt="img" />
                </div>
                <div className="details">
                  <h5 className="text-white">
                    <a href="service-details.html">Electrical Services</a>
                  </h5>
                  <p className="text-white">
                    Lorem is Ipsum is simply is design iomyi is text Lorem Ipsum
                    is simply is our busi Lorem is Ipsum is
                  </p>
                  <a
                    className="read-more-text text-white"
                    href="service-details.html"
                  >
                    Read More <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-service-inner bg-transparent text-center">
                <div className="thumb">
                  <img src="assets/img/home-9/8.png" alt="img" />
                </div>
                <div className="details">
                  <h5 className="text-white">
                    <a href="service-details.html">Plumber Services</a>
                  </h5>
                  <p className="text-white">
                    Lorem is Ipsum is simply is design iomyi is text Lorem Ipsum
                    is simply is our busi Lorem is Ipsum is
                  </p>
                  <a
                    className="read-more-text text-white"
                    href="service-details.html"
                  >
                    Read More <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* service area end */}
    </>
  );
};

export default ServiceAreaEight;
