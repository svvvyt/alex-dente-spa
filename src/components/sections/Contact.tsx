import React from 'react';
import { MapPin, Phone, Clock, Mail, Building } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { YMapsWidget } from '../utils/YMapsWidget';

import { IMapObject } from '@/types/index';

import { ADDRESS, FORMATTED_PHONE, EMAIL } from '@/lib/constants/contacts';
import { INN, KPP, OGRN } from '@/lib/constants/account_details';

const mapObject: IMapObject = {
  iframeSrc:
    'https://yandex.ru/map-widget/v1/?ll=46.143132%2C51.477519&mode=search&oid=36952174955&ol=biz&z=16.64',
  width: '900px',
  height: '625px',
};

const Contact = () => {
  return (
    <section id='contact' className='py-20 dental-gradient-light'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-dental-dark mb-4'>
            Контакты и расположение
          </h2>
          <div className='w-20 h-1 dental-gradient rounded mx-auto mb-6' />
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Найдите нас на карте и свяжитесь с нами удобным способом
          </p>
        </div>

        <div className='grid lg:grid-cols-3 gap-8'>
          {/* Карта */}
          <div className='lg:col-span-2'>
            <Card className='h-full overflow-hidden shadow-xl border-0'>
              <div className='w-full h-full bg-dental-light-blue flex items-center justify-center'>
                <YMapsWidget
                  iframeSrc={mapObject.iframeSrc}
                  width={mapObject.width}
                  height={mapObject.height}
                />
              </div>
            </Card>
          </div>

          {/* Контактная информация */}
          <div className='space-y-6'>
            {/* Адрес и время работы */}
            <Card className='bg-background/80 backdrop-blur-sm border-0 shadow-lg'>
              <CardHeader>
                <CardTitle className='flex items-center space-x-2 text-dental-dark'>
                  <MapPin className='w-5 h-5 text-primary' />
                  <span>Адрес и время работы</span>
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='space-y-2'>
                  <p className='font-medium text-dental-dark'>{ADDRESS}</p>
                </div>

                <div className='flex items-start space-x-2'>
                  <Clock className='w-4 h-4 text-primary mt-1 flex-shrink-0' />
                  <div className='text-sm'>
                    <p className='text-dental-dark font-medium'>
                      Режим работы:
                    </p>
                    <p className='text-muted-foreground'>
                      Пн-пт: 08:00 - 20:00
                    </p>
                    <p className='text-muted-foreground'>Сб: 08:00 - 14:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Контакты */}
            <Card className='bg-background/80 backdrop-blur-sm border-0 shadow-lg'>
              <CardHeader>
                <CardTitle className='flex items-center space-x-2 text-dental-dark'>
                  <Phone className='w-5 h-5 text-primary' />
                  <span>Свяжитесь с нами</span>
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='space-y-3'>
                  <div className='flex items-center space-x-3'>
                    <Phone className='w-4 h-4 text-primary' />
                    <div>
                      <p className='font-medium text-dental-dark'>
                        {FORMATTED_PHONE}
                      </p>
                      <p className='text-xs text-muted-foreground'>
                        Запись на прием
                      </p>
                    </div>
                  </div>

                  <div className='flex items-center space-x-3'>
                    <Mail className='w-4 h-4 text-primary' />
                    <div>
                      <p className='font-medium text-dental-dark'>{EMAIL}</p>
                      <p className='text-xs text-muted-foreground'>
                        Задайте нам вопрос!
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Реквизиты */}
            <Card className='bg-background/80 backdrop-blur-sm border-0 shadow-lg'>
              <CardHeader>
                <CardTitle className='flex items-center space-x-2 text-dental-dark'>
                  <Building className='w-5 h-5 text-primary' />
                  <span>Реквизиты</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='text-sm space-y-2'>
                  <p>ИНН: {INN}</p>
                  <p>КПП: {KPP}</p>
                  <p>ОГРН: {OGRN}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
