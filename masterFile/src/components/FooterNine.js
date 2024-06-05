import React from 'react';
import {
  FaArrowRight,
  FaCalendarAlt,
  FaChevronRight,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

const FooterNine = () => {
  return (
    <>
      {/* footer area start */}
      <footer className="footer-area footer-area-2 footer-area-9  bg-gray mt-0 pd-top-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_about">
                <div className="thumb">
                  <img src="assets/img/logo.png" alt="img" />
                </div>
                <div className="details">
                  <p>
                    Melbourne is simply is dumiomy is text Lorem Ipsum is simply
                  </p>
                  <div className="subscribe mt-4">
                    <input type="text" placeholder="E-mail" />
                    <button>
                      <FaChevronRight className="mb-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 ps-xl-5">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">Our Service</h4>
                <ul>
                  <li>
                    <a href="service.html">
                      <FaChevronRight className="mb-1" /> Ui Design
                    </a>
                  </li>
                  <li>
                    <a href="service.html">
                      <FaChevronRight className="mb-1" /> Web design
                    </a>
                  </li>
                  <li>
                    <a href="service.html">
                      <FaChevronRight className="mb-1" /> Digital marketing{' '}
                    </a>
                  </li>
                  <li>
                    <a href="service.html">
                      <FaChevronRight className="mb-1" /> Video Editing
                    </a>
                  </li>
                  <li>
                    <a href="service.html">
                      <FaChevronRight className="mb-1" /> Pc Repairs
                    </a>
                  </li>
                  <li>
                    <a href="service.html">
                      <FaChevronRight className="mb-1" /> Web Development
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 ps-xl-5">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">Pay links</h4>
                <ul>
                  <li>
                    <a href="service.html">
                      <FaChevronRight className="mb-1" /> Credit industrys
                    </a>
                  </li>
                  <li>
                    <a href="service.html">
                      <FaChevronRight className="mb-1" /> Reasearch sector
                    </a>
                  </li>
                  <li>
                    <a href="service.html">
                      <FaChevronRight className="mb-1" /> Finance Sector{' '}
                    </a>
                  </li>
                  <li>
                    <a href="service.html">
                      <FaChevronRight className="mb-1" /> Credit industrys
                    </a>
                  </li>
                  <li>
                    <a href="service.html">
                      <FaChevronRight className="mb-1" /> Reasearch sector
                    </a>
                  </li>
                  <li>
                    <a href="service.html">
                      <FaChevronRight className="mb-1" /> Finance Sector
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget widget-recent-post">
                <h4 className="widget-title">Contact us</h4>
                <div className="widget widget_contact">
                  <ul className="details">
                    <li>
                      <FaMapMarkerAlt />
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </li>
                    <li className="mt-3">
                      <FaPhoneAlt className="mb-1" /> (+888) 123 456 765
                    </li>
                    <li className="mt-2">
                      <FaEnvelope className="mb-1" /> infoname@mail.com
                    </li>
                  </ul>
                  <ul className="social-media mt-4">
                    <li>
                      <a href="#">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaYoutube />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6 align-self-center">
                <p>© agiletech 2024 | All Rights Reserved</p>
              </div>
              <div className="col-md-6 text-lg-end">
                <a href="#">Trams &amp; Condition</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer area end */}
    </>
  );
};

export default FooterNine;
