import React, { useState } from 'react';
import {
  FaArrowRight,
  FaFacebookF,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPinterestP,
  FaPlus,
  FaRegEnvelope,
  FaSearch,
  FaTwitter,
} from 'react-icons/fa';
import { FaRegCircleXmark } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const NavbarSeven = () => {
  const [active, setActive] = useState(false);
  const [searchShow, setSearchShow] = useState(false);
  const menuActive = () => {
    setActive(!active);
  };
  const searchActive = () => {
    setSearchShow(!searchShow);
    console.log('hell');
  };

  // Control sidebar navigation
  let items = document.querySelectorAll('.menu-item-has-children > a');
  for (let i in items) {
    if (items.hasOwnProperty(i)) {
      items[i].onclick = function () {
        this.parentElement
          .querySelector('.sub-menu')
          .classList.toggle('active');
        this.classList.toggle('open');
      };
    }
  }
  return (
    <>
      {/* search popup start*/}
      <div
        className={searchShow ? 'td-search-popup active' : 'td-search-popup '}
      >
        <div className="search-form">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search....."
            />
          </div>
          <button type="submit" className="submit-btn">
            <FaSearch />
          </button>
          <button className="close_search" onClick={searchActive}>
            <FaRegCircleXmark />
          </button>
        </div>
      </div>
      {/* search popup end*/}
      <div
        className={searchShow ? 'body-overlay active' : 'body-overlay'}
        id="body-overlay"
      />
      <div className="navbar-top NavbarSeven pe-3 bg-gray d-lg-block d-none">
        <div className="container custom-container">
          <div className="row">
            <div className="col-lg-8">
              <ul>
                <li>
                  <FaRegEnvelope /> info@example.com
                </li>
                <li>
                  <FaMapMarkerAlt /> 6391 Elgin St. Celina, 10299
                </li>
              </ul>
            </div>
            <div className="col-lg-4 text-lg-end">
              <ul className="topbar-right">
                <li>Follow On: </li>
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
                    <FaLinkedinIn />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaPinterestP />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* navbar start */}
      <nav className="navbar navbar-area navbar-area-2 navbar-area-7 navbar-expand-lg bg-white">
        <div className="container nav-container custom-container">
          <div className="responsive-mobile-menu">
            <button
              onClick={menuActive}
              className={
                active
                  ? 'menu toggle-btn d-block d-lg-none open'
                  : 'menu toggle-btn d-block d-lg-none'
              }
              data-target="#itech_main_menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-left" />
              <span className="icon-right" />
            </button>
          </div>
          <div className="logo">
            <a href="index.html">
              <img src="assets/img/logo.png" alt="img" />
            </a>
          </div>
          <div className="nav-right-part nav-right-part-mobile">
            <a className="search-bar-btn" href="#">
              <FaSearch />
            </a>
          </div>
          <div className="collapse navbar-collapse" id="itech_main_menu">
            <ul className="navbar-nav menu-open text-lg-center ps-lg-5">
              <li className="menu-item-has-children">
                <a href="#">Home</a>
                <ul className="sub-menu">
                  <li>
                    <a href="index-1.html">IT / Softwer Agency</a>
                  </li>
                  <li>
                    <a href="index-2.html">SaaS App Landing</a>
                  </li>
                  <li>
                    <a href="index-3.html">Payments Solution</a>
                  </li>
                  <li>
                    <a href="index-4.html">Startup / Software Company</a>
                  </li>
                  <li>
                    <a href="index-5.html">Artificial Intelligence</a>
                  </li>
                  <li>
                    <a href="index-6.html">NFT Service</a>
                  </li>
                  <li>
                    <a href="index-7.html">Cyber Security</a>
                  </li>
                  <li>
                    <a href="index-8.html">Hardware Service</a>
                  </li>
                  <li>
                    <a href="index-9.html">ICO Landing</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Service</a>
                <ul className="sub-menu">
                  <li>
                    <a href="service.html">Service 01</a>
                  </li>
                  <li>
                    <a href="service-2.html">Service 02</a>
                  </li>
                  <li>
                    <a href="service-3.html">Service 03</a>
                  </li>
                  <li>
                    <a href="service-4.html">Service 04</a>
                  </li>
                  <li>
                    <a href="service-5.html">Service 05</a>
                  </li>
                  <li>
                    <a href="service-details.html">Service Single</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Pages</a>
                <ul className="sub-menu">
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <a href="team.html">Team 01</a>
                  </li>
                  <li>
                    <a href="team-2.html">Team 02</a>
                  </li>
                  <li>
                    <a href="team-3.html">Team 03</a>
                  </li>
                  <li>
                    <a href="team-details.html">Team Details</a>
                  </li>
                  <li>
                    <a href="pricing.html">Pricing 01</a>
                  </li>
                  <li>
                    <a href="pricing-2.html">Pricing 02</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children mega-menu">
                <a href="#">Mega Menu</a>
                <div className="sub-menu">
                  <div className="row">
                    <div className="col-lg-3">
                      <ul>
                        <li>
                          <a href="index-1.html">IT / Softwer Agency</a>
                        </li>
                        <li>
                          <a href="index-2.html">SaaS App Landing</a>
                        </li>
                        <li>
                          <a href="index-3.html">Payments Solution</a>
                        </li>
                        <li>
                          <a href="index-4.html">Startup / Software Company</a>
                        </li>
                        <li>
                          <a href="index-5.html">Artificial Intelligence</a>
                        </li>
                        <li>
                          <a href="index-6.html">NFT Service</a>
                        </li>
                        <li>
                          <a href="index-7.html">Cyber Security</a>
                        </li>
                        <li>
                          <a href="index-8.html">Hardware Service</a>
                        </li>
                        <li>
                          <a href="index-9.html">ICO Landing</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-3">
                      <ul>
                        <li>
                          <a href="service.html">Service 01</a>
                        </li>
                        <li>
                          <a href="service-2.html">Service 02</a>
                        </li>
                        <li>
                          <a href="service-3.html">Service 03</a>
                        </li>
                        <li>
                          <a href="service-4.html">Service 04</a>
                        </li>
                        <li>
                          <a href="service-5.html">Service 05</a>
                        </li>
                        <li>
                          <a href="service-details.html">Service Single</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-3">
                      <ul>
                        <li>
                          <a href="project.html">Project 01</a>
                        </li>
                        <li>
                          <a href="project-2.html">Project 02</a>
                        </li>
                        <li>
                          <a href="project-3.html">Project 03</a>
                        </li>
                        <li>
                          <a href="project-details.html">Case Study Details</a>
                        </li>
                        <li>
                          <a href="pricing.html">Pricing 01</a>
                        </li>
                        <li>
                          <a href="pricing-2.html">Pricing 02</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-3">
                      <ul>
                        <li>
                          <a href="about.html">About Us</a>
                        </li>
                        <li>
                          <a href="team.html">Team 01</a>
                        </li>
                        <li>
                          <a href="team-2.html">Team 02</a>
                        </li>
                        <li>
                          <a href="team-3.html">Team 03</a>
                        </li>
                        <li>
                          <a href="team-details.html">Team Details</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Blog</a>
                <ul className="sub-menu">
                  <li>
                    <a href="blog.html">Blog 01</a>
                  </li>
                  <li>
                    <a href="blog-2.html">Blog 02</a>
                  </li>
                  <li>
                    <a href="blog-3.html">Blog 03</a>
                  </li>
                  <li>
                    <a href="blog-4.html">Blog 04</a>
                  </li>
                  <li>
                    <a href="blog-details.html">Blog Details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="nav-right-part nav-right-part-desktop d-lg-inline-flex align-item-center">
            <a className="navbar-phone d-xl-inline-block d-none" href="tel:">
              <span className="icon">
                <img src="assets/img/icon/1.png" alt="img" />
              </span>
              <span>Need help?</span>
              <h5>(808) 555-0111</h5>
            </a>
            <Link
              className="search-bar-btn mt-0 me-4"
              to="#"
              onClick={searchActive}
            >
              <FaSearch />
            </Link>
            <a className="btn btn-border-base" href="about.html">
              Discover More <FaPlus />
            </a>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-area navbar-area-3 navbar-expand-lg d-none">
        <div className="container nav-container custom-container">
          <div className="responsive-mobile-menu">
            <button
              onClick={menuActive}
              className={
                active
                  ? 'menu toggle-btn d-block d-lg-none open'
                  : 'menu toggle-btn d-block d-lg-none'
              }
              data-target="#itech_main_menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-left" />
              <span className="icon-right" />
            </button>
          </div>
          <div className="logo">
            <Link to="/index-1">
              <img src="assets/img/logo3.png" alt="img" />
            </Link>
          </div>
          <div className="nav-right-part nav-right-part-mobile">
            <span className="search-bar-btn" onClick={searchActive}>
              <FaSearch />
            </span>
          </div>
          <div
            className={
              active
                ? 'collapse navbar-collapse sopen'
                : 'collapse navbar-collapse'
            }
            id="itech_main_menu"
          >
            <ul className="navbar-nav menu-open text-lg-center ps-lg-5 navbarFive">
              <li className="menu-item-has-children">
                <a href="#">Home</a>
                <ul className="sub-menu">
                  <li>
                    <Link to="/index-1">Home 01</Link>
                  </li>
                  <li>
                    <Link to="/index-2">Home 02</Link>
                  </li>
                  <li>
                    <Link to="/index-3">Home 03</Link>
                  </li>
                  <li>
                    <Link to="/index-4">Home 04</Link>
                  </li>
                  <li>
                    <Link to="/index-5">Home 05</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Service</a>
                <ul className="sub-menu">
                  <li>
                    <Link to="/service">Service</Link>
                  </li>
                  <li>
                    <Link to="/service-details">Service Single</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Pages</a>
                <ul className="sub-menu">
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/team">Team</Link>
                  </li>
                  <li>
                    <Link to="/team-details">Team Details</Link>
                  </li>
                  <li>
                    <Link to="/case-study-details">Case Study Details</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Blog</a>
                <ul className="sub-menu">
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/blog-details">Blog Details</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="nav-right-part nav-right-part-desktop align-self-center">
            <Link
              className="btn btn-base-color border-radius-5 d-flex align-items-center"
              to="/about"
            >
              Get a quote <FaArrowRight className="mt-0" />
            </Link>
          </div>
        </div>
      </nav>
      {/* navbar end */}
    </>
  );
};

export default NavbarSeven;
