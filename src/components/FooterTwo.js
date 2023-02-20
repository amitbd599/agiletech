import React from "react";

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
                      <i className='fas fa-chevron-right' />
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
                      <i className='fas fa-chevron-right' /> Ui Design
                    </a>
                  </li>
                  <li>
                    <a href='service.html'>
                      <i className='fas fa-chevron-right' /> Web design
                    </a>
                  </li>
                  <li>
                    <a href='service.html'>
                      <i className='fas fa-chevron-right' /> Digital marketing{" "}
                    </a>
                  </li>
                  <li>
                    <a href='service.html'>
                      <i className='fas fa-chevron-right' /> Video Editing
                    </a>
                  </li>
                  <li>
                    <a href='service.html'>
                      <i className='fas fa-chevron-right' /> Pc Repairs
                    </a>
                  </li>
                  <li>
                    <a href='service.html'>
                      <i className='fas fa-chevron-right' /> Web Development
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
                      <i className='fas fa-chevron-right' /> Credit industrys
                    </a>
                  </li>
                  <li>
                    <a href='service.html'>
                      <i className='fas fa-chevron-right' /> Reasearch sector
                    </a>
                  </li>
                  <li>
                    <a href='service.html'>
                      <i className='fas fa-chevron-right' /> Finance Sector{" "}
                    </a>
                  </li>
                  <li>
                    <a href='service.html'>
                      <i className='fas fa-chevron-right' /> Credit industrys
                    </a>
                  </li>
                  <li>
                    <a href='service.html'>
                      <i className='fas fa-chevron-right' /> Reasearch sector
                    </a>
                  </li>
                  <li>
                    <a href='service.html'>
                      <i className='fas fa-chevron-right' /> Finance Sector
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
                      <i className='fa fa-map-marker-alt' />
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </li>
                    <li className='mt-3'>
                      <i className='fa fa-phone-alt' /> (+888) 123 456 765
                    </li>
                    <li className='mt-2'>
                      <i className='fas fa-envelope' /> infoname@mail.com
                    </li>
                  </ul>
                  <ul className='social-media mt-4'>
                    <li>
                      <a href='#'>
                        <i className='fab fa-facebook-f' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fab fa-twitter' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fab fa-instagram' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fab fa-youtube' />
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
