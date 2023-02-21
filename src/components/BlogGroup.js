import React from "react";

const BlogGroup = () => {
  return (
    <>
      {/* =============== Blog Group start ===============*/}
      <div className='blog-area pd-top-120 pd-bottom-120'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='single-blog-inner'>
                <div className='thumb'>
                  <img src='assets/img/blog/1.png' alt='img' />
                  <span className='date'>15 DEC</span>
                </div>
                <div className='details'>
                  <ul className='blog-meta'>
                    <li>
                      <i className='far fa-user' /> By Admin
                    </li>
                    <li>
                      <i className='far fa-folder-open' /> Category
                    </li>
                  </ul>
                  <h2 className='title'>
                    <a href='blog-details.html'>
                      A Beginner's Guide to Running a Successful Agricultural
                    </a>
                  </h2>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribut It is a long established fact
                    that a reader will be distracted by the readable content of
                    a page when looking at its layout.
                  </p>
                  <a
                    className='btn btn-border-base mt-3'
                    href='service-details.html'
                  >
                    Touch More <i className='fa fa-plus' />
                  </a>
                </div>
              </div>
              <div className='single-blog-inner'>
                <div className='thumb'>
                  <img src='assets/img/blog/2.png' alt='img' />
                  <span className='date'>15 DEC</span>
                </div>
                <div className='details'>
                  <ul className='blog-meta'>
                    <li>
                      <i className='far fa-user' /> By Admin
                    </li>
                    <li>
                      <i className='far fa-folder-open' /> Category
                    </li>
                  </ul>
                  <h2 className='title'>
                    <a href='blog-details.html'>
                      Successful Agricultural Guide to Running Beginner
                    </a>
                  </h2>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribut It is a long established fact
                    that a reader will be distracted by the readable content of
                    a page when looking at its layout.
                  </p>
                  <a
                    className='btn btn-border-base mt-3'
                    href='service-details.html'
                  >
                    Touch More <i className='fa fa-plus' />
                  </a>
                </div>
              </div>
              <div className='single-blog-inner'>
                <div className='thumb'>
                  <img src='assets/img/blog/3.png' alt='img' />
                  <span className='date'>15 DEC</span>
                </div>
                <div className='details'>
                  <ul className='blog-meta'>
                    <li>
                      <i className='far fa-user' /> By Admin
                    </li>
                    <li>
                      <i className='far fa-folder-open' /> Category
                    </li>
                  </ul>
                  <h2 className='title'>
                    <a href='blog-details.html'>
                      A Beginner's Guide to Running a Successful Agricultural
                    </a>
                  </h2>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribut It is a long established fact
                    that a reader will be distracted by the readable content of
                    a page when looking at its layout.
                  </p>
                  <a
                    className='btn btn-border-base mt-3'
                    href='service-details.html'
                  >
                    Touch More <i className='fa fa-plus' />
                  </a>
                </div>
              </div>
              <div className='pagination'>
                <a className='prev page-numbers' href='http://icare.local/'>
                  <i className='fa fa-angle-left' />
                </a>
                <a className='page-numbers' href='http://icare.local/'>
                  1
                </a>
                <span className='page-numbers current'>2</span>
                <a className='page-numbers' href='http://icare.local/page/3/'>
                  3
                </a>
                <a className='page-numbers' href='http://icare.local/page/4/'>
                  4
                </a>
                <a
                  className='next page-numbers'
                  href='http://icare.local/page/3/'
                >
                  <i className='fa fa-angle-right' />
                </a>
              </div>
            </div>
            <div className='col-lg-4 col-12'>
              <div className='td-sidebar'>
                <div className='widget widget_author text-center'>
                  <div className='thumb'>
                    <img src='assets/img/about/7.png' alt='img' />
                  </div>
                  <div className='details'>
                    <h5>Leslie Alexander</h5>
                    <h6>(480) 555-0103</h6>
                    <ul className='social-media'>
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
                </div>
                <div className='widget widget_search'>
                  <form className='search-form'>
                    <div className='form-group'>
                      <input type='text' placeholder='Key word' />
                    </div>
                    <button className='submit-btn' type='submit'>
                      <i className='fas fa-chevron-right' />
                    </button>
                  </form>
                </div>
                <div className='widget widget-recent-post'>
                  <h4 className='widget-title'>Recent News</h4>
                  <ul>
                    <li>
                      <div className='media'>
                        <div className='media-left'>
                          <img src='assets/img/widget/1.png' alt='blog' />
                        </div>
                        <div className='media-body align-self-center'>
                          <h6 className='title'>
                            <a href='blog-details.html'>
                              Empowering future with solar.
                            </a>
                          </h6>
                          <div className='post-info'>
                            <i className='far fa-calendar-alt' />
                            <span>15 October</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='media'>
                        <div className='media-left'>
                          <img src='assets/img/widget/2.png' alt='blog' />
                        </div>
                        <div className='media-body align-self-center'>
                          <h6 className='title'>
                            <a href='blog-details.html'>
                              Marketing For Base market watch
                            </a>
                          </h6>
                          <div className='post-info'>
                            <i className='far fa-calendar-alt' />
                            <span>15 October</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='media'>
                        <div className='media-left'>
                          <img src='assets/img/widget/3.png' alt='blog' />
                        </div>
                        <div className='media-body align-self-center'>
                          <h6 className='title'>
                            <a href='blog-details.html'>
                              Condtum Integer urna at faucibus
                            </a>
                          </h6>
                          <div className='post-info'>
                            <i className='far fa-calendar-alt' />
                            <span>15 October</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className='widget widget_catagory'>
                  <h4 className='widget-title'>Catagory</h4>
                  <ul className='catagory-items'>
                    <li>
                      <a href='blog.html'>
                        Business <span>3</span>
                      </a>
                    </li>
                    <li>
                      <a href='blog.html'>
                        Finance <span>7</span>
                      </a>
                    </li>
                    <li>
                      <a href='blog.html'>
                        Web Design <span>2</span>
                      </a>
                    </li>
                    <li>
                      <a href='blog.html'>
                        Counsiling <span>3</span>
                      </a>
                    </li>
                    <li>
                      <a href='blog.html'>
                        IT Service <span>5</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='widget widget_tag_cloud mb-0'>
                  <h4 className='widget-title'>Tags</h4>
                  <div className='tagcloud'>
                    <a href='#'>Information</a>
                    <a href='#'>Learn</a>
                    <a href='#'>ICT</a>
                    <a href='#'>Business</a>
                    <a href='#'>Portfolio</a>
                    <a href='#'>Project</a>
                    <a href='#'>Personal</a>
                    <a href='#'>Server</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* =============== Blog Group End ===============*/}
    </>
  );
};

export default BlogGroup;