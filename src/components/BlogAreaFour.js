import React from "react";
import { FaArrowRight } from "react-icons/fa";
const BlogAreaFour = () => {
  return (
    <>
      {/*===================== Blog Area Three start =====================*/}
      <div className='blog-area pt-4 pd-bottom-90'>
        <div className='container'>
          <div className='section-title text-center'>
            <div className='row justify-content-center'>
              <div className='col-xl-7 col-lg-10'>
                <h6 className='sub-title'>RECENT BLOG</h6>
                <h2 className='title'>
                  Transforming <span>Businesses</span> Through Software
                  Innovation
                </h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-blog-list'>
                <div className='thumb'>
                  <img
                    className='border-radius-5'
                    src='assets/img/blog/4.png'
                    alt='img'
                  />
                </div>
                <div className='details'>
                  <p className='cat'>NEWS</p>
                  <p className='date'>11 january,2023</p>
                  <h5 className='mb-3'>
                    <a href='blog-details.html'>
                      Transforming businesses, one pixel at a time
                    </a>
                  </h5>
                  <a className='read-more-text' href='blog-details.html'>
                    Read More <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-blog-list'>
                <div className='thumb'>
                  <img
                    className='border-radius-5'
                    src='assets/img/blog/5.png'
                    alt='img'
                  />
                </div>
                <div className='details'>
                  <p className='cat'>NEWS</p>
                  <p className='date'>11 january,2023</p>
                  <h5 className='mb-3'>
                    <a href='blog-details.html'>
                      The Importance of a Strong Digital for Strategy
                    </a>
                  </h5>
                  <a className='read-more-text' href='blog-details.html'>
                    Read More <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-blog-list'>
                <div className='thumb'>
                  <img
                    className='border-radius-5'
                    src='assets/img/blog/6.png'
                    alt='img'
                  />
                </div>
                <div className='details'>
                  <p className='cat'>NEWS</p>
                  <p className='date'>11 january,2023</p>
                  <h5 className='mb-3'>
                    <a href='blog-details.html'>
                      Creating Engaging Content: A Guide for Digital
                    </a>
                  </h5>
                  <a className='read-more-text' href='blog-details.html'>
                    Read More <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== BlogAreaFour End =====================*/}
    </>
  );
};

export default BlogAreaFour;