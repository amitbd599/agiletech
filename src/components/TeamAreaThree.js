import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const TeamAreaThree = () => {
  return (
    <>
      {/*====================== team area start ======================*/}
      <div
        className='team-area bg-relative pd-top-120 pd-bottom-90'
        style={{ backgroundImage: 'url("assets/img/bg/15.png")' }}
      >
        <div className='container pd-top-120'>
          <div className='row'>
            <div className='col-lg-5'>
              <div className='section-title style-white'>
                <h6 className='sub-title-sky-blue'>MEET OUR EXPERTS</h6>
                <h2 className='title'>Innovation Through Is Intelligence</h2>
              </div>
            </div>
          </div>
          <div className='team-slider owl-carousel slider-control-square slider-control-right-top'>
            <div className='item'>
              <div className='single-team-inner text-center border-radius-5 bg-white'>
                <div className='thumb bg-gray border-radius-5'>
                  <img src='assets/img/team/1.png' alt='img' />
                  <ul className='team-social-inner border-radius-5'>
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
                  </ul>
                </div>
                <div className='details'>
                  <h5>
                    <a href='team-details.html'>Devon Lane</a>
                  </h5>
                  <p>SEO Department</p>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='single-team-inner text-center border-radius-5 bg-white'>
                <div className='thumb bg-gray border-radius-5'>
                  <img src='assets/img/team/2.png' alt='img' />
                  <ul className='team-social-inner border-radius-5'>
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
                  </ul>
                </div>
                <div className='details'>
                  <h5>
                    <a href='team-details.html'>Darrell Steward</a>
                  </h5>
                  <p>It Department</p>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='single-team-inner text-center border-radius-5 bg-white'>
                <div className='thumb bg-gray border-radius-5'>
                  <img src='assets/img/team/3.png' alt='img' />
                  <ul className='team-social-inner border-radius-5'>
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
                  </ul>
                </div>
                <div className='details'>
                  <h5>
                    <a href='team-details.html'>Bessie Cooper</a>
                  </h5>
                  <p>Software Department</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ====================== team area end ======================*/}
    </>
  );
};

export default TeamAreaThree;
