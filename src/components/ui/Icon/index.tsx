import Image from 'next/image';
import React from 'react';

export type IconName =
  | 'arrow-down'
  | 'canstar'
  | 'facebook'
  | 'google'
  | 'hat'
  | 'instagram'
  | 'logo'
  | 'mail'
  | 'tiktok'
  | 'lose'
  | 'unknown'
  | 'win';

interface IconProps {
  name: IconName;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  width?: number;
  height?: number;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, width, height, size = 'md', className }) => {
  const sizeToDimensions = {
    sm: { width: 12, height: 12 },
    md: { width: 76, height: 76 },
    lg: { width: 22, height: 22 },
    xl: { width: 28, height: 28 },
  };

  if (!width && !height) {
    const dimensions = sizeToDimensions[size];
    if (dimensions) {
      width = dimensions.width;
      height = dimensions.height;
    }
  }

  return (
    <Image loading='lazy' src={`/icons/${name}.svg`} alt={name} width={width} height={height} className={className} />
  );
};
