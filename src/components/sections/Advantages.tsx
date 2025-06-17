import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ADVANTAGES } from '@/lib/constants/advantages';

const Advantages = () => {
  return (
    <section id='advantages' className='py-20 dental-gradient-light'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-dental-dark mb-4'>
            Наши преимущества
          </h2>
          <div className='w-20 h-1 dental-gradient rounded mx-auto mb-6' />
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Почему пациенты выбирают именно нашу клиники для лечения и
            профилактики
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {ADVANTAGES.map((advantage, index) => (
            <Card
              key={index}
              className='group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-0 bg-background/80 backdrop-blur-sm'
            >
              <CardContent className='p-6 text-center'>
                <div className='mb-4'>
                  <div className='w-16 h-16 rounded-full bg-dental-light-blue mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                    <advantage.icon className={`w-8 h-8 ${advantage.color}`} />
                  </div>
                </div>

                <h3 className='text-lg font-semibold text-dental-dark mb-3'>
                  {advantage.title}
                </h3>

                <p className='text-muted-foreground text-sm leading-relaxed'>
                  {advantage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
