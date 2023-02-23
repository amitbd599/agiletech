import React from "react";
import { FaCalendarAlt, FaRegComments, FaRegUser } from "react-icons/fa";

const BlogAreaOne = () => {
  return (
    <>
      {/*===================== Blog Area One start =====================*/}
      <div className='blog-area pd-top-120 pd-bottom-90'>
        <div className='container'>
          <div className='section-title text-center'>
            <h6 className='sub-title'>Pricing plan</h6>
            <h2 className='title'>
              Best plane to get our <span>Services</span>
            </h2>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-blog-list'>
                <div className='thumb'>
                  <img src='assets/img/blog/4.png' alt='img' />
                </div>
                <div className='details'>
                  <p className='date mb-3'>
                    <FaCalendarAlt />
                    October 19, 2023
                  </p>
                  <h5>
                    <a href='blog-details.html'>
                      Transforming businesses, one pixel at a time
                    </a>
                  </h5>
                  <div className='meta'>
                    <div className='row'>
                      <div className='col-6'>
                        <p>
                          <FaRegUser />
                          Sam Curren
                        </p>
                      </div>
                      <div className='col-6 text-end'>
                        <p>
                          <FaRegComments />
                          Sam Curren
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-blog-list'>
                <div className='thumb'>
                  <img src='assets/img/blog/5.png' alt='img' />
                </div>
                <div className='details'>
                  <p className='date mb-3'>
                    <FaCalendarAlt />
                    June 19, 2023
                  </p>
                  <h5>
                    <a href='blog-details.html'>
                      The Importance of a Strong Digital for Strategy
                    </a>
                  </h5>
                  <div className='meta'>
                    <div className='row'>
                      <div className='col-6'>
                        <p>
                          <FaRegUser />
                          Sam Curren
                        </p>
                      </div>
                      <div className='col-6 text-end'>
                        <p>
                          <FaRegComments />
                          Sam Curren
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-blog-list'>
                <div className='thumb'>
                  <img src='assets/img/blog/6.png' alt='img' />
                </div>
                <div className='details'>
                  <p className='date mb-3'>
                    <FaCalendarAlt />
                    October 19, 2023
                  </p>
                  <h5>
                    <a href='blog-details.html'>
                      Creating Engaging Content: A Guide for Digital
                    </a>
                  </h5>
                  <div className='meta'>
                    <div className='row'>
                      <div className='col-6'>
                        <p>
                          <FaRegUser />
                          Sam Curren
                        </p>
                      </div>
                      <div className='col-6 text-end'>
                        <p>
                          <FaRegComments />
                          Sam Curren
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ===================== BlogAreaOne End =====================*/}
    </>
  );
};

export default BlogAreaOne;
