import React, { useState } from 'react';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SpecialistModal from '../modals/SpecialistModal';

import { SPECIALISTS } from '@/lib/constants/specialists';

const Specialists = () => {
  const [selectedSpecialist, setSelectedSpecialist] = useState<any>(null);
  const [isSpecialistModalOpen, setIsSpecialistModalOpen] = useState(false);

  const handleSpecialistClick = (specialist: any) => {
    setSelectedSpecialist(specialist);
    setIsSpecialistModalOpen(true);
  };

  return (
    <>
      <section id='specialists' className='py-20 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-dental-dark mb-4'>
              Наши специалисты
            </h2>
            <div className='w-20 h-1 dental-gradient rounded mx-auto mb-6' />
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              Команда профессионалов, которые заботятся о вашем здоровье и
              красоте вашей улыбки!
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {SPECIALISTS.map((specialist, index) => (
              <Card
                key={index}
                className='group hover:shadow-xl transition-all duration-300 border-dental-gray cursor-pointer'
                onClick={() => handleSpecialistClick(specialist)}
              >
                <CardContent className='p-0'>
                  {/* Фото специалиста */}
                  <div className='relative overflow-hidden'>
                    <img
                      src={specialist.image}
                      alt={specialist.name}
                      className='w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-dental-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                  </div>

                  {/* Информация о специалисте */}
                  <div className='p-6 space-y-4'>
                    <div>
                      <h3 className='text-lg font-semibold text-dental-dark mb-1'>
                        {specialist.name}
                      </h3>
                      <p className='text-primary font-medium text-sm'>
                        {specialist.position}
                      </p>
                      <p className='text-muted-foreground text-sm'>
                        {specialist.experience}
                      </p>
                    </div>

                    <p className='text-sm text-muted-foreground leading-relaxed'>
                      {specialist.short_description}
                    </p>

                    {/* Специализации */}
                    <div className='flex flex-wrap gap-2'>
                      {specialist.specializations.map((spec, specIndex) => (
                        <Badge
                          key={specIndex}
                          variant='secondary'
                          className='text-xs bg-dental-light-blue text-primary'
                        >
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <SpecialistModal
        isOpen={isSpecialistModalOpen}
        onClose={() => setIsSpecialistModalOpen(false)}
        specialist={selectedSpecialist}
      />
    </>
  );
};

export default Specialists;
