import { ReactNode } from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow'>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
