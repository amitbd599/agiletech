import React from "react";
import { FaPlus } from "react-icons/fa";

const BannerFour = () => {
  return (
    <>
      {/* ================== BannerFour Start ==================*/}
      <div className='banner-area bg-relative banner-area-3'>
        <div className='container custom-container'>
          <div className='bg-gray'>
            <img
              className='img-right'
              src='assets/img/banner-4/1.png'
              alt='img'
            />
            <div className='container'>
              <div className='row'>
                <div className='col-lg-7 align-self-center'>
                  <div className='banner-inner'>
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
                      Innovative Solutions For A <span>Digital</span> World
                    </h2>
                    <a
                      className='mt-3 btn btn-border-base wow animated fadeInLeft'
                      data-wow-duration='1.5s'
                      data-wow-delay='0.6s'
                      href='about.html'
                    >
                      Discover More <FaPlus />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================== BannerFour End ==================*/}
    </>
  );
};

export default BannerFour;
