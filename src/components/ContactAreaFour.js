import React from "react";
import { FaPlus } from "react-icons/fa";

const ContactAreaFour = () => {
  return (
    <>
      {/*================= counter area start {/*=================*/}
      <div className='contact-area pd-top-90 pd-bottom-120'>
        <div className='container'>
          <div className='row'>
            <div
              className='col-lg-6 order-lg-end wow animated fadeInLeft'
              data-wow-duration='1.5s'
              data-wow-delay='0.3s'
            >
              <div
                className='about-thumb-inner ms-xl-5 p-xl-5 pt-4 wow animated fadeInLeft'
                data-wow-duration='1.5s'
                data-wow-delay='0.3s'
              >
                <img
                  className='animate-main-img'
                  src='assets/img/about/18.png'
                  alt='img'
                />
                <img
                  className='main-img m-4'
                  src='assets/img/about/19.png'
                  alt='img'
                />
              </div>
            </div>
            <div
              className='col-lg-6 order-lg-first wow animated fadeInRight'
              data-wow-duration='1.5s'
              data-wow-delay='0.3s'
            >
              <div className='section-title mb-0 mt-5 mt-lg-0'>
                <h6 className='sub-title'>GET IN TOUCH</h6>
                <h2 className='title'>
                  Your Business To <span>Growth</span> Please Touch ?
                </h2>
                <p className='content'>
                  For your car we will do everything advice design in us repairs
                  and maintenance. We are the some preferred.
                </p>
                <form className='mt-4'>
                  <div className='row'>
                    <div className='col-lg-6'>
                      <div className='single-input-inner style-border'>
                        <input type='text' placeholder='Name Here' />
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='single-input-inner style-border'>
                        <input type='text' placeholder='Contact Here' />
                      </div>
                    </div>
                    <div className='col-lg-12'>
                      <div className='single-input-inner style-border'>
                        <input type='text' placeholder='Email Here' />
                      </div>
                    </div>
                    <div className='col-lg-12'>
                      <div className='single-input-inner style-border'>
                        <textarea placeholder='Message' defaultValue={""} />
                      </div>
                    </div>
                    <div className='col-12'>
                      <a className='btn btn-border-gray mt-0' href='#'>
                        Contact Us <FaPlus />
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*{/*================= counter area end {/*=================*/}
    </>
  );
};

export default ContactAreaFour;
