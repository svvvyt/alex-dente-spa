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
    <section id='reviews' className='py-20 dental-gradient-light'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-dental-dark mb-4'>
            Отзывы пациентов
          </h2>
          <div className='w-20 h-1 dental-gradient rounded mx-auto mb-6' />
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Что говорят наши пациенты о качестве лечения и сервиса
          </p>
        </div>

        <div className='relative max-w-4xl mx-auto'>
          <Card className='bg-background/80 backdrop-blur-sm border-0 shadow-xl'>
            <CardContent className='p-8 md:p-12'>
              <div className='text-center'>
                {/* Рейтинг */}
                <div className='flex justify-center space-x-1 mb-6'>
                  {[...Array(REVIEWS[currentReview].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className='w-6 h-6 fill-yellow-400 text-yellow-400'
                    />
                  ))}
                </div>

                {/* Текст отзыва */}
                <blockquote className='text-lg md:text-xl text-dental-dark leading-relaxed mb-8 italic'>
                  "{REVIEWS[currentReview].text}"
                </blockquote>

                {/* Автор и дата */}
                <div className='space-y-2'>
                  <p className='font-semibold text-dental-dark text-lg'>
                    {REVIEWS[currentReview].name}
                  </p>
                  <p className='text-muted-foreground text-sm'>
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
            className='absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background'
            onClick={prevReview}
          >
            <ChevronLeft className='w-6 h-6' />
          </Button>

          <Button
            variant='outline'
            size='icon'
            className='absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background'
            onClick={nextReview}
          >
            <ChevronRight className='w-6 h-6' />
          </Button>

          {/* Индикаторы */}
          <div className='flex justify-center space-x-2 mt-8'>
            {REVIEWS.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
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
