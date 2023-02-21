import React from "react";

const ContactMain = () => {
  return (
    <>
      {/* ================= Contact Main start =================*/}
      <div className='contact-area pd-top-120 pd-bottom-120'>
        <div className='container'>
          <div className='contact-page-inner bg-gray'>
            <div className='section-title mb-4 pb-2'>
              <h2 className='title'>Direct contact us? </h2>
              <p className='content mb-0'>
                For your car we will do everything advice, repairs and
                maintenance. We are the some preferred choice by many car owners
                because our experience and knowledge is selfe vident.For your
                car we will do som everything.
              </p>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <div className='single-input-inner'>
                  <input type='text' placeholder='Your Name' />
                </div>
              </div>
              <div className='col-md-12'>
                <div className='single-input-inner'>
                  <input type='text' placeholder='Your Email' />
                </div>
              </div>
              <div className='col-md-12'>
                <div className='single-input-inner'>
                  <input type='text' placeholder='Your Contact' />
                </div>
              </div>
              <div className='col-12'>
                <div className='single-input-inner'>
                  <textarea placeholder='Message' defaultValue={""} />
                </div>
              </div>
              <div className='col-12 text-center'>
                <button className='btn btn-base border-radius-5'>
                  Post Comment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact list */}
      <div className='contact-page-list'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-md-6'>
              <div className='media single-contact-list'>
                <div className='media-left'>
                  <img src='assets/img/icon/13.svg' alt='img' />
                </div>
                <div className='media-body'>
                  <h5>Contacts us</h5>
                  <h6>88 01234 2345 12</h6>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='media single-contact-list'>
                <div className='media-left'>
                  <img src='assets/img/icon/14.svg' alt='img' />
                </div>
                <div className='media-body'>
                  <h5>Your Email</h5>
                  <h6>Comism@mail.com</h6>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='media single-contact-list'>
                <div className='media-left'>
                  <img src='assets/img/icon/15.svg' alt='img' />
                </div>
                <div className='media-body'>
                  <h5>Location</h5>
                  <h6>99 united,America</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Map  */}
      <div className='contact-g-map'>
        <iframe src='https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d29208.601361499546!2d90.3598076!3d23.7803374!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1589109092857!5m2!1sen!2sbd' />
      </div>

      {/* ================= Contact Main End =================*/}
    </>
  );
};

export default ContactMain;
