import React, { useState } from 'react';
import { Card } from '@/components/ui/card';

import { Shield } from 'lucide-react';
import LicenseModal from '../modals/LicenseModal';

import { LICENSES } from '@/lib/constants/licenses';

const Licenses = () => {
  const [selectedLicense, setSelectedLicense] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLicenseClick = (license: any) => {
    setSelectedLicense(license);
    setIsModalOpen(true);
  };

  return (
    <>
      <section className='py-20 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <div className='flex items-center justify-center space-x-2 mb-4'>
              <Shield className='w-8 h-8 text-primary' />
              <h2 className='text-3xl md:text-4xl font-bold text-dental-dark'>
                Лицензии и сертификаты
              </h2>
            </div>
            <div className='w-20 h-1 dental-gradient rounded mx-auto mb-6' />
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              Наша клиника имеет все необходимые разрешения Министерства
              здравоохранения Саратовской области
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-6 max-w-4xl mx-auto'>
            {LICENSES.map((license, index) => (
              <Card
                key={index}
                className='group hover:shadow-xl transition-all duration-300 border-dental-gray overflow-hidden cursor-pointer'
                onClick={() => handleLicenseClick(license)}
              >
                <div className='relative'>
                  <img
                    src={license.image}
                    alt={license.title}
                    className='w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-dental-dark/60 to-transparent' />

                  {/* Информация о лицензии */}
                  <div className='absolute bottom-0 left-0 right-0 p-4 text-white'>
                    <h3 className='font-semibold text-sm mb-1'>
                      {license.title}
                    </h3>
                    <p className='text-xs opacity-90'>{license.number}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className='text-center mt-8'>
            <p className='text-sm text-muted-foreground max-w-2xl mx-auto'>
              Все документы проверены и соответствуют требованиям
              законодательства РФ. Копии лицензий и сертификатов доступны для
              ознакомления в клинике.
            </p>
          </div>
        </div>
      </section>

      <LicenseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        license={selectedLicense}
      />
    </>
  );
};

export default Licenses;
