import React from 'react';
import NavBar from '../components/NavBar';
import Breadcrumb from '../components/Breadcrumb';
import FooterOne from '../components/FooterOne';
import PriceAreaTwo from '../components/PriceAreaTwo';

const PriceTwo = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Breadcrumb */}
      <Breadcrumb title={'Price 02'} />

      {/* PriceAreaTwo */}
      <PriceAreaTwo />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default PriceTwo;
