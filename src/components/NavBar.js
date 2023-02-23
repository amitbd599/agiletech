import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const NavBar = () => {
  const [active, setActive] = useState(false);
  const menuActive = () => {
    setActive(!active);
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
      <div className='td-search-popup' id='td-search-popup'>
        <form action='index.html' className='search-form'>
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
      <div className='body-overlay' id='body-overlay' />
      {/* navbar start */}
      <nav className='navbar navbar-area navbar-expand-lg'>
        <div className='container nav-container navbar-bg'>
          <div className='responsive-mobile-menu'>
            <button
              onClick={menuActive}
              className='menu toggle-btn d-block d-lg-none'
              data-target='#itech_main_menu'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='icon-left' />
              <span className='icon-right' />
            </button>
          </div>
          <div className='logo'>
            <a href='index.html'>
              <img src='assets/img/logo.png' alt='img' />
            </a>
          </div>
          <div className='nav-right-part nav-right-part-mobile'>
            <a className='search-bar-btn' href='#'>
              <FaSearch />
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
            <ul className='navbar-nav menu-open text-lg-end'>
              <li className='menu-item-has-children'>
                <a href='#'>Home</a>
                <ul className='sub-menu'>
                  <li>
                    <a href='index.html'>Home 01</a>
                  </li>
                  <li>
                    <a href='index-2.html'>Home 02</a>
                  </li>
                  <li>
                    <a href='index-3.html'>Home 03</a>
                  </li>
                </ul>
              </li>
              <li className='menu-item-has-children'>
                <a href='#'>Service</a>
                <ul className='sub-menu'>
                  <li>
                    <a href='service.html'>Service</a>
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
                    <a href='team.html'>Team</a>
                  </li>
                  <li>
                    <a href='team-details.html'>Team Details</a>
                  </li>
                  <li>
                    <a href='case-study-details.html'>Case Study Details</a>
                  </li>
                </ul>
              </li>
              <li className='menu-item-has-children'>
                <a href='#'>Blog</a>
                <ul className='sub-menu'>
                  <li>
                    <a href='blog.html'>Blog</a>
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
          <div className='nav-right-part nav-right-part-desktop align-self-center'>
            <a className='navbar-phone' href='tel:'>
              <span className='icon'>
                <img src='assets/img/icon/1.png' alt='img' />
              </span>
              <span>Need help?</span>
              <h5>(808) 555-0111</h5>
            </a>
          </div>
        </div>
      </nav>
      {/* navbar end */}
    </>
  );
};

export default NavBar;
