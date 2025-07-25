import * as z from 'zod';

export const appointmentSchema = z.object({
  name: z.string().min(2, 'Введите ваше имя (не менее 2 символов)'),
  phone: z
    .string()
    .min(7, 'Введите ваш номер телефона (без доп. символов)')
    .regex(
      /^\+?\d{7,15}$/,
      'Введите корректный номер телефона (7–15 цифр, без доп. символов)'
    ),
  date: z.date({ required_error: 'Выберите дату' }),
  time: z.string().min(1, 'Выберите время'),
  service: z.string().optional(),
});

export type AppointmentFormData = z.infer<typeof appointmentSchema>;
