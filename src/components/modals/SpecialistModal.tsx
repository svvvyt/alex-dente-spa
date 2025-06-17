import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { GraduationCap } from 'lucide-react';
import { Specialist } from '@/types/index';

interface SpecialistModalProps {
  isOpen: boolean;
  onClose: () => void;
  specialist: Specialist | null;
}

const SpecialistModal = ({
  isOpen,
  onClose,
  specialist,
}: SpecialistModalProps) => {
  if (!specialist) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='sm:max-w-lg'>
        <DialogHeader>
          <DialogTitle className='flex items-center space-x-2'>
            <GraduationCap className='w-5 h-5 text-primary' />
            <span>О специалисте</span>
          </DialogTitle>
        </DialogHeader>

        <div className='space-y-4'>
          <div className='flex items-start space-x-4'>
            <img
              src={specialist.image}
              alt={specialist.name}
              className='w-20 h-20 rounded-full object-cover'
            />
            <div className='flex-1'>
              <h3 className='text-lg font-semibold text-dental-dark'>
                {specialist.name}
              </h3>
              <p className='text-primary font-medium text-sm'>
                {specialist.position}
              </p>
              <p className='text-muted-foreground text-sm'>
                {specialist.experience}
              </p>
            </div>
          </div>

          <div className='space-y-3'>
            <div>
              <h4 className='font-medium text-dental-dark mb-2'>
                Специализации:
              </h4>
              <div className='flex flex-wrap gap-2'>
                {specialist.specializations.map((spec, index) => (
                  <Badge
                    key={index}
                    variant='secondary'
                    className='bg-dental-light-blue text-primary'
                  >
                    {spec}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className='font-medium text-dental-dark mb-2'>О враче:</h4>
              <p className='text-sm text-muted-foreground leading-relaxed'>
                {specialist.full_description.map((desc, descIndex) => (
                  <p key={descIndex}>{desc}</p>
                ))}
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SpecialistModal;
