import React from "react";
import {
  FaChevronRight,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegCalendarAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterSix = () => {
  return (
    <>
      {/* ================== Footer  Start ==================*/}
      <footer className='footer-area footer-area-2 bg-gray mt-0 pd-top-120'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-md-6 ps-xl-5'>
              <div className='widget widget_nav_menu'>
                <h4 className='widget-title'>
                  <img
                    className='me-1'
                    src='assets/img/home-8/59.png'
                    alt='img'
                  />{" "}
                  Our Service
                </h4>
                <ul>
                  <li>
                    <a href='service.html'>Ui Design</a>
                  </li>
                  <li>
                    <a href='service.html'>Web design</a>
                  </li>
                  <li>
                    <a href='service.html'>Digital marketing </a>
                  </li>
                  <li>
                    <a href='service.html'>Video Editing</a>
                  </li>
                  <li>
                    <a href='service.html'>Pc Repairs</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 ps-xl-5'>
              <div className='widget widget_nav_menu'>
                <h4 className='widget-title'>
                  <img
                    className='me-1'
                    src='assets/img/home-8/59.png'
                    alt='img'
                  />{" "}
                  Pay links
                </h4>
                <ul>
                  <li>
                    <a href='service.html'>
                      <img
                        className='me-1'
                        src='assets/img/home-8/60.png'
                        alt='img'
                      />{" "}
                      Credit industrys
                    </a>
                  </li>
                  <li>
                    <a href='service.html'>
                      <img
                        className='me-1'
                        src='assets/img/home-8/60.png'
                        alt='img'
                      />{" "}
                      Reasearch sector
                    </a>
                  </li>
                  <li>
                    <a href='service.html'>
                      <img
                        className='me-1'
                        src='assets/img/home-8/60.png'
                        alt='img'
                      />{" "}
                      Finance Sector{" "}
                    </a>
                  </li>
                  <li>
                    <a href='service.html'>
                      <img
                        className='me-1'
                        src='assets/img/home-8/60.png'
                        alt='img'
                      />{" "}
                      Credit industrys
                    </a>
                  </li>
                  <li>
                    <a href='service.html'>
                      <img
                        className='me-1'
                        src='assets/img/home-8/60.png'
                        alt='img'
                      />{" "}
                      Reasearch sector
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='widget widget-recent-post'>
                <h4 className='widget-title'>
                  <img
                    className='me-1'
                    src='assets/img/home-8/59.png'
                    alt='img'
                  />{" "}
                  Contact us
                </h4>
                <div className='widget widget_contact'>
                  <ul className='details'>
                    <li>
                      <img
                        className='me-1'
                        src='assets/img/home-8/61.png'
                        alt='img'
                      />{" "}
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </li>
                    <li className='mt-3'>
                      <img
                        className='me-1'
                        src='assets/img/home-8/62.png'
                        alt='img'
                      />{" "}
                      (+888) 123 456 765
                    </li>
                    <li className='mt-2'>
                      <img
                        className='me-1'
                        src='assets/img/home-8/63.png'
                        alt='img'
                      />{" "}
                      infoname@mail.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div
                className='widget widget_about p-0 ps-xl-4'
                style={{ backgroundColor: "transparent" }}
              >
                <h4 className='widget-title'>
                  <img
                    className='me-1'
                    src='assets/img/home-8/59.png'
                    alt='img'
                  />{" "}
                  Subscribe
                </h4>
                <div className='details'>
                  <div className='subscribe mt-4'>
                    <input type='text' placeholder='E-mail' />
                    <button className='pink-bg-color'>
                      <FaChevronRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4 align-self-center'>
                <a href='index.html'>
                  <img src='assets/img/home-8/logo.png' alt='img' />
                </a>
              </div>
              <div className='col-lg-4 align-self-center'>
                <ul className='social-media text-lg-center mt-lg-0 mt-3 mb-lg-0 mb-3'>
                  <li>
                    <a className='border-radius-50 bg-white' href='#'>
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a className='border-radius-50 bg-white' href='#'>
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a className='border-radius-50 bg-white' href='#'>
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a className='border-radius-50 bg-white' href='#'>
                      <FaYoutube />
                    </a>
                  </li>
                </ul>
              </div>
              <div className='col-lg-4  align-self-center text-lg-end'>
                <p className='mb-0'>
                  © AglieTech  2024 | All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* ================== Footer Two  end ==================*/}
    </>
  );
};

export default FooterSix;
