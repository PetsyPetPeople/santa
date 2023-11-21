import Image from 'next/image';
import React from 'react';

export type IconName =
  | 'arrow-down'
  | 'checked'
  | 'close'
  | 'hat'
  | 'icon-affiliate-referrals'
  | 'icon-apple'
  | 'icon-baidu'
  | 'icon-bing'
  | 'icon-canstar'
  | 'icon-cashback-rewards'
  | 'icon-cat'
  | 'icon-choice'
  | 'icon-commission-factory'
  | 'icon-credit-savvy'
  | 'icon-deal-spotr'
  | 'icon-deutsch-welpenplatz'
  | 'icon-display-ads'
  | 'icon-duck'
  | 'icon-email'
  | 'icon-facebook'
  | 'icon-finder'
  | 'icon-forum'
  | 'icon-google'
  | 'icon-growthops'
  | 'icon-instagram'
  | 'icon-klaviyo'
  | 'icon-linkedIn'
  | 'icon-mailchimp'
  | 'icon-market'
  | 'icon-mozo'
  | 'icon-pet'
  | 'icon-pinterest'
  | 'icon-podcasts'
  | 'icon-product-review'
  | 'icon-qrcode'
  | 'icon-reddit'
  | 'icon-savvy'
  | 'icon-snapchat'
  | 'icon-tiktok'
  | 'icon-trustpilot'
  | 'icon-webinars'
  | 'icon-x'
  | 'icon-yahoo'
  | 'icon-youtube'
  | 'logo-affiliate-referrals'
  | 'logo-apple'
  | 'logo-baidu'
  | 'logo-bing'
  | 'logo-canstar'
  | 'logo-cashback-rewards'
  | 'logo-cat'
  | 'logo-choice'
  | 'logo-commission-factory'
  | 'logo-compare-market'
  | 'logo-credit-savvy'
  | 'logo-deal-spotr'
  | 'logo-deutsch-welpenplatz'
  | 'logo-direct-traffic'
  | 'logo-display-ads'
  | 'logo-duck'
  | 'logo-email'
  | 'logo-facebook'
  | 'logo-finder'
  | 'logo-message'
  | 'logo-google'
  | 'logo-growthops'
  | 'logo-influencer-marketing'
  | 'logo-instagram'
  | 'logo-klaviyo'
  | 'logo-linkedIn'
  | 'logo-mailchimp'
  | 'logo-mozo'
  | 'logo-pinterest'
  | 'logo-podcasts'
  | 'logo-product-review'
  | 'logo-qrcode'
  | 'logo-reddit'
  | 'logo-rss'
  | 'logo-savvy'
  | 'logo-snapchat'
  | 'logo-sms'
  | 'logo-tiktok'
  | 'logo-pet'
  | 'logo-trustpilot'
  | 'logo-webinars'
  | 'logo-yahoo'
  | 'logo-youtube'
  | 'logo-x'
  | 'logo'
  | 'lose'
  | 'mail'
  | 'money'
  | 'mouse'
  | 'platform'
  | 'point'
  | 'roas'
  | 'santa_1'
  | 'santa_2'
  | 'santa_3'
  | 'santa_4'
  | 'unknown'
  | 'user-active'
  | 'user-question'
  | 'users-active'
  | 'users'
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
