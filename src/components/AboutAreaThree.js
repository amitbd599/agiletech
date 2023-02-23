import React from "react";
import Marquee from "react-fast-marquee";
import { FaCheckCircle, FaPlus } from "react-icons/fa";
const AboutAreaThree = () => {
  return (
    <>
      {/* =============== About Area Three End ===============*/}
      <div className='about-area bg-gradient-gray pd-top-120'>
        <div className='container'>
          <div className='row'>
            <div
              className='col-lg-6 wow animated fadeInLeft'
              data-wow-duration='1.5s'
              data-wow-delay='0.3s'
            >
              <div className='about-thumb-inner mb-4 mb-lg-0'>
                <img
                  className='main-img'
                  src='assets/img/about/11.png'
                  alt='img'
                />
              </div>
            </div>
            <div
              className='col-lg-6 wow animated fadeInRight'
              data-wow-duration='1.5s'
              data-wow-delay='0.3s'
            >
              <div className='section-title mb-0'>
                <h6 className='sub-title'>ABOUT US</h6>
                <h2 className='title'>
                  Advancing <span>Beyond</span> Your Expectations
                </h2>
                <p className='content mb-4'>
                  You can access SaaS applications through a web browser or
                  mobile app, as long as you have an internet connection.
                </p>
                <div className='row'>
                  <div className='col-md-6'>
                    <ul className='single-list-inner style-check style-heading style-check mb-3'>
                      <li>
                        <FaCheckCircle /> Mistakes To Avoid to the dum
                      </li>
                      <li>
                        <FaCheckCircle /> Your Startup industry stan
                      </li>
                    </ul>
                  </div>
                  <div className='col-md-6'>
                    <ul className='single-list-inner style-check style-heading style-check mb-3'>
                      <li>
                        <FaCheckCircle /> Mistakes To Avoid to the dum
                      </li>
                      <li>
                        <FaCheckCircle /> Your Startup industry stan
                      </li>
                    </ul>
                  </div>
                </div>
                <p className='content'>
                  SaaS providers typically invest heavily in security measures
                  to protect customer data, such as encryption and multi-factor
                  authentication. However, it is important to research and
                  choose a reputable provider and also to ensure that
                </p>
                <a className='btn btn-border-base' href='about.html'>
                  Discover More <FaPlus />
                </a>
              </div>
            </div>
          </div>
          <div className='bg-base client-border-radius p-xl-5 p-3 mt-5'>
            <div className='client-slider'>
              <Marquee gradient={false}>
                <div className='thumb'>
                  <img src='assets/img/client/1.svg' alt='img' />
                </div>
                <div className='thumb'>
                  <img src='assets/img/client/2.svg' alt='img' />
                </div>
                <div className='thumb'>
                  <img src='assets/img/client/3.svg' alt='img' />
                </div>
                <div className='thumb'>
                  <img src='assets/img/client/4.svg' alt='img' />
                </div>
                <div className='thumb'>
                  <img src='assets/img/client/5.svg' alt='img' />
                </div>
                <div className='thumb'>
                  <img src='assets/img/client/6.svg' alt='img' />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>

      {/* =============== About Area Three End ===============*/}
    </>
  );
};

export default AboutAreaThree;
