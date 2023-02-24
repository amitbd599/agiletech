import React, { useState } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavbarThree = () => {
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
      {/* ==================== Navbar Two Start ====================*/}
      <nav className='navbar navbar-area navbar-area-2 navbar-expand-lg bg-white'>
        <div className='container nav-container custom-container'>
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
            <Link to='/index-1'>
              <img src='assets/img/logo.png' alt='img' />
            </Link>
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
                    <Link to='/index-1'>Home 01</Link>
                  </li>
                  <li>
                    <Link to='/index-2'>Home 02</Link>
                  </li>
                  <li>
                    <Link to='/index-3'>Home 03</Link>
                  </li>
                  <li>
                    <Link to='/index-4'>Home 04</Link>
                  </li>
                </ul>
              </li>
              <li className='menu-item-has-children'>
                <a href='#'>Service</a>
                <ul className='sub-menu'>
                  <li>
                    <Link to='/service'>Service</Link>
                  </li>
                  <li>
                    <Link to='/service-details'>Service Single</Link>
                  </li>
                </ul>
              </li>
              <li className='menu-item-has-children'>
                <a href='#'>Pages</a>
                <ul className='sub-menu'>
                  <li>
                    <Link to='/about'>About Us</Link>
                  </li>
                  <li>
                    <Link to='/team'>Team</Link>
                  </li>
                  <li>
                    <Link to='/team-details'>Team Details</Link>
                  </li>
                  <li>
                    <Link to='/case-study-details'>Case Study Details</Link>
                  </li>
                </ul>
              </li>
              <li className='menu-item-has-children'>
                <a href='#'>Blog</a>
                <ul className='sub-menu'>
                  <li>
                    <Link to='/blog'>Blog</Link>
                  </li>
                  <li>
                    <Link to='/blog-details'>Blog Details</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to='/contact'>Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className='nav-right-part nav-right-part-desktop d-lg-inline-flex align-item-center'>
            <a className='navbar-phone d-xl-inline-block d-none' href='tel:'>
              <span className='icon'>
                <img src='assets/img/icon/1.png' alt='img' />
              </span>
              <span>Need help?</span>
              <h5>(808) 555-0111</h5>
            </a>
            <a className='btn btn-border-base' href='about.html'>
              Discover More <FaPlus />
            </a>
          </div>
        </div>
      </nav>
      {/* ==================== Navbar Two end ====================*/}
    </>
  );
};

export default NavbarThree;