import React from "react";

const AboutAreaTwo = () => {
  return (
    <>
      {/* =============== About Area Two End ===============*/}
      <div className='about-area pd-top-120 pd-bottom-120'>
        <div className='container'>
          <div className='row'>
            <div
              className='col-lg-6 mb-4 mb-lg-0 wow animated fadeInLeft'
              data-wow-duration='1.5s'
              data-wow-delay='0.3s'
            >
              <div className='about-thumb-inner'>
                <img
                  className='main-img'
                  src='assets/img/about/10.png'
                  alt='img'
                />
              </div>
            </div>
            <div
              className='col-lg-6 wow animated fadeInRight'
              data-wow-duration='1.5s'
              data-wow-delay='0.3s'
            >
              <div className='section-title mb-0'>
                <h6 className='sub-title'>ABOUT US</h6>
                <h2 className='title'>
                  Empowering businesses with SaaS technology
                </h2>
                <p className='content mb-4'>
                  You can access SaaS applications through a web browser or
                  mobile app, as long as you have an internet connection.
                </p>
                <div className='row'>
                  <div className='col-md-6'>
                    <ul className='single-list-inner style-check style-heading style-check mb-3'>
                      <li>
                        <i className='fas fa-check-circle' /> Mistakes To Avoid
                        to the
                      </li>
                      <li>
                        <i className='fas fa-check-circle' /> Your Startup
                        industry stan
                      </li>
                    </ul>
                  </div>
                  <div className='col-md-6'>
                    <ul className='single-list-inner style-check style-heading style-check mb-3'>
                      <li>
                        <i className='fas fa-check-circle' /> Mistakes To Avoid
                        to the
                      </li>
                      <li>
                        <i className='fas fa-check-circle' /> Your Startup
                        industry stan
                      </li>
                    </ul>
                  </div>
                </div>
                <p className='content'>
                  SaaS providers typically invest heavily in security measures
                  to protect customer data, such as encryption and multi-factor
                  authentication. However, it is important to research and
                  choose a reputable provider and also to ensure that
                </p>
                <a className='btn btn-border-base' href='about.html'>
                  Discover More <i className='fa fa-plus' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* =============== About Area Two End ===============*/}
    </>
  );
};

export default AboutAreaTwo;
