import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Demo = () => {
  const [stickyNav, setStickyNav] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset < 100) {
        setStickyNav(false);
      } else if (window.pageYOffset > 100) {
        setStickyNav(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);

  return (
    <section className="root-demo">
      {/* Navigation */}
      <header className="navbar-area m-0 demo-main">
        <nav
          className={
            stickyNav
              ? 'navbar navbar-expand-lg navbar-default navbar-fixed-top top-nav-collapse'
              : 'navbar navbar-expand-lg navbar-default navbar-fixed-top'
          }
        >
          <div className="container nav-container demo">
            <div className="logo">
              <Link className="main-logo" to="/">
                <img src="/assets/demo-img/logo.png" alt="img" />
              </Link>
            </div>
            <div className="nav-right-part nav-right-part-mobile ms-auto">
              <ul className="text-end">
                <li>
                  <Link className="page-scroll" to="/#demo">
                    Demos
                  </Link>
                </li>
                <li>
                  <Link className="page-scroll" to="/#inner">
                    Inners
                  </Link>
                </li>
                <li>
                  <Link className="cart" to="/">
                    <img src="/assets/demo-img/add-to-cart.svg" alt="img" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="collapse navbar-collapse" id="al_main_menu">
              <ul className="navbar-nav menu-open text-center m-auto">
                <li>
                  <Link className="page-scroll" to="/#demo">
                    Demos
                  </Link>
                </li>
                <li>
                  <Link className="page-scroll" to="/#inner">
                    Inner Pages
                  </Link>
                </li>
                <li>
                  <Link className="page-scroll" to="/#header">
                    Header
                  </Link>
                </li>
                <li>
                  <Link className="page-scroll" to="/#footer">
                    Footer
                  </Link>
                </li>
                <li>
                  <Link className="page-scroll" to="/#featured">
                    Features
                  </Link>
                </li>
              </ul>
            </div>
            <div className="nav-right-part nav-right-part-desktop">
              <ul>
                <li>
                  <a
                    to="/https://themeforest.net/user/wowtheme7"
                    className="btn btn-white"
                  >
                    Purchase Now
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <>
        {/* Banner Area Start*/}
        <div
          id="banner"
          className="banner-area"
          style={{
            backgroundImage: 'url("/assets/img/demo-landing/img/01.png")',
          }}
        >
          <div
            className="banner-animate-image"
            style={{
              backgroundImage: 'url("/assets/img/demo-landing/img/00.png")',
            }}
          />
          <div className="sidebar-links">
            <a
              className="btn btn-white"
              to="/https://themeforest.net/user/wowtheme7"
            >
              <i className="fa fa-cart-arrow-down" />
              Add To Cart
            </a>
            <a
              className="btn btn-white"
              to="/https://themeforest.net/user/wowtheme7"
            >
              <i className="fa fa-cog" />
              Demo Link
            </a>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-9 justify-content-center">
                <div className="banner-inner text-center">
                  <h6>Pixel-perfect design</h6>
                  <h1>AglieTech - Trendy &amp; Powerful React JS Template</h1>
                  <div className="element">
                    <span> Awesome 10+ Homes</span>
                    <span> Header &amp; Footer unique</span>
                    <span> Fully Responsive </span>
                    <span> Contact Form </span>
                  </div>
                  <div className="btn-area mt-5">
                    <Link className="btn btn-base page-scroll" to="/#demo">
                      Check Demos
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Banner Area End */}
        {/* counter start */}
        <div className="counter-area pd-top-120 pd-bottom-90">
          <div className="container">
            <div
              className="counter-area-inner"
              style={{
                backgroundImage: 'url("/assets/img/demo-landing/img/01.png")',
              }}
            >
              <div className="row">
                <div className="col-md-4 col-sm-6">
                  <div className="single-counter-inner text-center">
                    <div className="details">
                      <h2>
                        <span className="counter">10</span>+
                      </h2>
                      <p>Total Homes</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="single-counter-inner text-center">
                    <div className="details">
                      <h2>
                        <span className="counter">35</span>+
                      </h2>
                      <p>Total Pages</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="single-counter-inner text-center">
                    <div className="details">
                      <h2>
                        <span className="counter">25</span>
                      </h2>
                      <p>Inner Pages</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* counter end */}
        {/* demo Section */}
        <section id="demo" className="demo-section pd-top-100">
          <div className="container container-large">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <div
                  className="section-title wow animated fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.2s"
                >
                  <h5 className="subtitle">AWESOME DEMOS</h5>
                  <h2 className="title">Great Home Pages</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div
                  className="inner-item style-large wow animated fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.2s"
                >
                  <Link target="_blank" to="/index-1">
                    <span className="thumb">
                      <img src="/assets/img/demo-landing/img/1.jpg" alt="img" />
                    </span>
                    IT / Softwer Agency
                  </Link>
                  <Link target="_blank" className="btn btn-base" to="/index-1">
                    Live Demo
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="inner-item style-large wow animated fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.3s"
                >
                  <Link target="_blank" to="/index-2">
                    <span className="thumb">
                      <img src="/assets/img/demo-landing/img/2.jpg" alt="img" />
                    </span>
                    SaaS App Landing
                  </Link>
                  <Link target="_blank" className="btn btn-base" to="/index-2">
                    Live Demo
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="inner-item style-large wow animated fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.3s"
                >
                  <Link target="_blank" to="/index-3">
                    <span className="thumb">
                      <img src="/assets/img/demo-landing/img/3.jpg" alt="img" />
                    </span>
                    Payments Solution
                  </Link>
                  <Link target="_blank" className="btn btn-base" to="/index-3">
                    Live Demo
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="inner-item style-large wow animated fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.3s"
                >
                  <Link target="_blank" to="/index-4">
                    <span className="thumb">
                      <img src="/assets/img/demo-landing/img/4.jpg" alt="img" />
                    </span>
                    Startup / Software Company
                  </Link>
                  <Link target="_blank" className="btn btn-base" to="/index-4">
                    Live Demo
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="inner-item style-large wow animated fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.3s"
                >
                  <Link target="_blank" to="/index-5">
                    <span className="thumb">
                      <img src="/assets/img/demo-landing/img/5.jpg" alt="img" />
                    </span>
                    AI Solution
                  </Link>
                  <Link target="_blank" className="btn btn-base" to="/index-5">
                    Live Demo
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="inner-item style-large wow animated fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.3s"
                >
                  <Link target="_blank" to="/index-6">
                    <span className="thumb">
                      <img src="/assets/img/demo-landing/img/6.jpg" alt="img" />
                    </span>
                    NFT Service
                  </Link>
                  <Link target="_blank" className="btn btn-base" to="/index-6">
                    Live Demo
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="inner-item style-large wow animated fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.3s"
                >
                  <Link target="_blank" to="/index-7">
                    <span className="thumb">
                      <img src="/assets/img/demo-landing/img/7.jpg" alt="img" />
                    </span>
                    Cyber Security
                  </Link>
                  <Link target="_blank" className="btn btn-base" to="/index-7">
                    Live Demo
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="inner-item style-large wow animated fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.3s"
                >
                  <Link target="_blank" to="/index-8">
                    <span className="thumb">
                      <img src="/assets/img/demo-landing/img/8.jpg" alt="img" />
                    </span>
                    Hardware Service
                  </Link>
                  <Link target="_blank" className="btn btn-base" to="/index-8">
                    Live Demo
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="inner-item style-large wow animated fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.3s"
                >
                  <Link target="_blank" to="/index-9">
                    <span className="thumb">
                      <img src="/assets/img/demo-landing/img/9.jpg" alt="img" />
                    </span>
                    ICO Landing
                  </Link>
                  <Link target="_blank" className="btn btn-base" to="/index-9">
                    Live Demo
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="inner-item style-large wow animated fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.3s"
                >
                  <Link target="_blank" to="/index-10">
                    <span className="thumb">
                      <img
                        src="/assets/img/demo-landing/img/12.jpg"
                        alt="img"
                      />
                    </span>
                    Personal Portfolio
                  </Link>
                  <Link target="_blank" className="btn btn-base" to="/index-10">
                    Live Demo
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="inner-item style-large wow animated fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.3s"
                >
                  <Link target="_blank" to="/index-11">
                    <span className="thumb">
                      <img
                        src="/assets/img/demo-landing/img/11.jpg"
                        alt="img"
                      />
                    </span>
                    Seo Service
                  </Link>
                  <Link target="_blank" className="btn btn-base" to="/index-11">
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* inner Section */}
        <section id="inner" className="inner-section pd-top-130">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <div
                  className="section-title wow animated fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.2s"
                >
                  <h2 className="title">Great Inner Pages</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div
                  className="inner-item inner-page-item wow animated fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.6s"
                >
                  <Link to="/about">
                    <span className="thumb">
                      <img
                        src="/assets/img/demo-landing/img/about.png"
                        alt="img"
                      />
                    </span>
                    About Page
                  </Link>
                  <Link className="btn btn-base" to="/about">
                    Live Demo
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="inner-item inner-page-item wow animated fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.6s"
                >
                  <Link to="/service">
                    <span className="thumb">
                      <img
                        src="/assets/img/demo-landing/img/portfolio.png"
                        alt="img"
                      />
                    </span>
                    Service Page
                  </Link>
                  <Link className="btn btn-base" to="/service">
                    Live Demo
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="inner-item inner-page-item wow animated fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.6s"
                >
                  <Link to="/service-details">
                    <span className="thumb">
                      <img
                        src="/assets/img/demo-landing/img/portfolio-details.png"
                        alt="img"
                      />
                    </span>
                    Service Details
                  </Link>
                  <Link className="btn btn-base" to="/service-details">
                    Live Demo
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="inner-item inner-page-item wow animated fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.6s"
                >
                  <Link to="/team">
                    <span className="thumb">
                      <img
                        src="/assets/img/demo-landing/img/team.png"
                        alt="img"
                      />
                    </span>
                    Team Page{' '}
                  </Link>
                  <Link className="btn btn-base" to="/team">
                    Live Demo
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="inner-item inner-page-item wow animated fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.6s"
                >
                  <Link to="/team-details">
                    <span className="thumb">
                      <img
                        src="/assets/img/demo-landing/img/team-details.png"
                        alt="img"
                      />
                    </span>
                    Team Details Page{' '}
                  </Link>
                  <Link className="btn btn-base" to="/team-details">
                    Live Demo
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="inner-item inner-page-item wow animated fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.6s"
                >
                  <Link to="/blog">
                    <span className="thumb">
                      <img
                        src="/assets/img/demo-landing/img/blog.png"
                        alt="img"
                      />
                    </span>
                    Blog Page
                  </Link>
                  <Link className="btn btn-base" to="/blog">
                    Live Demo
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="inner-item inner-page-item wow animated fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.6s"
                >
                  <Link to="/blog-details">
                    <span className="thumb">
                      <img
                        src="/assets/img/demo-landing/img/blog-details.png"
                        alt="img"
                      />
                    </span>
                    Blog Details Page
                  </Link>
                  <Link className="btn btn-base" to="/blog-details">
                    Live Demo
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="inner-item inner-page-item wow animated fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.6s"
                >
                  <Link to="/contact">
                    <span className="thumb">
                      <img
                        src="/assets/img/demo-landing/img/contact.png"
                        alt="img"
                      />
                    </span>
                    Contact
                  </Link>
                  <Link className="btn btn-base" to="/contact">
                    Live Demo
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="inner-item style-large wow animated fadeInUp coming-soon"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.4s"
                >
                  <Link to="/#">
                    <span className="thumb">
                      <img
                        src="/assets/img/demo-landing/img/blog.png"
                        alt="img"
                      />
                    </span>
                    <span className="cm-soon-title">Comming Soon</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* demo Section */}
        <section id="header" className="widget-section pd-top-87">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <div
                  className="section-title wow animated fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.2s"
                >
                  <h2 className="title">Header Style</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="header-item mb-4">
                  <span className="thumb">
                    <img
                      className="w-100"
                      src="/assets/img/demo-landing/img/header.png"
                      alt="img"
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="header-item mb-4">
                  <span className="thumb">
                    <img
                      className="w-100"
                      src="/assets/img/demo-landing/img/header2.png"
                      alt="img"
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="header-item mb-4">
                  <span className="thumb">
                    <img
                      className="w-100"
                      src="/assets/img/demo-landing/img/header3.png"
                      alt="img"
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="header-item mb-4">
                  <span className="thumb">
                    <img
                      className="w-100"
                      src="/assets/img/demo-landing/img/header4.png"
                      alt="img"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* demo Section */}
        <section id="footer" className="widget-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center pd-top-130">
                <div className="section-title">
                  <h2 className="title">Footer Style</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="header-item mb-4">
                  <span className="thumb">
                    <img
                      className="w-100"
                      src="/assets/img/demo-landing/img/footer.png"
                      alt="img"
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="header-item mb-4">
                  <span className="thumb">
                    <img
                      className="w-100"
                      src="/assets/img/demo-landing/img/footer2.png"
                      alt="img"
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="header-item mb-4">
                  <span className="thumb">
                    <img
                      className="w-100"
                      src="/assets/img/demo-landing/img/footer3.png"
                      alt="img"
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="header-item mb-4">
                  <span className="thumb">
                    <img
                      className="w-100"
                      src="/assets/img/demo-landing/img/footer4.png"
                      alt="img"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* inner Section */}
        <section
          id="featured"
          className="featured-section pd-top-87 pd-bottom-110"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <div
                  className="section-title wow animated fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.2s"
                >
                  <h2 className="title">Core Features</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div
                  className="featured-item wow animated fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.2s"
                >
                  <img
                    src="/assets/img/demo-landing/img/featured/3.png"
                    alt="img"
                  />
                  Bootstrap 5+
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="featured-item wow animated fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.4s"
                >
                  <img
                    src="/assets/img/demo-landing/img/featured/1.png"
                    alt="img"
                  />
                  Sass
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="featured-item wow animated fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.6s"
                >
                  <img
                    src="/assets/img/demo-landing/img/featured/4.png"
                    alt="img"
                  />
                  Font-Awesome
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="featured-item wow animated fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.2s"
                >
                  <img
                    src="/assets/img/demo-landing/img/featured/2.png"
                    alt="img"
                  />
                  Owl-Carousel
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="featured-item wow animated fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.4s"
                >
                  <img
                    src="/assets/img/demo-landing/img/featured/5.png"
                    alt="img"
                  />
                  HTML5
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="featured-item wow animated fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.6s"
                >
                  <img
                    src="/assets/img/demo-landing/img/featured/6.png"
                    alt="img"
                  />
                  CSS3
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="featured-item wow animated fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.2s"
                >
                  <img
                    src="/assets/img/demo-landing/img/featured/7.png"
                    alt="img"
                  />
                  Jquery Tilt
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="featured-item wow animated fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.4s"
                >
                  <img
                    src="/assets/img/demo-landing/img/featured/8.png"
                    alt="img"
                  />
                  W3C Validation
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="featured-item wow animated fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.6s"
                >
                  <img
                    src="/assets/img/demo-landing/img/featured/9.png"
                    alt="img"
                  />
                  Clean Code
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="featured-item wow animated fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.2s"
                >
                  <img
                    src="/assets/img/demo-landing/img/featured/10.png"
                    alt="img"
                  />
                  Magnific Popup
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="featured-item wow animated fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.4s"
                >
                  <img
                    src="/assets/img/demo-landing/img/featured/12.png"
                    alt="img"
                  />
                  100% Responsive
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="featured-item wow animated fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.6s"
                >
                  <img
                    src="/assets/img/demo-landing/img/featured/11.png"
                    alt="img"
                  />
                  Google Fonts
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="featured-item wow animated fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.2s"
                >
                  <img
                    src="/assets/img/demo-landing/img/featured/14.png"
                    alt="img"
                  />
                  Well Documented
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="featured-item wow animated fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.4s"
                >
                  <img
                    src="/assets/img/demo-landing/img/featured/15.png"
                    alt="img"
                  />
                  Counter Up
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="featured-item wow animated fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.6s"
                >
                  <img
                    src="/assets/img/demo-landing/img/featured/13.png"
                    alt="img"
                  />
                  Wow Js
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* footer area start */}
        <footer
          className="footer-area pd-top-100"
          style={{
            backgroundImage: 'url("/assets/img/demo-landing/img/01.png")',
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="footer-widget widget text-center pd-bottom-100">
                  <Link className="logo" to="/index">
                    <img src="/assets/img/demo-landing/img/logo.png" alt="#" />
                  </Link>
                  <h5 className="text-white mb-5 mt-5 lh-base">
                    Mechanic, car repair workshop, garage owner, car wash
                    company. No matter which of these businesses you choose,
                    AglieTech is the first choice when it comes to a website.
                  </h5>
                  <a
                    className="btn btn-white"
                    to="/https://themeforest.net/user/wowtheme7"
                  >
                    Purchase Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center align-self-center">
                  <p>Copy Right by wowtheme7</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* footer area end */}
      </>
    </section>
  );
};

export default Demo;
