import React from 'react';
import { Phone, PhoneCall, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  TEL_URL,
  FORMATTED_PHONE,
  EMAIL,
  MAILTO_URL,
  WHATSAPP_URL,
  ADDRESS,
} from '@/lib/constants/contacts';

const Footer = () => {
  return (
    <footer className='bg-dental-dark text-white'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid md:grid-cols-3 gap-8'>
          {/* Логотип и описание */}
          <div className='space-y-4'>
            <div className='flex items-center space-x-2'>
              <div className='w-10 h-10 dental-gradient rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-lg'>AD</span>
              </div>
              <div>
                <h3 className='text-xl font-bold'>Алекс Денте</h3>
                <p className='text-sm text-gray-300'>
                  Стоматологическая клиника
                </p>
              </div>
            </div>
            <p className='text-gray-300 text-sm leading-relaxed'>
              Современная стоматология в Энгельсе. Профессиональное лечение,
              качественные материалы и индивидуальный подход к каждому пациенту.
            </p>
          </div>

          {/* Контакты */}
          <div className='space-y-4'>
            <h4 className='text-lg font-semibold mb-4'>Контакты</h4>
            <div className='space-y-3'>
              <div className='flex items-center space-x-3 group'>
                <PhoneCall className='w-4 h-4 text-primary group-hover:text-primary/80 transition-colors' />
                <div>
                  <a
                    href={TEL_URL}
                    className='font-medium hover:text-primary transition-colors block'
                  >
                    {FORMATTED_PHONE}
                  </a>
                  <p className='text-xs text-gray-300 group-hover:text-gray-400 transition-colors'>
                    Запись на прием
                  </p>
                </div>
              </div>

              <div className='flex items-center space-x-3 group'>
                <Mail className='w-4 h-4 text-primary group-hover:text-primary/80 transition-colors' />
                <div>
                  <a
                    href={MAILTO_URL}
                    className='font-medium hover:text-primary transition-colors block'
                  >
                    {EMAIL}
                  </a>
                  <p className='text-xs text-gray-300 group-hover:text-gray-400 transition-colors'>
                    Задайте нам вопрос!
                  </p>
                </div>
              </div>

              <div className='flex items-center space-x-3'>
                <MapPin className='w-4 h-4 text-primary' />
                <div>
                  <p className='font-medium'>{ADDRESS}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Время работы и мессенджеры */}
          <div className='space-y-4'>
            <h4 className='text-lg font-semibold mb-4'>Время работы</h4>
            <div className='space-y-2 text-sm'>
              <div className='flex justify-between'>
                <span className='text-gray-300'>Понедельник - Пятница:</span>
                <span>08:00 - 20:00</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-gray-300'>Суббота:</span>
                <span>08:00 - 14:00</span>
              </div>
            </div>

            <div className='pt-4'>
              <p className='text-sm text-gray-300 mb-3'>Связаться с нами:</p>
              <div className='flex space-x-2'>
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

        <Separator className='my-8 bg-gray-600' />

        <div className='flex flex-col md:flex-row justify-center items-center text-sm text-gray-300'>
          <p>Стоматологическая клиника "Алекс Денте", 2020-2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
