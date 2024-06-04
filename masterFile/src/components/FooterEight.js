import React from 'react';
import {
  FaArrowRight,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

const FooterEight = () => {
  return (
    <>
      {/* footer area start */}
      <footer className="footer-area footer-area_8 bg-black-2-ico bg-cover mt-0">
        <div className="footer-subscribe">
          <div className="container">
            <div className="footer-subscribe-inner style-3 bg-cover">
              <div className="row">
                <div className="col-lg-6 mb-4 mb-lg-0">
                  <h2 className="mb-3 text-white">Newsletters</h2>
                  <p className="mb-0 text-white">
                    Lorem Ipsum is simply dummy text of the printing
                  </p>
                </div>
                <div className="col-lg-6 align-self-center text-lg-end">
                  <input type="text" placeholder="Your e-mail address" />
                  <a className="btn btn-base bg-base-9" href="#">
                    Submit now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="widget widget_about">
                <div className="thumb">
                  <img src="assets/img/home-9/1.png" alt="img" />
                </div>
                <div className="details">
                  <p>
                    Melbourne is simply is dumiomy is text Lorem Ipsum is simply
                  </p>
                  <p className="mt-3">
                    <FaPhoneAlt /> (+888) 123 456 765
                  </p>
                  <p className="mt-2">
                    <FaEnvelope /> infoname@mail.com
                  </p>
                  <ul className="social-media">
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
            <div className="col-lg-4 col-md-6">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">Usefull links</h4>
                <ul>
                  <li>
                    <a href="service.html">
                      <FaArrowRight /> Credit industrys
                    </a>
                  </li>
                  <li>
                    <a href="service.html">
                      <FaArrowRight /> Reasearch sector
                    </a>
                  </li>
                  <li>
                    <a href="service.html">
                      <FaArrowRight /> Finance Sector{' '}
                    </a>
                  </li>
                  <li>
                    <a href="service.html">
                      <FaArrowRight /> Credit industrys
                    </a>
                  </li>
                  <li>
                    <a href="service.html">
                      <FaArrowRight /> Reasearch sector
                    </a>
                  </li>
                  <li>
                    <a href="service.html">
                      <FaArrowRight /> Finance Sector
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
                      <FaPhoneAlt /> (+888) 123 456 765
                    </li>
                    <li className="mt-2">
                      <FaEnvelope /> infoname@mail.com
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

export default FooterEight;
