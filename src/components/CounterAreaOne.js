import React from "react";

const CounterAreaOne = () => {
  return (
    <>
      {/* counter area start */}
      <div
        className='counter-area bg-relative bg-cover pd-top-110 pd-bottom-100'
        style={{ backgroundImage: 'url("./assets/img/bg/5.png")' }}
      >
        <div className='container pd-bottom-90'>
          <div className='row'>
            <div
              className='col-lg-3 col-md-6 wow animated fadeInUp'
              data-wow-duration='1.5s'
              data-wow-delay='0.1s'
            >
              <div className='single-counter-inner'>
                <div className='thumb'>
                  <img src='assets/img/icon/5.svg' alt='img' />
                </div>
                <h2 className='text-white mt-4 mb-2'>
                  <span className='counter'>200</span>+
                </h2>
                <p className='text-white'>Team member</p>
              </div>
            </div>
            <div
              className='col-lg-3 col-md-6 wow animated fadeInUp'
              data-wow-duration='1.5s'
              data-wow-delay='0.3s'
            >
              <div className='single-counter-inner'>
                <div className='thumb'>
                  <img src='assets/img/icon/6.svg' alt='img' />
                </div>
                <h2 className='text-white mt-4 mb-2'>
                  <span className='counter'>10</span>k+
                </h2>
                <p className='text-white'>Team member</p>
              </div>
            </div>
            <div
              className='col-lg-3 col-md-6 wow animated fadeInUp'
              data-wow-duration='1.5s'
              data-wow-delay='0.4s'
            >
              <div className='single-counter-inner'>
                <div className='thumb'>
                  <img src='assets/img/icon/7.svg' alt='img' />
                </div>
                <h2 className='text-white mt-4 mb-2'>
                  <span className='counter'>200</span>+
                </h2>
                <p className='text-white'>Team member</p>
              </div>
            </div>
            <div
              className='col-lg-3 col-md-6 wow animated fadeInUp'
              data-wow-duration='1.5s'
              data-wow-delay='0.5s'
            >
              <div className='single-counter-inner'>
                <div className='thumb'>
                  <img src='assets/img/icon/8.svg' alt='img' />
                </div>
                <h2 className='text-white mt-4 mb-2'>
                  <span className='counter'>200</span>+
                </h2>
                <p className='text-white'>Team member</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* counter area end */}
    </>
  );
};

export default CounterAreaOne;
