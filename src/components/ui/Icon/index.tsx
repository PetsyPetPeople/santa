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
  | 'users'
  | 'user-active'
  | 'user-question'
  | 'win';

interface IconProps {
  name: IconName;
  size?: 'sm' | 'md' | 'lg';
  width?: number;
  height?: number;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, width, height, size = 'md', className }) => {
  const sizeToDimensions = {
    sm: { width: 24, height: 24 },
    md: { width: 48, height: 48 },
    lg: { width: 76, height: 76 },
  };

  if (!width && !height) {
    const dimensions = sizeToDimensions[size];
    if (dimensions) {
      width = dimensions.width;
      height = dimensions.height;
    }
  }

  return <Image priority src={`/icons/${name}.svg`} alt={name} width={width} height={height} className={className} />;
};
