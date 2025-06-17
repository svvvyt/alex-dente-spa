import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Shield, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface License {
  title: string;
  number: string;
  image: string;
}

interface LicenseModalProps {
  isOpen: boolean;
  onClose: () => void;
  license: License | null;
}

const LicenseModal = ({ isOpen, onClose, license }: LicenseModalProps) => {
  if (!license) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='sm:max-w-4xl max-h-[90vh] overflow-y-auto'>
        <DialogHeader>
          <DialogTitle className='flex items-center space-x-2'>
            <Shield className='w-5 h-5 text-primary' />
            <span>{license.title}</span>
          </DialogTitle>
        </DialogHeader>

        <div className='space-y-4'>
          <div className='bg-dental-light-blue p-4 rounded-lg'>
            <p className='text-sm text-dental-dark'>
              <strong>Номер документа:</strong> {license.number}
            </p>
          </div>

          <div className='relative w-full h-[65vh] flex items-center justify-center'>
            <img
              src={license.image}
              alt={license.title}
              className='max-w-full max-h-full object-contain rounded-lg border'
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LicenseModal;
