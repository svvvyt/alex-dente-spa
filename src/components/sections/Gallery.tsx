import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import ImageModal from '../modals/ImageModal';
import { GALLERY_IMAGES } from '@/lib/constants/gallery_images';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = (direction: 'prev' | 'next') => {
    setCurrentIndex((prev) =>
      direction === 'next'
        ? (prev + 1) % GALLERY_IMAGES.length
        : (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
    );
  };

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  return (
    <>
      <section className='py-20 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='relative max-w-4xl mx-auto'>
            <Card className='overflow-hidden shadow-xl'>
              <div className='relative h-96 md:h-[500px] group cursor-pointer'>
                <img
                  src={GALLERY_IMAGES[currentIndex].url}
                  alt={GALLERY_IMAGES[currentIndex].title}
                  className='w-full h-full object-cover transition-opacity duration-500'
                  onClick={() => openModal(currentIndex)}
                />

                {/* Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-dental-dark/80 via-transparent to-transparent'>
                  <div className='absolute bottom-0 left-0 right-0 p-6'>
                    <div className='flex items-center justify-between'>
                      <h3 className='text-white text-xl font-semibold'>
                        {GALLERY_IMAGES[currentIndex].title}
                      </h3>
                      <Button
                        variant='secondary'
                        size='sm'
                        className='bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
                        onClick={(e) => {
                          e.stopPropagation();
                          openModal(currentIndex);
                        }}
                      >
                        <Maximize className='w-4 h-4 mr-2' />
                        Увеличить
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Навигационные кнопки */}
            <Button
              variant='outline'
              size='icon'
              className='absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background'
              onClick={() => navigate('prev')}
            >
              <ChevronLeft className='w-6 h-6' />
            </Button>

            <Button
              variant='outline'
              size='icon'
              className='absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background'
              onClick={() => navigate('next')}
            >
              <ChevronRight className='w-6 h-6' />
            </Button>

            {/* Индикаторы */}
            <div className='flex justify-center space-x-2 mt-6'>
              {GALLERY_IMAGES.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-dental-gray'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={GALLERY_IMAGES}
        currentIndex={currentIndex}
        onPrevious={() => navigate('prev')}
        onNext={() => navigate('next')}
      />
    </>
  );
};

export default Gallery;
