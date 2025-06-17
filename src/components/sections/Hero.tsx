import React, { useState } from 'react';
import { MapPin, Calendar } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import AppointmentModal from '../modals/AppointmentModal';

import { ADDRESS } from '@/lib/constants/contacts';

const Hero = () => {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  return (
    <>
      <section className='py-20 dental-gradient-light'>
        <div className='container mx-auto px-4'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            {/* Левая часть - текст */}
            <div className='space-y-6'>
              <h2 className='text-4xl md:text-5xl font-bold text-dental-dark leading-tight'>
                Здоровая улыбка -
                <span className='text-primary block'>наша забота</span>
              </h2>

              <p className='text-lg text-muted-foreground leading-relaxed'>
                Современная стоматологическая клиника в Энгельсе.
                Профессиональное лечение, качественные материалы и
                индивидуальный подход к каждому пациенту.
              </p>

              <div className='flex items-center space-x-2 text-dental-dark'>
                <MapPin className='w-5 h-5 text-primary' />
                <span className='font-medium'>{ADDRESS}</span>
              </div>

              <div className='flex flex-col sm:flex-row gap-4'>
                <Button
                  size='lg'
                  className='dental-gradient hover:opacity-90 transition-opacity'
                  onClick={() => setIsAppointmentModalOpen(true)}
                >
                  <Calendar className='w-5 h-5 mr-2' />
                  Записаться на прием
                </Button>
              </div>
            </div>

            {/* Правая часть - изображение */}
            <div className='relative'>
              <Card className='overflow-hidden shadow-xl'>
                <img
                  src='https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                  alt='Стоматологическая клиника Алекс Денте'
                  className='w-full h-96 object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-dental-dark/20 to-transparent' />
              </Card>

              {/* Декоративные элементы */}
              <div className='absolute -top-4 -right-4 w-24 h-24 dental-gradient rounded-full opacity-20' />
              <div className='absolute -bottom-4 -left-4 w-32 h-32 bg-dental-light-teal rounded-full opacity-30' />
            </div>
          </div>
        </div>
      </section>

      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
      />
    </>
  );
};

export default Hero;
