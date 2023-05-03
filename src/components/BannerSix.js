import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";

const BannerSix = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* ================== BannerFive Start ==================*/}
      <div
        className='banner-area bg-relative banner-area-2 bg-cover mt-0'
        style={{ backgroundImage: 'url("./assets/img/banner-6/1.png")' }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-5 pb-xl-5 align-self-center'>
              <div className='banner-inner pe-xl-4 pb-5'>
                <h6
                  className='bg-none text-white wow animated fadeInLeft mb-4'
                  data-wow-duration='1.5s'
                  data-wow-delay='0.3s'
                >
                  Protecting your data
                </h6>
                <h2
                  className='title text-white wow animated fadeInLeft'
                  data-wow-duration='1.5s'
                  data-wow-delay='0.4s'
                >
                  Data Security is Our Top Priority
                </h2>
                <p
                  className='content pe-xl-4 wow animated fadeInLeft'
                  data-wow-duration='1.5s'
                  data-wow-delay='0.5s'
                >
                  Lorem is Ipsum is simply design designer best isthe text Lorem
                  Ipsum this the is simply is our com best ourbe designer Lorem
                </p>
                <a
                  className='btn btn-base wow animated fadeInLeft'
                  data-wow-duration='1.5s'
                  data-wow-delay='0.6s'
                  href='about.html'
                >
                  Explore now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================== BannerFive End ==================*/}
    </>
  );
};

export default BannerSix;
