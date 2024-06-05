import React from 'react';
import {
  FaAngleLeft,
  FaArrowRight,
  FaCalendarAlt,
  FaChevronRight,
  FaFacebookF,
  FaRegFolderOpen,
  FaInstagram,
  FaPlus,
  FaTwitter,
  FaRegUser,
  FaRegComments,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BlogGroupThree = () => {
  return (
    <>
      {/* blog area start */}
      <div className="blog-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-list">
                <div className="thumb">
                  <img
                    className="border-radius-5"
                    src="assets/img/blog/4.png"
                    alt="img"
                  />
                  <p className="date">Wednesday, June 5, 2024</p>
                </div>
                <div className="details">
                  <ul className="blog-meta p-0">
                    <li>
                      <FaRegUser className="mb-1" /> By Admin
                    </li>
                    <li>
                      <FaRegFolderOpen className="mb-1" /> Category
                    </li>
                  </ul>
                  <h5 className="mb-4">
                    <a href="blog-details.html">
                      Transforming businesses, one pixel at a time
                    </a>
                  </h5>
                  <a className="btn btn-border-base" href="blog-details.html">
                    Read More <FaArrowRight className="mb-1" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-list">
                <div className="thumb">
                  <img
                    className="border-radius-5"
                    src="assets/img/blog/5.png"
                    alt="img"
                  />
                  <p className="date">Wednesday, June 5, 2024</p>
                </div>
                <div className="details">
                  <ul className="blog-meta p-0">
                    <li>
                      <FaRegUser className="mb-1" /> By Admin
                    </li>
                    <li>
                      <FaRegFolderOpen className="mb-1" /> Category
                    </li>
                  </ul>
                  <h5 className="mb-4">
                    <a href="blog-details.html">
                      The Importance of a Strong Digital for Strategy
                    </a>
                  </h5>
                  <a className="btn btn-border-base" href="blog-details.html">
                    Read More <FaArrowRight className="mb-1" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-list">
                <div className="thumb">
                  <img
                    className="border-radius-5"
                    src="assets/img/blog/6.png"
                    alt="img"
                  />
                  <p className="date">Wednesday, June 5, 2024</p>
                </div>
                <div className="details">
                  <ul className="blog-meta p-0">
                    <li>
                      <FaRegUser className="mb-1" /> By Admin
                    </li>
                    <li>
                      <FaRegFolderOpen className="mb-1" /> Category
                    </li>
                  </ul>
                  <h5 className="mb-4">
                    <a href="blog-details.html">
                      Creating Engaging Content: A Guide for Digital
                    </a>
                  </h5>
                  <a className="btn btn-border-base" href="blog-details.html">
                    Read More <FaArrowRight className="mb-1" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-list">
                <div className="thumb">
                  <img
                    className="border-radius-5"
                    src="assets/img/blog/7.png"
                    alt="img"
                  />
                  <p className="date">Wednesday, June 5, 2024</p>
                </div>
                <div className="details">
                  <ul className="blog-meta p-0">
                    <li>
                      <FaRegUser className="mb-1" /> By Admin
                    </li>
                    <li>
                      <FaRegFolderOpen className="mb-1" /> Category
                    </li>
                  </ul>
                  <h5 className="mb-4">
                    <a href="blog-details.html">
                      Transforming businesses, one pixel at a time
                    </a>
                  </h5>
                  <a className="btn btn-border-base" href="blog-details.html">
                    Read More <FaArrowRight className="mb-1" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-list">
                <div className="thumb">
                  <img
                    className="border-radius-5"
                    src="assets/img/blog/8.png"
                    alt="img"
                  />
                  <p className="date">Wednesday, June 5, 2024</p>
                </div>
                <div className="details">
                  <ul className="blog-meta p-0">
                    <li>
                      <FaRegUser className="mb-1" /> By Admin
                    </li>
                    <li>
                      <FaRegFolderOpen className="mb-1" /> Category
                    </li>
                  </ul>
                  <h5 className="mb-4">
                    <a href="blog-details.html">
                      The Importance of a Strong Digital for Strategy
                    </a>
                  </h5>
                  <a className="btn btn-border-base" href="blog-details.html">
                    Read More <FaArrowRight className="mb-1" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-list">
                <div className="thumb">
                  <img
                    className="border-radius-5"
                    src="assets/img/blog/9.png"
                    alt="img"
                  />
                  <p className="date">Wednesday, June 5, 2024</p>
                </div>
                <div className="details">
                  <ul className="blog-meta p-0">
                    <li>
                      <FaRegUser className="mb-1" /> By Admin
                    </li>
                    <li>
                      <FaRegFolderOpen className="mb-1" /> Category
                    </li>
                  </ul>
                  <h5 className="mb-4">
                    <a href="blog-details.html">
                      Creating Engaging Content: A Guide for Digital
                    </a>
                  </h5>
                  <a className="btn btn-border-base" href="blog-details.html">
                    Read More <FaArrowRight className="mb-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="pagination">
            <a className="prev page-numbers" href="http://icare.local/">
              <i className="fa fa-angle-left" />
            </a>
            <a className="page-numbers" href="http://icare.local/">
              1
            </a>
            <span className="page-numbers current">2</span>
            <a className="page-numbers" href="http://icare.local/page/3/">
              3
            </a>
            <a className="page-numbers" href="http://icare.local/page/4/">
              4
            </a>
            <a className="next page-numbers" href="http://icare.local/page/3/">
              <i className="fa fa-angle-right" />
            </a>
          </div>
        </div>
      </div>
      {/* blog area end */}
    </>
  );
};

export default BlogGroupThree;
