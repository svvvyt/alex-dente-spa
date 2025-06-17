import { Stethoscope, Scissors, Sparkles, Wrench, Zap } from 'lucide-react';

export const SERVICES = [
  {
    icon: Stethoscope,
    title: 'Терапевтическая стоматология',
    items: [
      { name: 'Лечение кариеса', price: 'от 2 500 ₽' },
      { name: 'Лечение пульпита', price: 'от 4 500 ₽' },
      { name: 'Пломбирование каналов', price: 'от 3 200 ₽' },
      { name: 'Реставрация зубов', price: 'от 5 000 ₽' },
    ],
  },
  {
    icon: Scissors,
    title: 'Хирургическая стоматология',
    items: [
      { name: 'Удаление зуба', price: 'от 1 800 ₽' },
      { name: 'Удаление зуба мудрости', price: 'от 4 500 ₽' },
      { name: 'Резекция верхушки корня', price: 'от 6 500 ₽' },
      { name: 'Пластика уздечки', price: 'от 3 500 ₽' },
    ],
  },
  {
    icon: Wrench,
    title: 'Ортопедическая стоматология',
    items: [
      { name: 'Коронка металлокерамическая', price: 'от 8 500 ₽' },
      { name: 'Коронка циркониевая', price: 'от 15 000 ₽' },
      { name: 'Виниры', price: 'от 18 000 ₽' },
      { name: 'Съемный протез', price: 'от 25 000 ₽' },
    ],
  },
  {
    icon: Sparkles,
    title: 'Профессиональная чистка',
    items: [
      { name: 'Ультразвуковая чистка', price: 'от 2 200 ₽' },
      { name: 'Air Flow', price: 'от 2 800 ₽' },
      { name: 'Полировка зубов', price: 'от 1 500 ₽' },
      { name: 'Фторирование', price: 'от 1 200 ₽' },
    ],
  },
  {
    icon: Zap,
    title: 'Имплантология',
    items: [
      { name: 'Имплант премиум класса', price: 'от 35 000 ₽' },
      { name: 'Имплант эконом класса', price: 'от 25 000 ₽' },
      { name: 'Синус-лифтинг', price: 'от 15 000 ₽' },
      { name: 'Костная пластика', price: 'от 12 000 ₽' },
    ],
  },
];
