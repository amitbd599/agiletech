import React, { useState } from "react";
import {
  FaAngleRight,
  FaArrowRight,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPinterestP,
  FaSearch,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const NavbarFive = () => {
  const [active, setActive] = useState(false);
  const [searchShow, setSearchShow] = useState(false);
  const menuActive = () => {
    setActive(!active);
  };
  const searchActive = () => {
    setSearchShow(!searchShow);
    console.log("hell");
  };

  // Control sidebar navigation
  let items = document.querySelectorAll(".menu-item-has-children > a");
  for (let i in items) {
    if (items.hasOwnProperty(i)) {
      items[i].onclick = function () {
        this.parentElement
          .querySelector(".sub-menu")
          .classList.toggle("active");
        this.classList.toggle("open");
      };
    }
  }
  return (
    <>
      {/* search popup start*/}
      <div
        className={searchShow ? "td-search-popup active" : "td-search-popup "}
        id='td-search-popup'
      >
        <form action='/' className='search-form'>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Search.....'
            />
          </div>
          <button type='submit' className='submit-btn'>
            <FaSearch />
          </button>
        </form>
      </div>
      {/* search popup end*/}
      <div
        onClick={searchActive}
        className={searchShow ? "body-overlay active" : "body-overlay"}
        id='body-overlay'
      ></div>
      {/* ==================== Navbar Two Start ====================*/}
      <div className='navbar-area-wrap navbar-area-4'>
        <img className='left-bg' src='assets/img/bg/17.png' alt='img' />
        <div className='row'>
          <div className='col-lg-3 align-self-center'>
            <div className='logo'>
              <a href='index.html'>
                <img src='assets/img/logo2.png' alt='img' />
              </a>
            </div>
          </div>
          <div className='col-lg-9'>
            <div className='navbar-top pe-3'>
              <div className='row'>
                <div className='col-lg-8'>
                  <ul>
                    <li>
                      <FaPhoneAlt /> (629) 555-0129
                    </li>
                    <li>
                      <FaEnvelope /> info@example.com
                    </li>
                    <li>
                      <FaMapMarkerAlt /> 6391 Elgin St. Celina, 10299
                    </li>
                  </ul>
                </div>
                <div className='col-lg-4 text-lg-end'>
                  <ul className='topbar-right'>
                    <li>Follow On: </li>
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
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <FaPinterestP />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* navbar start */}
            <nav className='navbar navbar-area navbar-area-2 navbar-expand-lg bg-white'>
              <div className='container nav-container custom-container ps-lg-0'>
                <div className='responsive-mobile-menu'>
                  <button
                    onClick={menuActive}
                    className={
                      active
                        ? "menu toggle-btn d-block d-lg-none open"
                        : "menu toggle-btn d-block d-lg-none"
                    }
                    data-target='#itech_main_menu'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                  >
                    <span className='icon-left' />
                    <span className='icon-right' />
                  </button>
                </div>
                <div className='nav-right-part nav-right-part-mobile'>
                  <a className='search-bar-btn' href='#'>
                    <i className='fa fa-search' />
                  </a>
                </div>
                <div
                  className={
                    active
                      ? "collapse navbar-collapse sopen"
                      : "collapse navbar-collapse"
                  }
                  id='itech_main_menu'
                >
                  <ul className='navbar-nav menu-open'>
                    <li className='menu-item-has-children'>
                      <a href='#'>Home</a>
                      <ul className='sub-menu'>
                        <li>
                          <a href='index-1.html'>IT / Softwer Agency</a>
                        </li>
                        <li>
                          <a href='index-2.html'>SaaS App Landing</a>
                        </li>
                        <li>
                          <a href='index-3.html'>Payments Solution</a>
                        </li>
                        <li>
                          <a href='index-4.html'>Software Company</a>
                        </li>
                        <li>
                          <a href='index-5.html'>Artificial Intelligence</a>
                        </li>
                        <li>
                          <a href='index-6.html'>NFT Service</a>
                        </li>
                        <li>
                          <a href='index-7.html'>Cyber Security</a>
                        </li>
                        <li>
                          <a href='index-8.html'>Hardware Service</a>
                        </li>
                        <li>
                          <a href='index-9.html'>ICO Landing</a>
                        </li>
                      </ul>
                    </li>
                    <li className='menu-item-has-children'>
                      <a href='#'>Service</a>
                      <ul className='sub-menu'>
                        <li>
                          <a href='service.html'>Service 01</a>
                        </li>
                        <li>
                          <a href='service-2.html'>Service 02</a>
                        </li>
                        <li>
                          <a href='service-3.html'>Service 03</a>
                        </li>
                        <li>
                          <a href='service-4.html'>Service 04</a>
                        </li>
                        <li>
                          <a href='service-5.html'>Service 05</a>
                        </li>
                        <li>
                          <a href='service-details.html'>Service Single</a>
                        </li>
                      </ul>
                    </li>
                    <li className='menu-item-has-children'>
                      <a href='#'>Pages</a>
                      <ul className='sub-menu'>
                        <li>
                          <a href='about.html'>About Us</a>
                        </li>
                        <li>
                          <a href='team.html'>Team 01</a>
                        </li>
                        <li>
                          <a href='team-2.html'>Team 02</a>
                        </li>
                        <li>
                          <a href='team-3.html'>Team 03</a>
                        </li>
                        <li>
                          <a href='team-details.html'>Team Details</a>
                        </li>
                        <li>
                          <a href='pricing.html'>Pricing 01</a>
                        </li>
                        <li>
                          <a href='pricing-2.html'>Pricing 02</a>
                        </li>
                      </ul>
                    </li>
                    <li className='menu-item-has-children'>
                      <a href='#'>Blog</a>
                      <ul className='sub-menu'>
                        <li>
                          <a href='blog.html'>Blog 01</a>
                        </li>
                        <li>
                          <a href='blog-2.html'>Blog 02</a>
                        </li>
                        <li>
                          <a href='blog-3.html'>Blog 03</a>
                        </li>
                        <li>
                          <a href='blog-4.html'>Blog 04</a>
                        </li>
                        <li>
                          <a href='blog-details.html'>Blog Details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href='contact.html'>Contact Us</a>
                    </li>
                  </ul>
                </div>
                <div className='nav-right-part nav-right-part-desktop d-lg-inline-flex align-item-center'>
                  <a className='btn btn-base' href='about.html'>
                    Explore Now
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* ==================== Navbar Two end ====================*/}
    </>
  );
};

export default NavbarFive;
