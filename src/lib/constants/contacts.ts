import { IMapObject } from '@/types/index';

// address
export const POSTAL_CODE = 413121;
export const ADDRESS =
  'г. Энгельс, ул. 148 Черниговской дивизии, д. 25, помещение 8';

// working time slots
export const SATURDAY_SLOTS = [
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
];

export const WEEKDAY_SLOTS = [
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
];

// contacts
export const CONTACT_PHONE = '79020428193';
export const FORMATTED_PHONE = '+7 (902) 042-81-93';

export const EMAIL = 'aleks.denta2020@mail.ru';

// tel url
export const TEL_URL = `tel:+${CONTACT_PHONE}`;

// mailto url
export const MAILTO_URL = `mailto:${EMAIL}`;

// messengers
export const WHATSAPP_URL = `https://wa.me/${CONTACT_PHONE}`;

// map object
export const MAP_OBJECT: IMapObject = {
  iframeSrc:
    'https://yandex.ru/map-widget/v1/?ll=46.143132%2C51.477519&mode=search&oid=36952174955&ol=biz&z=16.64',
  width: '900px',
  height: '625px',
};
