import React from "react";
import {
  FaChevronRight,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const FooterTwo = () => {
  return (
    <>
      {/* ================== Footer Two Start ==================*/}
      <footer className='footer-area footer-area-2 bg-gray mt-0 pd-top-120'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-md-6'>
              <div className='widget widget_about'>
                <div className='thumb'>
                  <img src='assets/img/logo.png' alt='img' />
                </div>
                <div className='details'>
                  <p>
                    Melbourne is simply is dumiomy is text Lorem Ipsum is simply
                  </p>
                  <div className='subscribe mt-4'>
                    <input type='text' placeholder='E-mail' />
                    <button>
                      <FaChevronRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 ps-xl-5'>
              <div className='widget widget_nav_menu'>
                <h4 className='widget-title'>Our Service</h4>
                <ul>
                  <li>
                    <a href='service.html'>
                      <FaChevronRight /> Ui Design
                    </a>
                  </li>
                  <li>
                    <a href='service.html'>
                      <FaChevronRight /> Web design
                    </a>
                  </li>
                  <li>
                    <a href='service.html'>
                      <FaChevronRight /> Digital marketing{" "}
                    </a>
                  </li>
                  <li>
                    <a href='service.html'>
                      <FaChevronRight /> Video Editing
                    </a>
                  </li>
                  <li>
                    <a href='service.html'>
                      <FaChevronRight /> Pc Repairs
                    </a>
                  </li>
                  <li>
                    <a href='service.html'>
                      <FaChevronRight /> Web Development
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 ps-xl-5'>
              <div className='widget widget_nav_menu'>
                <h4 className='widget-title'>Pay links</h4>
                <ul>
                  <li>
                    <a href='service.html'>
                      <FaChevronRight /> Credit industrys
                    </a>
                  </li>
                  <li>
                    <a href='service.html'>
                      <FaChevronRight /> Reasearch sector
                    </a>
                  </li>
                  <li>
                    <a href='service.html'>
                      <FaChevronRight /> Finance Sector{" "}
                    </a>
                  </li>
                  <li>
                    <a href='service.html'>
                      <FaChevronRight /> Credit industrys
                    </a>
                  </li>
                  <li>
                    <a href='service.html'>
                      <FaChevronRight /> Reasearch sector
                    </a>
                  </li>
                  <li>
                    <a href='service.html'>
                      <FaChevronRight /> Finance Sector
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='widget widget-recent-post'>
                <h4 className='widget-title'>Contact us</h4>
                <div className='widget widget_contact'>
                  <ul className='details'>
                    <li>
                      <FaMapMarkedAlt />
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </li>
                    <li className='mt-3'>
                      <FaPhoneAlt /> (+888) 123 456 765
                    </li>
                    <li className='mt-2'>
                      <FaEnvelope /> infoname@mail.com
                    </li>
                  </ul>
                  <ul className='social-media mt-4'>
                    <li>
                      <a href='#'>
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <FaYoutube />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 align-self-center'>
                <p>© Yoursitename 2023 | All Rights Reserved</p>
              </div>
              <div className='col-md-6 text-lg-end'>
                <a href='#'>Trams &amp; Condition</a>
                <a href='#'>Privacy Policy</a>
                <a href='#'>Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* ================== Footer Two  end ==================*/}
    </>
  );
};

export default FooterTwo;
