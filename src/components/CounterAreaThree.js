import React from "react";

const CounterAreaThree = () => {
  return (
    <>
      {/*================= counter area start {/*=================*/}
      <div className='counter-area bg-base pd-top-110 pd-bottom-90'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-md-6'>
              <div className='single-counter-inner style-2 text-center'>
                <div className='thumb'>
                  <img src='assets/img/icon/27.svg' alt='img' />
                </div>
                <h2 className='text-white mt-3 mb-2'>
                  <span className='counter'>200</span>+
                </h2>
                <p className='text-white'>Team member</p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='single-counter-inner style-2 text-center'>
                <div className='thumb'>
                  <img src='assets/img/icon/28.svg' alt='img' />
                </div>
                <h2 className='text-white mt-3 mb-2'>
                  <span className='counter'>25</span>k+
                </h2>
                <p className='text-white'>Winning award</p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='single-counter-inner style-2 text-center'>
                <div className='thumb'>
                  <img src='assets/img/icon/29.svg' alt='img' />
                </div>
                <h2 className='text-white mt-3 mb-2'>
                  <span className='counter'>150</span>+
                </h2>
                <p className='text-white'>Complete project</p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='single-counter-inner style-2 text-center'>
                <div className='thumb'>
                  <img src='assets/img/icon/30.svg' alt='img' />
                </div>
                <h2 className='text-white mt-3 mb-2'>
                  <span className='counter'>180</span>+
                </h2>
                <p className='text-white'>Client review</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*{/*================= counter area end {/*=================*/}
    </>
  );
};

export default CounterAreaThree;
