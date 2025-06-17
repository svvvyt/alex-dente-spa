import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import AppointmentModal from '../modals/AppointmentModal';
import { SERVICES } from '@/lib/constants/services';

const Services = () => {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  return (
    <>
      <section id='services' className='py-20 dental-gradient-light'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-dental-dark mb-4'>
              Услуги и цены
            </h2>
            <div className='w-20 h-1 dental-gradient rounded mx-auto mb-6' />
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              Полный спектр стоматологических услуг с фиксированными ценами
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
            {SERVICES.map((service, index) => (
              <Card
                key={index}
                className='bg-background/80 backdrop-blur-sm border-0 hover:shadow-lg transition-shadow'
              >
                <CardHeader className='pb-4'>
                  <div className='flex items-center space-x-3'>
                    <div className='w-12 h-12 rounded-lg dental-gradient flex items-center justify-center'>
                      <service.icon className='w-6 h-6 text-white' />
                    </div>
                    <CardTitle className='text-lg text-dental-dark'>
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className='space-y-3'>
                  {service.items.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <div className='flex justify-between items-center'>
                        <span className='text-sm text-muted-foreground'>
                          {item.name}
                        </span>
                        <span className='font-semibold text-dental-dark'>
                          {item.price}
                        </span>
                      </div>
                      {itemIndex < service.items.length - 1 && (
                        <Separator className='my-2' />
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Кнопка записи */}
          <div className='text-center'>
            <Card className='max-w-md mx-auto bg-background/80 backdrop-blur-sm border-0'>
              <CardContent className='p-6'>
                <h3 className='text-xl font-semibold text-dental-dark mb-3'>
                  Запишитесь на консультацию
                </h3>
                <p className='text-muted-foreground mb-4'>
                  Получите персональный план лечения и точную стоимость
                </p>
                <Button
                  size='lg'
                  className='w-full dental-gradient hover:opacity-90'
                  onClick={() => setIsAppointmentModalOpen(true)}
                >
                  <Calendar className='w-5 h-5 mr-2' />
                  Записаться на консультацию
                </Button>
              </CardContent>
            </Card>
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

export default Services;
