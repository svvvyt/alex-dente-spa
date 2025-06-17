import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { REVIEWS } from '@/lib/constants/reviews';

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  return (
    <section id='reviews' className='py-12 md:py-20 dental-gradient-light'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-8 md:mb-12'>
          <h2 className='text-2xl md:text-4xl font-bold text-dental-dark mb-4'>
            Отзывы пациентов
          </h2>
          <div className='w-20 h-1 dental-gradient rounded mx-auto mb-4 md:mb-6' />
          <p className='text-base md:text-lg text-muted-foreground max-w-2xl mx-auto'>
            Что говорят наши пациенты о качестве лечения и сервиса
          </p>
        </div>

        <div className='relative max-w-4xl mx-auto'>
          <Card className='bg-background/80 backdrop-blur-sm border-0 shadow-lg md:shadow-xl'>
            <CardContent className='p-6 md:p-12'>
              <div className='text-center mx-4 md:mx-0'>
                {/* Рейтинг */}
                <div className='flex justify-center space-x-1 mb-4 md:mb-6'>
                  {[...Array(REVIEWS[currentReview].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className='w-5 h-5 md:w-6 md:h-6 fill-yellow-400 text-yellow-400'
                    />
                  ))}
                </div>

                {/* Текст отзыва */}
                <blockquote className='text-base md:text-xl text-dental-dark leading-relaxed mb-6 md:mb-8 italic px-2 md:px-0'>
                  "{REVIEWS[currentReview].text}"
                </blockquote>

                {/* Автор и дата */}
                <div className='space-y-2'>
                  <p className='font-semibold text-dental-dark text-base md:text-lg'>
                    {REVIEWS[currentReview].name}
                  </p>
                  <p className='text-muted-foreground text-xs md:text-sm'>
                    {REVIEWS[currentReview].date}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Навигационные кнопки */}
          <Button
            variant='outline'
            size='icon'
            className='absolute left-0 md:left-4 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/80 w-8 h-8 md:w-10 md:h-10'
            onClick={prevReview}
          >
            <ChevronLeft className='w-4 h-4 md:w-5 md:h-5' />
          </Button>

          <Button
            variant='outline'
            size='icon'
            className='absolute right-0 md:right-4 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/80 w-8 h-8 md:w-10 md:h-10'
            onClick={nextReview}
          >
            <ChevronRight className='w-4 h-4 md:w-5 md:h-5' />
          </Button>

          {/* Индикаторы */}
          <div className='flex justify-center space-x-2 mt-6 md:mt-8'>
            {REVIEWS.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
                  index === currentReview ? 'bg-primary' : 'bg-dental-gray'
                }`}
                onClick={() => setCurrentReview(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
