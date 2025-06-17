import React from 'react';

interface YMapsWidgetProps {
  iframeSrc: string;
  width?: string;
  height?: string;
  className?: string;
}

export const YMapsWidget: React.FC<YMapsWidgetProps> = ({
  iframeSrc,
  width = '100%',
  height = '500px',
  className = '',
}) => {
  return (
    <div className={`w-full ${className}`}>
      <iframe
        src={iframeSrc}
        width={width}
        height={height}
        frameBorder='0'
        allowFullScreen
        className='rounded-lg'
      />
    </div>
  );
};
