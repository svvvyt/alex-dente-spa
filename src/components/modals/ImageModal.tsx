import React from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: Array<{ url: string; title: string }>;
  currentIndex: number;
  onPrevious: () => void;
  onNext: () => void;
}

const ImageModal = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onPrevious,
  onNext,
}: ImageModalProps) => {
  const currentImage = images[currentIndex];

  if (!currentImage) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='max-w-7xl max-h-[96vh] p-0 bg-black/95 border-none'>
        <div className='relative w-full h-full flex items-center justify-center'>
          {/* Изображение */}
          <div className='relative max-w-full max-h-full'>
            <img
              src={currentImage.url}
              alt={currentImage.title}
              className='max-w-full max-h-[90vh] object-contain'
            />

            {/* Название изображения */}
            <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6'>
              <h3 className='text-white text-xl font-semibold text-center'>
                {currentImage.title}
              </h3>
            </div>
          </div>

          {/* Навигационные кнопки */}
          {images.length > 1 && (
            <>
              <Button
                variant='outline'
                size='icon'
                className='absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background'
                onClick={onPrevious}
              >
                <ChevronLeft className='w-8 h-8' />
              </Button>

              <Button
                variant='outline'
                size='icon'
                className='absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background'
                onClick={onNext}
              >
                <ChevronRight className='w-8 h-8' />
              </Button>
            </>
          )}

          {/* Индикатор текущего изображения */}
          {images.length > 1 && (
            <div className='absolute bottom-16 left-1/2 -translate-x-1/2 bg-black/50 px-3 py-1 rounded-full'>
              <span className='text-white text-sm'>
                {currentIndex + 1} / {images.length}
              </span>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;
