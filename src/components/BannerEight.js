import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";

const BannerEight = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* ================== Banner Start ==================*/}
      <div
        className='banner-area bg-relative banner-area-2 bg-cover mt-0'
        style={{ backgroundImage: 'url("./assets/img/home-7/1.png")' }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 pb-xl-5 align-self-center'>
              <div className='banner-inner pe-xl-4 pb-5'>
                <h6
                  className='bg-none text-white wow animated fadeInLeft mb-4'
                  data-wow-duration='1.5s'
                  data-wow-delay='0.3s'
                >
                  Be Natural
                </h6>
                <h2
                  className='title text-white wow animated fadeInLeft'
                  data-wow-duration='1.5s'
                  data-wow-delay='0.4s'
                >
                  Get Quality Leads In Single Click
                </h2>
                <p
                  className='content text-white pe-xl-4 wow animated fadeInLeft'
                  data-wow-duration='1.5s'
                  data-wow-delay='0.5s'
                >
                  And In Order To Make A Business, Brand Advertising And
                  Marketing Plays An Important Role. Similarly, In Making
                  Cultivation Business A Brand, Good Slogans Are Necessary.
                </p>
                <a
                  className='btn btn-base border-radius-0 wow animated fadeInLeft'
                  data-wow-duration='1.5s'
                  data-wow-delay='0.6s'
                  href='about.html'
                >
                  Free Consulting <i className='fas fa-arrow-circle-right' />
                </a>
                <div
                  className='d-inline-block align-self-center wow animated fadeInLeft'
                  data-wow-duration='1.5s'
                  data-wow-delay='0.7s'
                >
                  <a
                    className='video-play-btn-hover'
                    href='https://www.youtube.com/embed/Wimkqo8gDZ0'
                  >
                    <img src='assets/img/video.svg' alt='img' />{" "}
                    <h6 className='d-inline-block text-white'>Watch Video</h6>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================== Banner End ==================*/}
    </>
  );
};

export default BannerEight;
