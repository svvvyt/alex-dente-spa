import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Calendar as CalendarIcon,
  Clock,
  Phone,
  User,
  Loader2,
  CheckCircle,
} from 'lucide-react';

import {
  cn,
  formatAppointmentMessage,
  sendToTelegram,
  isWeekend,
  getAvailableTimeSlots,
} from '@/lib/utils';
import {
  AppointmentFormData,
  appointmentSchema,
} from '@/lib/appointment-schema';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AppointmentModal = ({ isOpen, onClose }: AppointmentModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      name: '',
      phone: '',
      date: new Date(),
      time: '',
      service: '',
    },
  });

  const selectedDate = watch('date');
  const availableTimeSlots = getAvailableTimeSlots(selectedDate);

  const onSubmit = async (formData: AppointmentFormData) => {
    setIsSubmitting(true);

    try {
      const message = formatAppointmentMessage(formData);
      await sendToTelegram(message);

      setIsSuccess(true);
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
      }, 2000);
    } catch (error) {
      console.error('Ошибка отправки:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle className='flex items-center space-x-2'>
            <CalendarIcon className='w-5 h-5 text-primary' />
            <span>Записаться на прием</span>
          </DialogTitle>
        </DialogHeader>

        {isSuccess ? (
          <div className='text-center py-4'>
            <CheckCircle className='w-12 h-12 text-green-500 mx-auto mb-2' />
            <p className='font-medium'>Заявка успешно отправлена!</p>
            <p className='text-sm text-muted-foreground'>
              Мы свяжемся с вами в ближайшее время
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='name' className='flex items-center space-x-2'>
                <User className='w-4 h-4' />
                <span>Ваше имя *</span>
              </Label>
              <Controller
                name='name'
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder='Введите ваше имя'
                    disabled={isSubmitting}
                  />
                )}
              />
              {errors.name && (
                <p className='text-red-500 text-sm'>{errors.name.message}</p>
              )}
            </div>

            <div className='space-y-2'>
              <Label htmlFor='phone' className='flex items-center space-x-2'>
                <Phone className='w-4 h-4' />
                <span>Телефон *</span>
              </Label>
              <Controller
                name='phone'
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type='tel'
                    placeholder='+7 (___) ___-__-__'
                    disabled={isSubmitting}
                  />
                )}
              />
              {errors.phone && (
                <p className='text-red-500 text-sm'>{errors.phone.message}</p>
              )}
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='space-y-2'>
                <Label htmlFor='date'>Дата приема *</Label>
                <Controller
                  name='date'
                  control={control}
                  render={({ field }) => (
                    <Popover
                      open={isCalendarOpen}
                      onOpenChange={setIsCalendarOpen}
                    >
                      <PopoverTrigger asChild>
                        <Button
                          variant='outline'
                          className={cn(
                            'w-full justify-start text-left font-normal',
                            !field.value && 'text-muted-foreground'
                          )}
                          disabled={isSubmitting}
                        >
                          <CalendarIcon className='mr-2 h-4 w-4' />
                          {field.value ? (
                            format(field.value, 'PPP', { locale: ru })
                          ) : (
                            <span>Выберите дату</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className='w-auto p-0' align='start'>
                        <Calendar
                          mode='single'
                          selected={field.value}
                          onSelect={(date) => {
                            field.onChange(date);
                            setIsCalendarOpen(false);
                          }}
                          disabled={(date) =>
                            date < new Date(new Date().setHours(0, 0, 0, 0)) ||
                            isWeekend(date)
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  )}
                />
                {errors.date && (
                  <p className='text-red-500 text-sm'>{errors.date.message}</p>
                )}
              </div>

              <div className='space-y-2'>
                <Label htmlFor='time'>Время приема *</Label>
                <Controller
                  name='time'
                  control={control}
                  render={({ field }) => (
                    <Select
                      value={field.value}
                      onValueChange={field.onChange}
                      disabled={
                        !watch('date') ||
                        isSubmitting ||
                        isWeekend(selectedDate)
                      }
                    >
                      <SelectTrigger className='h-9'>
                        {' '}
                        {/* Уменьшаем высоту триггера */}
                        <SelectValue
                          placeholder={
                            isWeekend(selectedDate)
                              ? 'Выходной день'
                              : 'Выберите время'
                          }
                        />
                      </SelectTrigger>
                      <SelectContent className='max-h-60'>
                        {' '}
                        {/* Ограничиваем максимальную высоту */}
                        <SelectGroup>
                          {availableTimeSlots.map((time) => (
                            <SelectItem
                              key={time}
                              value={time}
                              className='h-8 text-sm' // Уменьшаем высоту и размер шрифта
                            >
                              <div className='flex items-center space-x-2'>
                                <Clock className='h-3 w-3' />{' '}
                                {/* Уменьшаем размер иконки */}
                                <span>{time}</span>
                              </div>
                            </SelectItem>
                          ))}
                          {availableTimeSlots.length === 0 && (
                            <SelectLabel className='text-sm py-1'>
                              Клиника не работает в этот день
                            </SelectLabel>
                          )}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.time && (
                  <p className='text-red-500 text-sm'>{errors.time.message}</p>
                )}
              </div>
            </div>

            <div className='space-y-2'>
              <Label htmlFor='service'>Интересующая услуга</Label>
              <Controller
                name='service'
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder='Например: лечение кариеса, чистка зубов'
                    disabled={isSubmitting}
                  />
                )}
              />
            </div>

            <div className='flex space-x-3 pt-4'>
              <Button
                type='submit'
                className='flex-1 bg-blue-600 hover:bg-blue-700 text-white'
                disabled={isSubmitting || isWeekend(selectedDate)}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className='w-4 h-4 mr-2 animate-spin' />
                    Отправка...
                  </>
                ) : (
                  <>
                    <CalendarIcon className='w-4 h-4 mr-2' />
                    Записаться
                  </>
                )}
              </Button>
              <Button
                type='button'
                variant='outline'
                onClick={onClose}
                disabled={isSubmitting}
              >
                Отмена
              </Button>
            </div>

            <p className='text-xs text-muted-foreground text-center'>
              * Обязательные поля. Мы свяжемся с вами в течение рабочего дня.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentModal;
