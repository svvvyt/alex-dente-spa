import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

import { TELEGRAM_BOT_TOKEN, CHAT_ID } from './constants/telegram_bot';
import { WEEKDAY_SLOTS, SATURDAY_SLOTS } from './constants/contacts';

export const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatAppointmentMessage = (data: {
  name: string;
  phone: string;
  date: Date;
  time: string;
  service?: string;
}) => {
  const formattedDate = format(data.date, 'PPPP', { locale: ru });

  return (
    `Новая заявка на прием в клинику "Алекс Денте"!\n\n` +
    `Имя: ${data.name}\n` +
    `Контактный телефон: ${data.phone}\n` +
    `Желаемая дата: ${formattedDate}\n` +
    `Желаемое время: ${data.time}\n` +
    `Интересующая услуга: ${data.service || 'не указана'}\n\n`
  );
};

export const sendToTelegram = async (message: string) => {
  try {
    await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
        }),
      }
    );
  } catch (error) {
    console.error('Ошибка отправки в Telegram:', error);
  }
};

export const isWeekend = (date: Date) => {
  return date.getDay() === 0;
};

export const isSaturday = (date: Date) => {
  return date.getDay() === 6;
};

export const getAvailableTimeSlots = (date: Date) => {
  if (isWeekend(date)) {
    return [];
  }

  if (isSaturday(date)) {
    return SATURDAY_SLOTS;
  }

  return WEEKDAY_SLOTS;
};
