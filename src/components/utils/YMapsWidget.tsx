import React from 'react';

import { IMapObject } from '@/types/index';

export const YMapsWidget: React.FC<IMapObject> = ({
  iframeSrc,
  width = '500px',
  height = '500px',
}) => {
  return (
    <div
      className='map-iframe-container'
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <iframe
        src={iframeSrc}
        width={width}
        height={height}
        frameBorder='1'
        allowFullScreen={true}
        style={{ position: 'relative' }}
      ></iframe>
    </div>
  );
};
