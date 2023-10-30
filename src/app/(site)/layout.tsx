import { PrimaryLayout } from '@/components';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return <PrimaryLayout>{children}</PrimaryLayout>;
}
