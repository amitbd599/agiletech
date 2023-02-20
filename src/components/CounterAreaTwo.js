import React from "react";

const CounterAreaTwo = () => {
  return (
    <>
      {/*================= counter area start {/*=================*/}
      <div
        className='counter-area bg-relative bg-cover pd-top-110 pd-bottom-100'
        style={{ backgroundImage: 'url("./assets/img/bg/10.png")' }}
      >
        <div className='container pd-bottom-90'>
          <div className='row'>
            <div
              className='col-lg-3 col-md-6 wow animated fadeInUp'
              data-wow-duration='1.5s'
              data-wow-delay='0.1s'
            >
              <div className='single-counter-inner media'>
                <div className='thumb media-left pe-4'>
                  <img src='assets/img/icon/16.svg' alt='img' />
                </div>
                <div className='media-body'>
                  <h4 className='mb-1'>
                    <span className='counter'>200</span>+
                  </h4>
                  <p className='mb-0'>Team member</p>
                </div>
              </div>
            </div>
            <div
              className='col-lg-3 col-md-6 wow animated fadeInUp'
              data-wow-duration='1.5s'
              data-wow-delay='0.2s'
            >
              <div className='single-counter-inner media'>
                <div className='thumb media-left pe-4'>
                  <img src='assets/img/icon/17.svg' alt='img' />
                </div>
                <div className='media-body'>
                  <h4 className='mb-1'>
                    <span className='counter'>10</span>k+
                  </h4>
                  <p className='mb-0'>Team member</p>
                </div>
              </div>
            </div>
            <div
              className='col-lg-3 col-md-6 wow animated fadeInUp'
              data-wow-duration='1.5s'
              data-wow-delay='0.3s'
            >
              <div className='single-counter-inner media'>
                <div className='thumb media-left pe-4'>
                  <img src='assets/img/icon/18.svg' alt='img' />
                </div>
                <div className='media-body'>
                  <h4 className='mb-1'>
                    <span className='counter'>200</span>+
                  </h4>
                  <p className='mb-0'>Team member</p>
                </div>
              </div>
            </div>
            <div
              className='col-lg-3 col-md-6 wow animated fadeInUp'
              data-wow-duration='1.5s'
              data-wow-delay='0.4s'
            >
              <div className='single-counter-inner media'>
                <div className='thumb media-left pe-4'>
                  <img src='assets/img/icon/19.svg' alt='img' />
                </div>
                <div className='media-body'>
                  <h4 className='mb-1'>
                    <span className='counter'>200</span>+
                  </h4>
                  <p className='mb-0'>Team member</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*{/*================= counter area end {/*=================*/}
    </>
  );
};

export default CounterAreaTwo;
