import Image from 'next/image';
import React from 'react';

export type IconName =
  | 'arrow-down'
  | 'checked'
  | 'close'
  | 'finder'
  | 'google'
  | 'hat'
  | 'tiktok'
  | 'facebook'
  | 'instagram'
  | 'canstar'
  | 'linked'
  | 'credit-savvy'
  | 'market'
  | 'mozo'
  | 'pet-insurance'
  | 'pinterest'
  | 'product-review'
  | 'savvy'
  | 'youtube'
  | 'logo-tiktok'
  | 'logo-facebook'
  | 'logo-instagram'
  | 'logo-canstar'
  | 'logo'
  | 'mail'
  | 'money'
  | 'mouse'
  | 'platform'
  | 'point'
  | 'santa_1'
  | 'santa_2'
  | 'santa_3'
  | 'santa_4'
  | 'lose'
  | 'unknown'
  | 'users'
  | 'users-active'
  | 'user-active'
  | 'user-question'
  | 'win';

interface IconProps {
  name: IconName | null;
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

  if (!name) return null;
  return (
    <Image src={`/icons/${name}.svg`} alt={name} width={width} height={height} loading='lazy' className={className} />
  );
};
