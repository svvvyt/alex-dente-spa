import { Phone, PhoneCall, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { handleScrollTo } from '@/lib/utils';
import {
  TEL_URL,
  FORMATTED_PHONE,
  WHATSAPP_URL,
} from '@/lib/constants/contacts';

const Header = () => {
  return (
    <header className='bg-background/95 backdrop-blur-sm border-b border-dental-gray sticky top-0 z-50'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between py-4'>
          {/* Логотип */}
          <div className='flex items-center space-x-2'>
            <div className='w-10 h-10 dental-gradient rounded-lg flex items-center justify-center'>
              <span className='text-white font-bold text-lg'>AD</span>
            </div>
            <div>
              <h1 className='text-xl font-bold text-dental-dark'>
                Алекс Денте
              </h1>
              <p className='text-sm text-muted-foreground'>
                Стоматологическая клиника
              </p>
            </div>
          </div>

          {/* Навигация - скрыта на мобильных */}
          <nav className='hidden lg:flex items-center space-x-8'>
            <a
              href='#about'
              onClick={(e) => handleScrollTo(e, 'about')}
              className='text-foreground hover:text-primary transition-colors'
            >
              О нас
            </a>
            <a
              href='#advantages'
              onClick={(e) => handleScrollTo(e, 'advantages')}
              className='text-foreground hover:text-primary transition-colors'
            >
              Преимущества
            </a>
            <a
              href='#services'
              onClick={(e) => handleScrollTo(e, 'services')}
              className='text-foreground hover:text-primary transition-colors'
            >
              Услуги
            </a>
            <a
              href='#specialists'
              onClick={(e) => handleScrollTo(e, 'specialists')}
              className='text-foreground hover:text-primary transition-colors'
            >
              Специалисты
            </a>
            <a
              href='#reviews'
              onClick={(e) => handleScrollTo(e, 'reviews')}
              className='text-foreground hover:text-primary transition-colors'
            >
              Отзывы
            </a>
            <a
              href='#contact'
              onClick={(e) => handleScrollTo(e, 'contact')}
              className='text-foreground hover:text-primary transition-colors'
            >
              Контакты
            </a>
          </nav>

          {/* Контакты и мессенджеры */}
          <div className='flex items-center space-x-4'>
            <div className='hidden md:block text-right'>
              <div className='flex items-center space-x-2 text-dental-dark font-semibold'>
                <PhoneCall className='w-4 h-4' />
                <a
                  href={TEL_URL}
                  className='hover:text-primary transition-colors'
                >
                  {FORMATTED_PHONE}
                </a>
              </div>
              <div className='flex items-center space-x-2 text-sm text-muted-foreground'>
                <Clock className='w-4 h-4' />
                <span>Пн-пт: 08:00-20:00, Сб: 08:00-14:00</span>
              </div>
            </div>

            {/* Мессенджеры */}
            <div className='flex items-center flex-col space-y-1'>
              <Button asChild variant='outline' size='sm' className='p-2'>
                <a
                  href={WHATSAPP_URL}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Phone className='w-4 h-4 text-green-600' />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
