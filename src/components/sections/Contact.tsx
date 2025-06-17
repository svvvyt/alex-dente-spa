import { MapPin, Phone, Clock, Mail, Building } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { YMapsWidget } from '../utils/YMapsWidget';

import {
  ADDRESS,
  FORMATTED_PHONE,
  EMAIL,
  MAP_OBJECT,
} from '@/lib/constants/contacts';
import { INN, KPP, OGRN } from '@/lib/constants/account_details';

const Contact = () => {
  return (
    <section id='contact' className='py-12 md:py-20 dental-gradient-light'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-8 md:mb-12'>
          <h2 className='text-2xl md:text-4xl font-bold text-dental-dark mb-4'>
            Контакты и расположение
          </h2>
          <div className='w-20 h-1 dental-gradient rounded mx-auto mb-4 md:mb-6' />
          <p className='text-base md:text-lg text-muted-foreground max-w-2xl mx-auto'>
            Найдите нас на карте и свяжитесь с нами удобным способом
          </p>
        </div>

        <div className='grid lg:grid-cols-3 gap-6 md:gap-8'>
          {/* Карта */}
          <div className='lg:col-span-2'>
            <Card className='h-full overflow-hidden shadow-lg md:shadow-xl border-0'>
              <div className='w-full h-full bg-dental-light-blue flex items-center justify-center p-0'>
                <YMapsWidget
                  iframeSrc={MAP_OBJECT.iframeSrc}
                  width='100%'
                  height='725px'
                  className='sm:h-[400px] md:h-[500px] lg:h-full'
                />
              </div>
            </Card>
          </div>

          {/* Контактная информация */}
          <div className='space-y-4 md:space-y-6'>
            {/* Адрес и время работы */}
            <Card className='bg-background/80 backdrop-blur-sm border-0 shadow-md md:shadow-lg'>
              <CardHeader className='p-4 md:p-6'>
                <CardTitle className='flex items-center space-x-2 text-dental-dark text-lg md:text-xl'>
                  <MapPin className='w-5 h-5 text-primary' />
                  <span>Адрес и время работы</span>
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-3 md:space-y-4 p-4 md:p-6'>
                <div className='space-y-2'>
                  <p className='font-medium text-dental-dark text-sm md:text-base'>
                    {ADDRESS}
                  </p>
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
            <Card className='bg-background/80 backdrop-blur-sm border-0 shadow-md md:shadow-lg'>
              <CardHeader className='p-4 md:p-6'>
                <CardTitle className='flex items-center space-x-2 text-dental-dark text-lg md:text-xl'>
                  <Phone className='w-5 h-5 text-primary' />
                  <span>Свяжитесь с нами</span>
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-3 md:space-y-4 p-4 md:p-6'>
                <div className='space-y-3'>
                  <div className='flex items-center space-x-3'>
                    <Phone className='w-4 h-4 text-primary' />
                    <div>
                      <p className='font-medium text-dental-dark text-sm md:text-base'>
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
                      <p className='font-medium text-dental-dark text-sm md:text-base'>
                        {EMAIL}
                      </p>
                      <p className='text-xs text-muted-foreground'>
                        Задайте нам вопрос!
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Реквизиты */}
            <Card className='bg-background/80 backdrop-blur-sm border-0 shadow-md md:shadow-lg'>
              <CardHeader className='p-4 md:p-6'>
                <CardTitle className='flex items-center space-x-2 text-dental-dark text-lg md:text-xl'>
                  <Building className='w-5 h-5 text-primary' />
                  <span>Реквизиты</span>
                </CardTitle>
              </CardHeader>
              <CardContent className='p-4 md:p-6'>
                <div className='text-xs md:text-sm space-y-1 md:space-y-2'>
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
