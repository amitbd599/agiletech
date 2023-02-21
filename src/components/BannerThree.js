import React from "react";

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
                  className='subtitle wow animated fadeInLeft'
                  data-wow-duration='1.5s'
                  data-wow-delay='0.3s'
                >
                  DESIGNING FOR THE FUTURE
                </h6>
                <h2
                  className='title wow animated fadeInLeft'
                  data-wow-duration='1.5s'
                  data-wow-delay='0.4s'
                >
                  Empowering Your <span>Financial</span> Freedom
                </h2>
                <p
                  className='content pe-xl-5 wow animated fadeInLeft'
                  data-wow-duration='1.5s'
                  data-wow-delay='0.5s'
                >
                  And In Order To Make A Business, Brand Advertising And
                  Marketing Plays An Important Role. Similarly, In Making
                  Cultivation Business Are Necessary.
                </p>
                <a
                  className='btn btn-border-base wow animated fadeInLeft'
                  data-wow-duration='1.5s'
                  data-wow-delay='0.6s'
                  href='about.html'
                >
                  Discover More <i className='fa fa-plus' />
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
                    <h6 className='d-inline-block'>how we work</h6>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-10'>
              <div
                className='banner-thumb-3 wow animated fadeInRight'
                data-wow-duration='1.5s'
                data-wow-delay='0.3s'
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
