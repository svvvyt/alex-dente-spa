import MainLayout from '@/layout/MainLayout';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Advantages from '@/components/sections/Advantages';
import Gallery from '@/components/sections/Gallery';
import Services from '@/components/sections/Services';
import Specialists from '@/components/sections/Specialists';
import Reviews from '@/components/sections/Reviews';
import Licenses from '@/components/sections/Licenses';
import Contact from '@/components/sections/Contact';

const Index = () => {
  return (
    <div className='min-h-screen'>
      <MainLayout>
        <Hero />
        <About />
        <Advantages />
        <Gallery />
        <Services />
        <Specialists />
        <Reviews />
        <Licenses />
        <Contact />
      </MainLayout>
    </div>
  );
};

export default Index;
