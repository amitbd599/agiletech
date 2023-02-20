import React from "react";

const BannerOne = () => {
  return (
    <>
      {/* ================== BannerOne Start ==================*/}
      <div
        className='banner-area bg-relative banner-area-1 pd-bottom-100 bg-cover'
        style={{ backgroundImage: 'url("./assets/img/banner/0.png")' }}
      >
        <img
          className='animate-img-1 top_image_bounce'
          src='assets/img/banner/2.png'
          alt='img'
        />
        <img
          className='animate-img-2 left_image_bounce'
          src='assets/img/banner/5.svg'
          alt='img'
        />
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
                  Making The <span>Digital</span> World Work For You
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
              </div>
            </div>
            <div className='col-xl-4 col-lg-5 col-md-8 offset-xl-2 offset-lg-1'>
              <div
                className='banner-thumb mt-5 mt-lg-0 ms-4 ms-lg-0 wow animated fadeInRight'
                data-wow-duration='1.5s'
                data-wow-delay='0.3s'
              >
                <img
                  className='banner-animate-img banner-animate-img-1 top_image_bounce'
                  src='assets/img/banner/2.png'
                  alt='img'
                />
                <img
                  className='banner-animate-img banner-animate-img-2'
                  src='assets/img/banner/3.svg'
                  alt='img'
                />
                <img
                  className='banner-animate-img banner-animate-img-3 left_image_bounce'
                  src='assets/img/banner/4.svg'
                  alt='img'
                />
                <img
                  className='main-img'
                  src='assets/img/banner/1.png'
                  alt='img'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================== BannerOne End ==================*/}
    </>
  );
};

export default BannerOne;
