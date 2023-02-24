import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const BannerThree = () => {
  return (
    <>
      {/* ================== BannerThree Start ==================*/}
      <div
        className='banner-area bg-relative banner-area-2 bg-cover'
        style={{ backgroundImage: 'url("./assets/img/banner-3/5.png")' }}
      >
        <img className='bg-img-2' src='assets/img/banner-3/4.png' alt='img' />
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 align-self-center'>
              <div className='banner-inner pe-xl-5'>
                <h6
                  className='subtitle '
                  data-aos='fade-right'
                  data-aos-delay='100'
                  data-aos-duration='1500'
                >
                  DESIGNING FOR THE FUTURE
                </h6>
                <h2
                  className='title'
                  data-aos='fade-right'
                  data-aos-delay='200'
                  data-aos-duration='1500'
                >
                  Empowering Your <span>Financial</span> Freedom
                </h2>
                <p
                  className='content pe-xl-5'
                  data-aos='fade-right'
                  data-aos-delay='250'
                  data-aos-duration='1500'
                >
                  And In Order To Make A Business, Brand Advertising And
                  Marketing Plays An Important Role. Similarly, In Making
                  Cultivation Business Are Necessary.
                </p>
                <Link
                  className='btn btn-border-base '
                  data-aos='fade-right'
                  data-aos-delay='300'
                  data-aos-duration='1500'
                  to='/about'
                >
                  Discover More <FaPlus />
                </Link>
                <div
                  className='d-inline-block align-self-center wow animated fadeInLeft'
                  data-aos='fade-right'
                  data-aos-delay='300'
                  data-aos-duration='1500'
                >
                  <a
                    className='video-play-btn-hover'
                    href='https://www.youtube.com/embed/Wimkqo8gDZ0'
                  >
                    <img src='assets/img/video.svg' alt='img' />{" "}
                    <h6 className='d-inline-block'>how we work</h6>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-10'>
              <div
                className='banner-thumb-3'
                data-aos='fade-left'
                data-aos-delay='100'
                data-aos-duration='1500'
              >
                <div className='main-img-wrap'>
                  <img
                    className='banner-animate-img banner-animate-img-1 left_image_bounce'
                    src='assets/img/banner-3/2.svg'
                    alt='img'
                  />
                  <img
                    className='banner-animate-img banner-animate-img-2 left_image_bounce'
                    src='assets/img/banner-3/3.svg'
                    alt='img'
                  />
                  <img
                    className='main-img'
                    src='assets/img/banner-3/1.png'
                    alt='img'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================== BannerThree End ==================*/}
    </>
  );
};

export default BannerThree;
