import React from 'react';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Advantages from '@/components/sections/Advantages';
import Gallery from '@/components/sections/Gallery';
import Services from '@/components/sections/Services';
import Specialists from '@/components/sections/Specialists';
import Reviews from '@/components/sections/Reviews';
import Licenses from '@/components/sections/Licenses';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

const Index = () => {
  return (
    <div className='min-h-screen'>
      <Header />
      <Hero />
      <About />
      <Advantages />
      <Gallery />
      <Services />
      <Specialists />
      <Reviews />
      <Licenses />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
