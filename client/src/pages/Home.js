/* import Components */
import Footer from '../components/footer/Footer';
import BodyHome from '../components/home/BodyHome';
import HeaderHome from '../components/home/HeaderHome';
import React from 'react';

export default function Home() {
  return (
    <div style={{ background: "#FFFFFF"}} className='home__page'>
      <HeaderHome />
      <BodyHome />
      <Footer />
    </div>
  )
}
