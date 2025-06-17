import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { STATS } from '@/lib/constants/stats';

const About = () => {
  return (
    <section id='about' className='py-20 bg-background'>
      <div className='container mx-auto px-4'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Левая часть - текст */}
          <div className='space-y-6'>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold text-dental-dark mb-4'>
                О нашей клинике
              </h2>
              <div className='w-20 h-1 dental-gradient rounded' />
            </div>

            <div className='space-y-4 text-muted-foreground leading-relaxed'>
              <p>
                Стоматологическая клиника «Алекс Денте» — это современный
                медицинский центр, где каждый пациент получает индивидуальный
                подход и качественное лечение.
              </p>

              <p>
                Мы используем только проверенные материалы и новейшее
                оборудование, что позволяет нам гарантировать высокое качество
                наших услуг и долговечность результата.
              </p>

              <p>
                Наша команда состоит из опытных специалистов, которые регулярно
                повышают свою квалификацию и следят за последними тенденциями в
                стоматологии.
              </p>
            </div>

            <div className='grid grid-cols-2 gap-4'>
              {STATS.map((stat, index) => (
                <Card
                  key={index}
                  className='border-dental-gray hover:shadow-md transition-shadow'
                >
                  <CardContent className='p-4 text-center'>
                    <stat.icon className='w-8 h-8 text-primary mx-auto mb-2' />
                    <div className='text-2xl font-bold text-dental-dark'>
                      {stat.value}
                    </div>
                    <div className='text-sm text-muted-foreground'>
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Правая часть - изображение */}
          <div className='relative'>
            <div className='grid grid-cols-2 gap-4'>
              <img
                src='https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
                alt='Современное оборудование'
                className='w-full h-48 object-cover rounded-lg shadow-lg'
              />
              <img
                src='https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
                alt='Интерьер клиники'
                className='w-full h-48 object-cover rounded-lg shadow-lg mt-8'
              />
            </div>

            {/* Декоративный элемент */}
            <div className='absolute -bottom-4 -right-4 w-24 h-24 bg-dental-light-green rounded-full opacity-50' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
