import React from "react";

const CounterAreaFour = () => {
  return (
    <>
      {/*================= counter area start {/*=================*/}
      <div className='counter-area mg-top--100'>
        <div className='container pd-bottom-90'>
          <div className='bg-base counter-4-area pt-5 border-radius-20'>
            <div className='row'>
              <div
                className='col-lg-3 align-self-center col-md-6 wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.1s'
              >
                <div className='single-counter-inner'>
                  <h5 className='counter-4-title'>
                    ALWAYS <br /> HAPPY !
                  </h5>
                </div>
              </div>
              <div
                className='col-lg-3 col-md-6 wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.2s'
              >
                <div className='single-counter-inner media'>
                  <div className='thumb media-left pe-2'>
                    <img src='assets/img/icon/33.svg' alt='img' />
                  </div>
                  <div className='media-body align-self-center'>
                    <h4 className='text-white mb-1'>
                      <span className='counter'>10</span>k+
                    </h4>
                    <p className='text-white mb-0'>Team member</p>
                  </div>
                </div>
              </div>
              <div
                className='col-lg-3 col-md-6 wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.3s'
              >
                <div className='single-counter-inner media'>
                  <div className='thumb media-left pe-2'>
                    <img src='assets/img/icon/34.svg' alt='img' />
                  </div>
                  <div className='media-body align-self-center'>
                    <h4 className='text-white mb-1'>
                      <span className='counter'>200</span>+
                    </h4>
                    <p className='text-white mb-0'>Team member</p>
                  </div>
                </div>
              </div>
              <div
                className='col-lg-3 col-md-6 wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.4s'
              >
                <div className='single-counter-inner media'>
                  <div className='thumb media-left pe-2'>
                    <img src='assets/img/icon/35.svg' alt='img' />
                  </div>
                  <div className='media-body align-self-center'>
                    <h4 className='text-white mb-1'>
                      <span className='counter'>200</span>+
                    </h4>
                    <p className='text-white mb-0'>Team member</p>
                  </div>
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

export default CounterAreaFour;
