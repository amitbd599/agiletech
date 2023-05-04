import React from "react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutAreaSeven = () => {
  return (
    <>
      {/* =============== About Area Five End ===============*/}
      <div className='about-area pd-top-120 pd-bottom-110'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 align-self-center'>
              <div
                className='wow animated fadeInLeft'
                data-wow-duration='1.5s'
                data-wow-delay='0.3s'
              >
                <img
                  className='main-img m-md-4'
                  src='assets/img/about/32.png'
                  alt='img'
                />
              </div>
            </div>
            <div
              className='col-lg-6 align-self-center wow animated fadeInRight'
              data-wow-duration='1.5s'
              data-wow-delay='0.3s'
            >
              <div className='section-title mt-5 mt-lg-0 mb-0 ps-lg-4'>
                <h6 className='bg-none color-base mb-3'>ABOUT US</h6>
                <h2 className='title'>
                  Preventing Cyber Attacks Before They Happen
                </h2>
                <p className='content mb-4'>
                  Preventing Ipsum is simply dummy text of the printing and
                  typesetting industry Loreaim Ipsum has been the industry's
                  standard dummy
                </p>
                <div className='row'>
                  <div className='col-md-3'>
                    <img src='assets/img/about/31.png' alt='img' />
                  </div>
                  <div className='col-md-9 align-self-center'>
                    <ul className='single-list-inner style-check style-heading style-check mb-3'>
                      <li>
                        <i className='fas fa-check-circle' /> Mistakes To Avoid
                        to the
                      </li>
                      <li>
                        <i className='fas fa-check-circle' /> Your Startup
                        industry stan
                      </li>
                      <li>
                        <i className='fas fa-check-circle' /> Mistakes To Avoid
                        to the
                      </li>
                      <li>
                        <i className='fas fa-check-circle' /> Your Startup
                        industry stan
                      </li>
                    </ul>
                  </div>
                </div>
                <p className='mt-4 mb-4'>
                  <strong>
                    Cyber dummy text of the printing and industry Loreaim
                  </strong>
                </p>
                <a className='btn btn-base mt-0 me-3' href='#'>
                  Explore Now
                </a>
                <img src='assets/img/about/33.png' alt='img' />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =============== About Area Five End ===============*/}
    </>
  );
};

export default AboutAreaSeven;
