import React from 'react';
import Footer from '../components/footer/Footer';
import BodyShop from '../components/shop/BodyShop';
import HeaderShop from '../components/shop/HeaderShop';

export default function Shop() {
  return (
    <div className='shop__page'>
      <HeaderShop />
      <BodyShop/>
      <Footer />
    </div>
  )
}
